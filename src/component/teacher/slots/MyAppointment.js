import React from 'react'
import { NavLink } from 'react-router-dom'

const MyAppointment = () => {
  return (
    <div className={'user-main'}>
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={'col-12'}>
            <div className={'mb-2 d-flex justify-content-between'}>
              <h3>
                <NavLink exact to="/teacher-dashboard/slots">
                  Icon
                </NavLink>
                <span>My Appointments</span>
              </h3>
              <NavLink exact to="/teacher-dashboard/slots">
                <button className={'invite-btn'}>All Slots</button>
              </NavLink>
            </div>
            <div className={'separator mb-5'}></div>
            <div className={'card-mb-2'}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAppointment
