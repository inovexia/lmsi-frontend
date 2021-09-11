import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'src/components/Buttons'

const ForgotPassword = () => {
  return (
    <>
      <div className={'Info-card'}>
        <div className={'card-heading'}>
          <h5>Can't log in?</h5>
        </div>
        <form action="">
          <label className={'input-label mt-4'} htmlFor="email">
            We'll send a recovery link to
          </label>
          <div className={'form-group mt-0'}>
            <input
              className={'form-data'}
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email address"
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
