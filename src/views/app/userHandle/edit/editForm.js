import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import { AppContext } from 'src/AppContext'
import { useLocalStorage } from 'src/hooks'
import { decrypt, encrypt } from 'src/helpers/Utils'
import {
  PROFILE_NAME_UPDATED,
  PROFILE_UPDATE_FAILED,
  UNEXPECTED_ERROR,
} from 'src/constants/actions'

const EditForm = () => {
  const {
      appStore: { user, userStorageKey, apiURL },
      updateAppStore,
    } = useContext(AppContext),
    [appUser, setAppUser] = useLocalStorage(userStorageKey, encrypt(user)),
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
    handleSubmit = async event => {
      event.preventDefault()
      try {
        const updateData = {
            first_name: firstName,
            last_name: lastName,
          },
          nameRequest = await fetch(`${apiURL}/member/profile-name/update`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              language: 'en',
              Authorization: `Bearer ${user.accessToken}`,
            },
            body: JSON.stringify(updateData),
          })
        // Request Access Token From API

        if (nameRequest.ok) {
          const data = await nameRequest.json()
          if (data.API_STATUS) {
            const appUserData = decrypt(appUser),
              updatedUser = encrypt({
                ...appUserData,
                ...updateData,
              })
            setAppUser(updatedUser)
            updateAppStore({
              type: PROFILE_NAME_UPDATED,
              payload: {
                notification: {
                  code: PROFILE_NAME_UPDATED,
                  color: 'success',
                  message: data.message,
                },
                user: updatedUser,
              },
            })
          } else {
            updateAppStore({
              type: PROFILE_UPDATE_FAILED,
              payload: {
                error: {
                  code: PROFILE_UPDATE_FAILED,
                  color: 'danger',
                  message: data.message,
                },
              },
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
              message: err.message,
            },
          },
        })
      }
    }

  false && console.log(user)
  return (
    <div>
      <Form onSubmit={event => handleSubmit(event)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            defaultValue={`${firstName} ${lastName}`}
            onChange={({ target: { value } }) => setFullName(value)}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="Enter your phone number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  )
}

export default EditForm
