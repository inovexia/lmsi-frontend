import React from 'react'
import { NavLink } from 'react-router-dom'

const UserCard = () => {
  return (
    <div className={'col-md-3'}>
      <div className={'card'}>
        <div className={'card-body'}>
          <div className={'text-center'}>
            <div
              className={
                'rounded-circle m-0 align-self-center list-thumbnail-letters mx-auto text-uppercase'
              }
            >
              R.K
            </div>
            <h4
              style={{ fontWeight: 'bold' }}
              className={'list-item-heading mb-1 py-3'}
            >
              Roshan
            </h4>
            <button type="button" className={'btn btn-sm btn-outline-info'}>
              Edit
            </button>
          </div>
        </div>
        <ul className={'list-group list-group-menu user-action-menu'}>
          <li
            className={
              'list-group-item border-left-0 border-right-0 user-menu-list bg-primary'
            }
          >
            <NavLink exact to="edit" className={'d-block text-white'}>
              Basic Details
            </NavLink>
          </li>
          <li
            className={
              'list-group-item border-left-0 border-right-0 user-menu-list '
            }
          >
            <NavLink
              style={{ color: '#3a3a3a' }}
              exact
              to="change-password"
              className={'d-block'}
            >
              Change Password
            </NavLink>
          </li>
          <li
            className={
              'list-group-item border-left-0 border-right-0 user-menu-list '
            }
          >
            <NavLink
              style={{ color: '#3a3a3a' }}
              exact
              to="enrolled-course"
              className={'d-block'}
            >
              Enrolled Courses
            </NavLink>
          </li>
          <li
            className={
              'list-group-item border-left-0 border-right-0 user-menu-list '
            }
          >
            <NavLink
              style={{ color: '#3a3a3a' }}
              exact
              to="test-taken"
              className={'d-block'}
            >
              Tests Taken
            </NavLink>
          </li>
          <li
            className={
              'list-group-item border-left-0 border-right-0 user-menu-list '
            }
          >
            <NavLink
              style={{ color: '#3a3a3a' }}
              exact
              to="#"
              className={'d-block'}
            >
              Delete Account
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserCard
