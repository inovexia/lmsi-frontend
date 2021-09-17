import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from 'src/AppContext'
import { Toast } from 'src/components/Toast'
import { NavLink } from 'react-router-dom'
import { ucFirst, getRoleId } from 'src/helpers/Utils'
import { Button, OutlineButton } from 'src/components/Buttons'
import { Icon, GoogleIcon } from 'src/components/Icon'
import { generatePassword } from 'src/helpers/Utils'

const SignUp = ({
  match: {
    params: { InstituteId, Method, MethodValue, RoleKey = 'learner' },
  },
}) => {
  const {
    appStore: { apiURL },
  } = useContext(AppContext)
  const [userExists, setUserExists] = useState(false),
    [email, setEmail] = useState(''),
    [firstName, setFirstName] = useState(''),
    [lastName, setLastName] = useState(''),
    [password, setPassword] = useState(''),
    [institutionId, setInstitutionId] = useState(null),
    [resColor, setResColor] = useState(null),
    [resMsg, setResMsg] = useState(null),
    copyPassword = () => {
      const newPasswordField = document.getElementById('new-password')
      newPasswordField.select()
      document.execCommand('copy')
      newPasswordField.type = 'password'
      setTimeout(() => {
        alert('Password copied to clipboard')
      }, 1000)
    },
    generateNewPassword = () => {
      const newPasswordField = document.getElementById('new-password')
      setPassword(generatePassword(15))
      newPasswordField.type = 'text'
    },
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
      setResMsg(null)
      const newPasswordField = document.getElementById('new-password')
      newPasswordField.type = 'password'
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
            setUserExists(data.EMAIL_EXISTS)
          } else {
            try {
              // Request Access Token From API
              const registerRequest = await fetch(`${apiURL}/member/signup`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  language: 'en',
                },
                body: JSON.stringify({
                  first_name: firstName,
                  last_name: lastName,
                  password,
                  email,
                  institutionId,
                  role_id: getRoleId(RoleKey),
                }),
              })
              if (registerRequest.ok) {
                const data = await registerRequest.json()
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
        } else {
          throw new Error('Unexpected Error')
        }
      } catch (err) {
        console.error(err.message)
      }
    }

  useEffect(() => {
    if (Method === 'email') {
      setEmail(MethodValue)
    }
    if (InstituteId) {
      setInstitutionId(InstituteId)
    }
  }, [Method, MethodValue, InstituteId])

  return (
    <>
      <div className={'Info-card'}>
        <div className={'card-heading'}>
          <h5>{`Register your account ${ucFirst(RoleKey)}`}</h5>
        </div>
        <form autoComplete={'off'} onSubmit={event => handleSubmit(event)}>
          {resMsg && <Toast bgColor={resColor} message={ucFirst(resMsg)} />}
          <div className={'form-group'}>
            <input
              className={`form-data${userExists ? ` invalid` : ``}`}
              type={'email'}
              placeholder={'Enter your email address'}
              onChange={({ target: { value } }) => {
                setEmail(value)
                setUserExists(false)
              }}
              defaultValue={email}
              title={userExists ? `Email already taken` : undefined}
              required={true}
            />
          </div>
          <div className={'form-group'}>
            <input
              className={'form-data'}
              type={'text'}
              name={'full-name'}
              autoComplete={'full-name'}
              onChange={({ target: { value } }) => setFullName(value)}
              placeholder={'Enter your full name'}
              required={true}
            />
          </div>
          <div className={'form-group'}>
            <input
              className={'form-data'}
              type={'password'}
              id={'new-password'}
              name={'new-password'}
              autoComplete={'new-password'}
              onFocus={({ target, target: { type } }) => {
                if (type !== 'password') {
                  copyPassword()
                  target.blur()
                }
              }}
              onChange={({ target: { value } }) => setPassword(value)}
              value={password}
              placeholder={'Enter your password'}
              required={true}
            />
          </div>
          <div className={'form-group'}>
            <OutlineButton
              type={'button'}
              onClick={() => generateNewPassword()}
            >
              Generate Strong Password
            </OutlineButton>
          </div>
          <div className={'term-conditions'}>
            <span>
              By signing up, user will be accepting the LMSI{' '}
              <NavLink to={'/'}>
                <span>Terms of Service</span>
              </NavLink>{' '}
              and acknowledging the{' '}
              <NavLink to={'/'}>
                <span>Privacy Policy</span>
              </NavLink>
            </span>
          </div>
          <div className={'form-group'}>
            <Button type={'submit'} variant={'primary'} label={'Register'} />
          </div>
        </form>
        <h6 className={'text-center my-3'}>
          <small>OR</small>
        </h6>
        <div className={'social-login'} title={'Coming Soon'}>
          <Button
            className={'d-flex w-100 border'}
            variant={'light'}
            disabled={true}
          >
            <GoogleIcon className={'my-auto'} />
            <span className={'flex-grow-1 text-center'}>
              Continue With Google
            </span>
          </Button>
          <Button
            className={'d-flex w-100 border'}
            variant={'light'}
            disabled={true}
          >
            <Icon icon={'facebook'} className={'my-auto'} />
            <span className={'flex-grow-1 text-center'}>
              Continue With Facebook
            </span>
          </Button>
          <Button
            className={'d-flex w-100 border'}
            variant={'light'}
            disabled={true}
          >
            <Icon icon={'linkedin'} className={'my-auto'} />
            <span className={'flex-grow-1 text-center'}>
              Continue With LinkedIn
            </span>
          </Button>
          <Button
            className={'d-flex w-100 border'}
            variant={'light'}
            disabled={true}
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
              <NavLink to={'/auth/sign-in'}>
                <span>Already have an LMSI account? Log in</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={'footer-top'}>
        <span>
          This page is protected by reCAPTCHA and the Google{' '}
          <NavLink to={'#'}>
            <span>Privacy Policy</span>
          </NavLink>{' '}
          and{' '}
          <NavLink to={'#'}>
            <span>Terms of Service</span>
          </NavLink>{' '}
          apply
        </span>
      </div>
    </>
  )
}

export default SignUp
