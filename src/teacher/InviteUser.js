import React, { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'
import './InviteUser.css'

const InviteUser = () => {
  const [users, setUser] = useState([]),
    fetchUsers = async () => {
      const res = await fetch(
        'https://lmsi-api.herokuapp.com/api/teacher/members/list/11/7/1',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            language: 'en',
          },
        }
      )
      try {
        const data = await res.json()
        if (data.API_STATUS) {
          return data.response
        } else {
          console.error(data.message)
        }
      } catch (err) {
        console.error(err.message)
      }
    },
    getUser = useCallback(async () => {
      const usersFromServer = await fetchUsers()
      usersFromServer && setUser(usersFromServer)
    }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <div className={'invite-user'}>
      <div className={'row'}>
        <div className={'col-12'}>
          <div className={'mb-2 d-flex justify-content-between'}>
            <h3>
              <NavLink exact to="/teacher-dashboard/users">
                <KeyboardBackspaceSharpIcon className={'icon'} />
              </NavLink>
              <span>Invite Users</span>
            </h3>
            <NavLink exact to="/teacher-dashboard/users/invite">
              <button className={'invite-btn'}>Invite User</button>
            </NavLink>
          </div>
          <div className={'separator mb-5'}></div>
          <div className={'row mb-3'}>
            <div className={'col-sm-6 mb-2'}>
              <div className={'card'}>
                <div className={'card-body'}>
                  <form action="#" method="post">
                    <h4 className={'card-title'}>Send Invite By Email</h4>
                    <div className={'input-group'}>
                      <input
                        type="email"
                        name="email"
                        id="1"
                        placeholder="Enter user email-id"
                      />
                      <div className={'input-group-append'}>
                        <button
                          style={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                          }}
                          type="submit"
                          className={'btn btn-primary default'}
                        >
                          Invite
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className={'col-sm-6'}>
              <div className={'card'}>
                <div className={'card-body'}>
                  <form action="#" method="post">
                    <h4 className={'card-title'}>Send Invite By Mobile</h4>
                    <div className={'input-group'}>
                      <input
                        type="tel"
                        name="phone"
                        id="2"
                        placeholder="Enter mobile number"
                      />
                      <div className={'input-group-append'}>
                        <button
                          style={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                          }}
                          type="submit"
                          className={'btn btn-primary default'}
                        >
                          Invite
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {users.map((user, i) => {
            return (
              <div key={i} className={'row'}>
                <div className={'col-12 list'}>
                  <div className={'card d-flex flex-row mb-2'}>
                    <div className={'pl-2 d-flex flex-grow-1 min-width-zero'}>
                      <div
                        className={
                          'card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center'
                        }
                      >
                        <a href="##" className={'w-100 w-md-30'}>
                          <p className={'list-item-heading mb-0 truncate'}>
                            {user.serial_id}
                          </p>
                        </a>
                        <p
                          className={'mb-0 text-muted text-small w-100 w-md-40'}
                        >
                          {user.email}
                        </p>
                        <div
                          className={
                            'w-100 w-md-30 text-end text-md-right mt-3 mt-md-0'
                          }
                        >
                          <button
                            className={'btn btn-sm btn-outline-primary me-3'}
                            type="button"
                          >
                            Resend
                          </button>
                          <button
                            className={'btn btn-sm btn-outline-danger'}
                            type="button"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default InviteUser
