import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'

import { AppContext } from 'src/AppContext'
import { useLocalStorage } from 'src/hooks'
import { decrypt, encrypt } from 'src/helpers/Utils'
import {
  PROFILE_NAME_UPDATED,
  PROFILE_UPDATE_FAILED,
  UNEXPECTED_ERROR
} from 'src/constants/actions'

const About = () => {
  const {
      appStore: { user, userStorageKey, apiURL },
      updateAppStore
    } = useContext(AppContext),
    [appUser, setAppUser] = useLocalStorage(userStorageKey, null),
    [firstName, setFirstName] = useState(user.first_name),
    [lastName, setLastName] = useState(user.last_name),
    setFullName = value => {
      if (value.includes(' ')) {
        const FullName = value.split(' ')
        setLastName(FullName.pop())
        setFirstName(FullName.join(' '))
      } else {
        setFirstName(value)
      }
    },
    saveFullName = async value => {
      if (`${firstName} ${lastName}` === value) {
        return
      }
      try {
        const FullName = value.split(' '),
          updateData = {
            last_name: FullName.pop(),
            first_name: FullName.join(' ')
          },
          nameRequest = await fetch(`${apiURL}/member/profile-name/update`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              language: 'en',
              Authorization: `Bearer ${user.accessToken}`
            },
            body: JSON.stringify(updateData)
          })
        // Request Access Token From API
        if (nameRequest.ok) {
          const data = await nameRequest.json()
          if (data.API_STATUS) {
            const appUserData = decrypt(appUser),
              updatedUser = encrypt({
                ...appUserData,
                ...updateData
              })
            setFullName(value)
            setAppUser(updatedUser)
            updateAppStore({
              type: PROFILE_NAME_UPDATED,
              payload: {
                notification: {
                  code: PROFILE_NAME_UPDATED,
                  color: 'success',
                  message: data.message
                },
                user: updatedUser
              }
            })
          } else {
            updateAppStore({
              type: PROFILE_UPDATE_FAILED,
              payload: {
                error: {
                  code: PROFILE_UPDATE_FAILED,
                  color: 'danger',
                  message: data.message
                }
              }
            })
          }
        } else {
          throw new Error('Unexpected Error')
        }
      } catch (err) {
        updateAppStore({
          type: UNEXPECTED_ERROR,
          payload: {
            error: {
              code: UNEXPECTED_ERROR,
              color: 'warning',
              message: err.message
            }
          }
        })
      }
    }

  false && console.log(user)
  return (
    <Form className={'mb-3'}>
      <Form.Group className={'mb-3'}>
        <Form.Label>Full name</Form.Label>
        <Form.Control
          type={'text'}
          placeholder={'Enter Full Name'}
          defaultValue={`${firstName} ${lastName}`}
          onBlur={({ target: { value } }) => {
            saveFullName(value)
          }}
        />
      </Form.Group>
    </Form>
  )
}

export default About
