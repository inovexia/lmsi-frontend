import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'src/components/Buttons'

import { AppContext } from 'src/AppContext'
import { Toast } from 'src/components/Toast'
import { ucFirst } from 'src/helpers/Utils'

const SetPassword = ({
  match: {
    params: { token },
  },
}) => {
  const {
    appStore: { apiURL },
  } = useContext(AppContext)
  const [newPassword, setNewPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState(''),
    [resColor, setResColor] = useState(null),
    [resMsg, setResMsg] = useState(null),
    handleSubmit = async event => {
      event.preventDefault()
      setResMsg(null)
      if (newPassword === confirmPassword) {
        try {
          // Request Access Token From API
          const forgotRequest = await fetch(
            `${apiURL}/member/reset/password/${token}`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                language: 'en',
              },
              body: JSON.stringify({
                newPassword: confirmPassword,
              }),
            }
          )
          if (forgotRequest.ok) {
            const data = await forgotRequest.json()
            if (data.API_STATUS) {
              setResColor('success')
              setResMsg(data.message)
              setTimeout(() => {
                return data.response
              }, 3000)
            } else {
              setResColor('danger')
              setResMsg(data.message)
            }
          } else {
            throw new Error('Unexpected Error')
          }
        } catch (err) {
          console.error(err.message)
        }
      } else {
        setResColor('danger')
        setResMsg('New password OR Confirm password not match')
      }
    }
  return (
    <>
      <div className={'Info-card'}>
        <div className={'card-heading'}>
          <h5>Set your new password</h5>
        </div>
        <form onSubmit={event => handleSubmit(event)}>
          {resMsg && <Toast bgColor={resColor} message={ucFirst(resMsg)} />}
          <div className={'form-group'}>
            <input
              autoComplete={'new-password'}
              className={'form-data'}
              id="new-password"
              type="password"
              placeholder="Enter your new password"
              onChange={({ target: { value } }) => {
                setNewPassword(value)
              }}
              defaultValue={newPassword}
              required={true}
            />
          </div>
          <div className={'form-group'}>
            <input
              autoComplete={'confirm-password'}
              className={'form-data'}
              id="confirm-password"
              type="password"
              placeholder="Confirm your new password"
              onChange={({ target: { value } }) => {
                setConfirmPassword(value)
              }}
              defaultValue={confirmPassword}
              required={true}
            />
          </div>
          <div className={'form-group'}>
            <Button type="submit" variant="app" label="Change password" />
          </div>
        </form>
        <div className={'Info-card-footer'}>
          <ul>
            <li>
              <NavLink to={'/auth/sign-in'}>
                <span>Return to log in</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={'footer-top'}>
        <div>
          <ul>
            <li>
              <NavLink to={'#'}>
                <span>Login help</span>
              </NavLink>
            </li>
            <p style={{ margin: '0px 8px' }}>•</p>
            <li>
              <NavLink to={`#`}>
                <span>Contact Support</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SetPassword
