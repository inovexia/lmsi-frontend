import React, { useContext, useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { Toast } from 'src/components/Toast'
import { Button } from 'src/components/Buttons'
import { Icon, GoogleIcon } from 'src/components/Icon'
import { ucFirst } from 'src/helpers/Utils'

const SignIn = () => {
  const { apiURL, loginUser } = useContext(AppContext)
  const [sendPath, sendTo] = useState(null),
    [alowLogin, setAlowLogin] = useState(false),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [resColor, setResColor] = useState(null),
    [resMsg, setResMsg] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()
    setResMsg(null)
    if (!alowLogin) {
      // Check Email Existence From API
      const checkRequest = await fetch(`${apiURL}/member/check-email/exists`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          language: 'en',
        },
        body: JSON.stringify({ email }),
      })
      try {
        if (checkRequest.ok) {
          const data = await checkRequest.json()
          if (data.EMAIL_EXISTS) {
            setAlowLogin(true)
          } else {
            sendTo(`/auth/sign-up/learner/email/${email}`)
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
            setResColor('success')
            setResMsg(data.message)
            setTimeout(() => {
              loginUser(data.response)
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

  return sendPath ? (
    <Redirect to={sendPath} />
  ) : (
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
        <h6 className={'text-center my-3'}>
          <small>OR</small>
        </h6>
        <div className={'social-login'}>
          <Button
            className={'d-flex w-100 border'}
            variant="light"
            disabled={true}
            title={'Coming Soon'}
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
            title={'Coming Soon'}
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
            title={'Coming Soon'}
          >
            <Icon icon={'linkedin'} className={'my-auto'} />
            <span className={'flex-grow-1 text-center'}>
              Continue With LinkedIn
            </span>
          </Button>
          <Button
            className={'d-flex w-100 border'}
            variant="light"
            disabled={true}
            title={'Coming Soon'}
          >
            <Icon icon={'twitter'} className={'my-auto'} />
            <span className={'flex-grow-1 text-center'}>
              Continue With Twitter
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
