import React, { useEffect, useState } from 'react'
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
  const [email, setEmail] = useState(''),
    [firstName, setFirstName] = useState(''),
    [lastName, setLastName] = useState(''),
    [password, setPassword] = useState(''),
    [institutionId, setInstitutionId] = useState(null),
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
    handleSubmit = event => {
      event.preventDefault()
      const newPasswordField = document.getElementById('new-password')
      newPasswordField.type = 'password'
      console.log({
        firstName,
        lastName,
        password,
        email,
        institutionId,
        role_id: getRoleId(RoleKey),
      })
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
          <div className={'form-group'}>
            <input
              className={'form-data'}
              type={'email'}
              placeholder={'Enter your email address'}
              onChange={({ target: { value } }) => setEmail(value)}
              defaultValue={email}
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
              defaultValue={password}
              placeholder={'Enter your password'}
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
              By signing up, I accept the LMSI{' '}
              <NavLink to={'/'}>
                <span>Cloud Terms of Service</span>
              </NavLink>{' '}
              and acknowledge the{' '}
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
        <div className={'social-login'}>
          <Button
            className={'d-flex w-100 border'}
            variant={'light'}
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
            variant={'light'}
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
            variant={'light'}
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
            variant={'light'}
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
