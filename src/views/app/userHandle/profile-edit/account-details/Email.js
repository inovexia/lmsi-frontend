import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, InputGroup } from 'react-bootstrap'

import { AppContext } from 'src/AppContext'
import { useLocalStorage } from 'src/hooks'
import { decrypt, encrypt } from 'src/helpers/Utils'
import {
  PROFILE_NAME_UPDATED,
  PROFILE_UPDATE_FAILED,
  UNEXPECTED_ERROR
} from 'src/constants/actions'

const Email = () => {
  const {
      appStore: { user, userStorageKey, apiURL, appRoot },
      updateAppStore
    } = useContext(AppContext),
    history = useHistory(),
    [appUser, setAppUser] = useLocalStorage(userStorageKey, null),
    [userEmail, setUserEmail] = useState(user.email),
    sendUnexpectedError = message => {
      updateAppStore({
        type: UNEXPECTED_ERROR,
        payload: {
          error: {
            code: UNEXPECTED_ERROR,
            color: 'warning',
            message: message
          }
        }
      })
    },
    sendUpdateFailed = message => {
      updateAppStore({
        type: PROFILE_UPDATE_FAILED,
        payload: {
          error: {
            code: PROFILE_UPDATE_FAILED,
            color: 'danger',
            message: message
          }
        }
      })
    },
    sendProfileUpdated = (updateData, message) => {
      const appUserData = decrypt(appUser),
        updatedUser = encrypt({
          ...appUserData,
          ...updateData
        })
      setAppUser(updatedUser)
      updateAppStore({
        type: PROFILE_NAME_UPDATED,
        payload: {
          notification: {
            code: PROFILE_NAME_UPDATED,
            color: 'success',
            message: message
          },
          user: updatedUser,
          history,
          redirectTo: `${appRoot}/${user.user_name}`
        }
      })
    },
    updateUserEmail = async () => {
      try {
        const updateData = {
            email: userEmail
          },
          usernameReq = await fetch(`${apiURL}/member/update/profile-email`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              language: 'en',
              Authorization: `Bearer ${user.accessToken}`
            },
            body: JSON.stringify(updateData)
          })
        if (usernameReq.ok) {
          const data = await usernameReq.json()
          if (data.API_STATUS) {
            sendProfileUpdated(updateData, data.message)
          } else {
            sendUpdateFailed(data.message)
          }
        } else {
          throw new Error('Unexpected Error')
        }
      } catch (err) {
        sendUnexpectedError(err.message)
      }
    }

  false && console.log(user)
  return (
    <Form className={'mb-3'}>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Email address</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text
            className={`text-white bg-${
              user.is_email_verified ? 'success' : 'warning'
            }`}
            title={user.is_email_verified ? 'Verified' : 'Not Verified'}
          >
            {user.is_email_verified ? '✓' : '⚠'}
          </InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userEmail}
            onChange={({ target: { value } }) => setUserEmail(value)}
          />
          <Button
            variant="outline-danger"
            onClick={() => setUserEmail(user.email)}
            disabled={user.email === userEmail}
          >
            Cancel
          </Button>
          <Button
            variant="outline-app"
            onClick={updateUserEmail}
            disabled={user.email === userEmail}
          >
            Save
          </Button>
        </InputGroup>
        <Form.Text className="text-muted">
          You'll have to verify your new email on change.
          <br />
          <strong>Note:</strong> We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    </Form>
  )
}

export default Email
