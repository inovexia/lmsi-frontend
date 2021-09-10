import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'src/components/Buttons'
import { Icon, GoogleIcon } from 'src/components/Icon'

const SignIn = () => {
  const [show, setShow] = useState(false)

  const handleSubmit = () => {
    setShow(true)
  }

  const handleChange = () => {
    setShow(false)
  }

  return (
    <>
      <div className={'Info-card'}>
        <div className={'card-heading'}>
          <h5>Log in to your account</h5>
        </div>
        <form action="">
          <div className={'form-group'}>
            <input
              onFocus={handleChange}
              className={'form-data'}
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          {show ? (
            <div className={'form-group'}>
              <input
                className={'form-data'}
                type="password"
                placeholder="Enter your password"
              />
            </div>
          ) : (
            ''
          )}
          <div className={'form-group'}>
            <Button
              onClick={handleSubmit}
              type="button"
              variant="primary"
              label={show ? 'Log in' : 'Continue'}
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
              <NavLink to={'#'}>
                <span>Privacy Policy</span>
              </NavLink>
            </li>
            <p style={{ margin: '0px 8px' }}>•</p>
            <li>
              <NavLink to={`#`}>
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
