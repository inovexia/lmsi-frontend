import React from 'react'
import { NavLink } from 'react-router-dom'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'
import UserCard from './UserCard'

const ChangePassword = () => {
  return (
    <div className={'edit-user'}>
      <div className={'row'}>
        <div className={'col-12'}>
          <div className={'mb-2 d-flex justify-content-between'}>
            <h3>
              <NavLink exact to="/teacher-dashboard/users">
                <KeyboardBackspaceSharpIcon className={'icon'} />
              </NavLink>
              <span>Change Password</span>
            </h3>
            <NavLink exact to="/teacher-dashboard/users/invite">
              <button className={'invite-btn'}>Invite User</button>
            </NavLink>
          </div>
          <div className={'separator mb-5'}></div>
        </div>
      </div>
      <div className={'row'}>
        <div className={'col-md-9'}>
          <div className={'card mb-4'}>
            <div className={'card-body'}>
              <h4>Option 1</h4>
              <p>
                Send create password link on user's email and primary contact
                number. User can create their own password using that link
              </p>
              <button className={'btn btn-app'}>Send Link</button>
            </div>
          </div>
          <div className={'card mb-4'}>
            <div className={'card-body'}>
              <h4>Option 1</h4>
              <p>
                Reset and send a system generated password on user's email and
                primary contact number. User can login with the new password
              </p>
              <button className={'btn btn-app'}>Send Link</button>
            </div>
          </div>
        </div>
        <UserCard />
      </div>
    </div>
  )
}

export default ChangePassword
