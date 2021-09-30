import React from 'react'
import { NavLink } from 'react-router-dom'
import UserCard from './UserCard'

const EditUser = () => {
  return (
    <div className={'edit-user'}>
      <div className={'row'}>
        <div className={'col-12'}>
          <div className={'mb-2 d-flex justify-content-between'}>
            <h3>
              <NavLink exact to="/teacher-dashboard/users">
                Icon
              </NavLink>
              <span>Edit Account</span>
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
              <form action="">
                <div className={'form-group'}>
                  <label htmlFor="first_name">
                    Name <span className={'text-danger'}>*</span>
                  </label>
                  <div className={'row'}>
                    <div className={'col-md-4 mb-1'}>
                      <input
                        className={'form-control'}
                        name="first_name"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className={'col-md-4 mb-1'}>
                      <input
                        className={'form-control'}
                        name="second_name"
                        type="text"
                        placeholder="Middle Name"
                      />
                    </div>
                    <div className={'col-md-4 mb-1'}>
                      <input
                        className={'form-control'}
                        name="last_name"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className={'form-group row'}>
                  <div className={'col-md-6'}>
                    <label htmlFor="first_name">
                      Contact No <span className={'text-danger'}>*</span>
                    </label>
                    <input
                      type="text"
                      name="primary_contact"
                      placeholder="Phone No."
                      className={'form-control digits'}
                    />
                  </div>
                  <div className={'col-md-6 mt-3 mt-md-0'}>
                    <label htmlFor="first_name">
                      E-Mail <span className={'text-danger'}>*</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className={'form-control email'}
                    />
                  </div>
                </div>
                <div className={'form-group row'}>
                  <div className={'col-md-6'}>
                    <label htmlFor="first_name">
                      Status <span className={'text-danger'}>*</span>
                    </label>
                    <select
                      name="status"
                      id="search-status"
                      className={
                        'form-control select2-single select2-hidden-accessible'
                      }
                    >
                      <option value="0">Enabled</option>
                      <option value="1">Disabled</option>
                      <option value="2">Pending</option>
                    </select>
                  </div>
                  <div className={'col-md-6'}>
                    <label htmlFor="first_name">
                      Serial No. <span className={'text-danger'}>*</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Serial No."
                      className={'form-control email'}
                    />
                  </div>
                </div>
                <div className={'form-group row'}>
                  <div className={'col-md-6'}>
                    <label htmlFor="first_name">
                      Date Of Birth <span className={'text-danger'}>*</span>
                    </label>
                    <input
                      type="text"
                      name="dob"
                      placeholder="Date of birth"
                      className={'form-control datepicker'}
                    />
                  </div>
                  <div className={'col-md-6 mt-3 mt-md-0'}>
                    <label htmlFor="first_name">
                      Gender <span className={'text-danger'}>*</span>
                    </label>
                    <select
                      name="gender"
                      id="gender-status"
                      className={
                        'form-control select2-single select2-hidden-accessible'
                      }
                    >
                      <option value="0">Male</option>
                      <option value="1">Female</option>
                      <option value="2">Not Specified</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className={'card-footer'}>
              <input
                type="submit"
                name="submit"
                value="Save"
                className={'btn btn-app'}
              />
            </div>
          </div>
        </div>
        <UserCard />
      </div>
    </div>
  )
}

export default EditUser
