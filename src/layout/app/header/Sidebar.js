import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className={'sidebar'}>
      <div className={'main-menu'}>
        <div className={'scroll'}>
          <div className={'scrollbar-container ps'}>
            <ul className={'list-unstyled nav flex-column'}>
              <li className={'nav-item'}>
                <NavLink
                  exact
                  activeClassName="active_class"
                  to="/app/instructor"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active_class"
                  to="/app/instructor/users"
                >
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active_class"
                  to="/teacher-dashboard/slots"
                >
                  Slots
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active_class"
                  to="/teacher-dashboard/settings"
                >
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
