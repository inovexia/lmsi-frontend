import React from 'react'
import { NavLink } from 'react-router-dom'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'
import UserCard from './UserCard'

const TestTaken = () => {
  return (
    <div className={'edit-user'}>
      <div className={'row'}>
        <div className={'col-12'}>
          <div className={'mb-2 d-flex justify-content-between'}>
            <h3>
              <NavLink exact to="/teacher-dashboard/users">
                <KeyboardBackspaceSharpIcon className={'icon'} />
              </NavLink>
              <span>Tests Taken</span>
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
              <h4>No Tests Taken Yet</h4>
            </div>
          </div>
        </div>
        <UserCard />
      </div>
    </div>
  )
}

export default TestTaken
