import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'src/components/Buttons'

const SetPassword = () => {
  return (
    <>
      <div className={'Info-card'}>
        <div className={'card-heading'}>
          <h5>Set your new password</h5>
        </div>
        <form action="">
          <div className={'form-group'}>
            <input
              className={'form-data'}
              name="password"
              id="password"
              type="password"
              placeholder="Enter your new password"
            />
          </div>

          <div className={'form-group'}>
            <input
              className={'form-data'}
              name="password"
              id="password"
              type="password"
              placeholder="Confirm your new password"
            />
          </div>

          <div className={'form-group'}>
            <Button type="submit" variant="primary" label="Change password" />
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
