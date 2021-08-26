import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Users.css';

const Users = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const usersFromServer = await fetchUsers();
      usersFromServer && setUser(usersFromServer);
    };

    getUser();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(
      'https://lmsi-api.herokuapp.com/lmsi/teacher/members/list/11/7/1',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Language: 'en',
        },
      }
    );
    try {
      const data = await res.json();
      if (data.success) {
        return data.response;
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className={'user-main'}>
      <div className={'container-fluid'}>
        <div className={'dashboard-wrapper'}>
          <div className={'row'}>
            <div className={'col-12'}>
              <div className={'mb-2 d-flex justify-content-between'}>
                <h3>Users List</h3>
                <NavLink exact to='/teacher-dashboard/users/invite'>
                  <button className={'invite-btn'}>Invite User</button>
                </NavLink>
              </div>
              <div className={'separator mb-5'}></div>
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
                        <NavLink
                          exact
                          to='/teacher-dashboard/users/edit'
                          className={'w-100 w-md-30'}
                        >
                          <p className={'list-item-heading mb-0 truncate'}>
                            {user.first_name}
                          </p>
                        </NavLink>
                        <p
                          className={'mb-0 text-muted text-small w-100 w-md-40'}
                        >
                          {user.serial_id}
                          <br></br>
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
                            Enable
                          </button>
                          <button
                            className={'btn btn-sm btn-outline-danger'}
                            type='button'
                          >
                            Disable
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

export default Users;
