import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'src/components/Buttons'

import { AppContext } from 'src/AppContext'
import { Toast } from 'src/components/Toast'
import { ucFirst } from 'src/helpers/Utils'

const ForgotPassword = () => {
  const {
    appStore: { apiURL },
  } = useContext(AppContext)
  const [email, setEmail] = useState(''),
    [resColor, setResColor] = useState(null),
    [resMsg, setResMsg] = useState(null),
    handleSubmit = async event => {
      event.preventDefault()
      setResMsg(null)
      try {
        // Request Access Token From API
        const forgotRequest = await fetch(`${apiURL}/member/password-reset`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            language: 'en',
          },
          body: JSON.stringify({
            email,
          }),
        })
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
    }

  return (
    <>
      <div className={'Info-card'}>
        <div className={'card-heading'}>
          <h5>Can't log in?</h5>
        </div>
        <form autoComplete={'off'} onSubmit={event => handleSubmit(event)}>
          {resMsg && <Toast bgColor={resColor} message={ucFirst(resMsg)} />}
          <label className={'input-label mt-4'} htmlFor="email">
            We'll send a recovery link to
          </label>
          <div className={'form-group mt-0'}>
            <input
              className={`form-data`}
              type={'email'}
              placeholder={'Enter your email address'}
              onChange={({ target: { value } }) => {
                setEmail(value)
              }}
              defaultValue={email}
              required={true}
            />
          </div>
          <div className={'form-group'}>
            <Button
              type="submit"
              variant="primary"
              label="Send recovery link"
            />
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

export default ForgotPassword
