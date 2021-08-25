import React from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp';

const MyAppointment = () => {
  return (
    <div className={'user-main'}>
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={'col-12'}>
            <div className={'mb-2 d-flex justify-content-between'}>
              <h3>
                <NavLink exact to='/teacher-dashboard/slots'>
                  <KeyboardBackspaceSharpIcon className={'icon'} />
                </NavLink>
                <span>My Appointments</span>
              </h3>
              <NavLink exact to='/teacher-dashboard/slots'>
                <button className={'invite-btn'}>All Slots</button>
              </NavLink>
            </div>
            <div className={'separator mb-5'}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
