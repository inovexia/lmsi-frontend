import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp';
import './InviteUser.css';

const InviteUser = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const usersFromServer = await fetchUsers();
      setUser(usersFromServer);
    };

    getUser();
  }, []);

  const fetchUsers = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await fetch(
      'http://localhost:6600/lmsi/teacher/members/list/11/7/1'
    );

    console.log(res);
    const data = await res.json();
    console.log(data.response);

    return data.response;
  };
  return (
    <div className={'invite-user'}>
      <div className={'row'}>
        <div className={'col-12'}>
          <div className={'mb-2 d-flex justify-content-between'}>
            <h3>
              <NavLink exact to='/teacher-dashboard/users'>
                <KeyboardBackspaceSharpIcon className={'icon'} />
              </NavLink>
              <span>Invite Users</span>
            </h3>
            <NavLink exact to='/teacher-dashboard/users/invite'>
              <button className={'invite-btn'}>Invite User</button>
            </NavLink>
          </div>
          <div className={'separator mb-5'}></div>
          <div className={'row mb-3'}>
            <div className={'col-sm-6 mb-2'}>
              <div className={'card'}>
                <div className={'card-body'}>
                  <form action='#' method='post'>
                    <h4 className={'card-title'}>Send Invite By Email</h4>
                    <div className={'input-group'}>
                      <input
                        type='email'
                        name='email'
                        id='1'
                        placeholder='Enter user email-id'
                      />
                      <div className={'input-group-append'}>
                        <button
                          type='submit'
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
                  <form action='#' method='post'>
                    <h4 className={'card-title'}>Send Invite By Mobile</h4>
                    <div className={'input-group'}>
                      <input
                        type='tel'
                        name='phone'
                        id='2'
                        placeholder='Enter mobile number'
                      />
                      <div className={'input-group-append'}>
                        <button
                          type='submit'
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
                        <a href='##' className={'w-100 w-md-30'}>
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
                            'w-100 w-md-30 text-left text-md-right mt-3 mt-md-0'
                          }
                        >
                          <button
                            className={'btn btn-sm btn-outline-primary mr-2'}
                            type='button'
                          >
                            Resend
                          </button>
                          <button
                            className={'btn btn-sm btn-outline-danger'}
                            type='button'
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InviteUser;
