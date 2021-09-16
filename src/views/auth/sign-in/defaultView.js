import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { Toast } from 'src/components/Toast'
import { Button } from 'src/components/Buttons'
import { Icon, GoogleIcon } from 'src/components/Icon'
import { LOGIN_USER } from 'src/constants/actions'
import { isBrowser, ucFirst } from 'src/helpers/Utils'

const SignIn = ({
  history,
  match: {
    params: { redirectTo },
  },
}) => {
  const {
      appStore: { apiURL, appRoot },
      updateAppStore,
    } = useContext(AppContext),
    [alowLogin, setAlowLogin] = useState(false),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [resColor, setResColor] = useState(null),
    [resMsg, setResMsg] = useState(null),
    handleSubmit = async event => {
      event.preventDefault()
      setResMsg(null)
      if (!alowLogin) {
        // Check Email Existence From API
        const checkRequest = await fetch(
          `${apiURL}/member/check-email/exists`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              language: 'en',
            },
            body: JSON.stringify({ email }),
          }
        )
        try {
          if (checkRequest.ok) {
            const data = await checkRequest.json()
            if (data.EMAIL_EXISTS) {
              setAlowLogin(true)
            } else {
              history.push(`/auth/sign-up/learner/email/${email}`)
            }
          } else {
            throw new Error('Unexpected Error')
          }
        } catch (err) {
          console.error(err.message)
        }
      } else {
        // Request Access Token From API
        const loginRequest = await fetch(`${apiURL}/member/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            language: 'en',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
        try {
          if (loginRequest.ok) {
            const data = await loginRequest.json()
            if (data.API_STATUS) {
              const sendTo = redirectTo ? window.atob(redirectTo) : appRoot
              setResColor('success')
              setResMsg(data.message)
              const user = data.response
              isBrowser &&
                localStorage.setItem('app_user', JSON.stringify(user))
              updateAppStore({
                type: LOGIN_USER,
                payload: { user },
              })
              setTimeout(() => {
                history.push(sendTo)
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
    }

  return (
    <>
      <div className={'Info-card'}>
        <div className={'card-heading'}>
          <h5>Log in to your account</h5>
        </div>
        <form onSubmit={event => handleSubmit(event)}>
          {resMsg && <Toast bgColor={resColor} message={ucFirst(resMsg)} />}
          <div className={'form-group'}>
            <input
              className={'form-data'}
              type={'email'}
              onChange={({ target: { value } }) => setEmail(value)}
              placeholder={'Enter your email address'}
              defaultValue={email}
              required
            />
          </div>
          {alowLogin && (
            <div className={'form-group'}>
              <input
                className={'form-data'}
                type={'password'}
                onChange={({ target: { value } }) => setPassword(value)}
                defaultValue={password}
                placeholder={'Enter your password'}
              />
            </div>
          )}
          <div className={'form-group'}>
            <Button
              type={'submit'}
              variant={'primary'}
              label={alowLogin ? 'Log in' : 'Continue'}
            />
          </div>
        </form>
        <p className={'d-block text-center fs-sm fw-bold my-3'}>OR</p>
        <div className={'social-login'} title={'Coming Soon'}>
          <Button
            className={'d-flex w-100 border'}
            variant="light"
            disabled={true}
          >
            <GoogleIcon className={'my-auto'} />
            <span className={'flex-grow-1 text-center'}>
              Continue With Google
            </span>
          </Button>
          <Button
            className={'d-flex w-100 border'}
            variant="light"
            disabled={true}
          >
            <Icon icon={'facebook'} className={'my-auto'} />
            <span className={'flex-grow-1 text-center'}>
              Continue With Facebook
            </span>
          </Button>
          <Button
            className={'d-flex w-100 border'}
            variant="light"
            disabled={true}
          >
            <Icon icon={'instagram'} className={'my-auto'} />
            <span className={'flex-grow-1 text-center'}>
              Continue With Instagram
            </span>
          </Button>
          <Button
            className={'d-flex w-100 border'}
            variant="light"
            disabled={true}
          >
            <Icon icon={'linkedin'} className={'my-auto'} />
            <span className={'flex-grow-1 text-center'}>
              Continue With LinkedIn
            </span>
          </Button>
        </div>
        <div className={'Info-card-footer'}>
          <ul>
            <li>
              <NavLink to={'/auth/forgot-password'}>
                <span>Can't log in?</span>
              </NavLink>
            </li>
            <p style={{ margin: '0px 8px' }}>•</p>
            <li>
              <NavLink to={`/auth/sign-up`}>
                <span>Register for an account</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={'footer-top'}>
        <div>
          <ul>
            <li>
              <NavLink to={'/'}>
                <span>Privacy Policy</span>
              </NavLink>
            </li>
            <p style={{ margin: '0px 8px' }}>•</p>
            <li>
              <NavLink to={'/'}>
                <span>User Notice</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SignIn
