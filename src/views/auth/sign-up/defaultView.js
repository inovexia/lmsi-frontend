import React from 'react'
import { NavLink } from 'react-router-dom'
import { ucFirst, getRoleId } from 'src/helpers/Utils'
import { Button } from 'src/components/Buttons'
import { Icon, GoogleIcon } from 'src/components/Icon'

const SignUp = ({
  match: {
    params: { InstituteId, Method, MethodValue, RoleKey = 'learner' },
  },
}) => {
  false && console.log(InstituteId, Method, MethodValue, getRoleId(RoleKey))
  return (
    <>
      <div className={'Info-card'}>
        <div className={'card-heading'}>
          <h5>{`Register your account ${ucFirst(RoleKey)}`}</h5>
        </div>
        <form action="">
          <div className={'form-group'}>
            <input
              className={'form-data'}
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className={'form-group'}>
            <input
              className={'form-data'}
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className={'term-conditions'}>
            <span>
              By signing up, I accept the LMSI{' '}
              <NavLink to={'#'}>
                <span>Cloud Terms of Service</span>
              </NavLink>{' '}
              and acknowledge the{' '}
              <NavLink to={'#'}>
                <span>Privacy Policy</span>
              </NavLink>
            </span>
          </div>
          <div className={'form-group'}>
            <Button type="submit" variant="primary" label="Register" />
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
