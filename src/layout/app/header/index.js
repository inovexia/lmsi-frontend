import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpIcon from '@material-ui/icons/Help'
import Sidebar from './Sidebar'
import MenuIcon from 'src/assets/svg/MenuIcon'
import MobileMenuIcon from 'src/assets/svg/MobileMenuIcon'

const Header = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }
  return (
    <>
      <nav className={'navbar'}>
        <div className={'d-flex align-items-center navbar-left'}>
          <div
            onClick={handleClick}
            className={'menu-button d-none d-md-block'}
          >
            <MenuIcon />
          </div>
          <div className={'menu-button-mobile d-xs-block d-sm-block d-md-none'}>
            <MobileMenuIcon />
          </div>
          <NavLink exact to={'/'} className={'logo'}>
            <p>LMSI APP</p>
          </NavLink>
          <div className={'search'}>
            <input type={'text'} placeholder="Search" />
          </div>
          <NavLink exact to={'/teacher-dashboard'} className={'nav-item'}>
            <p>Dashboard</p>
          </NavLink>
          <NavLink exact to={'/teacher-dashboard/users'} className={'logo'}>
            <p>Users</p>
          </NavLink>
          <NavLink exact to={'/teacher-dashboard/slots'} className={'logo'}>
            <p>Slots</p>
          </NavLink>
        </div>
        <div className={'d-flex align-items-center navbar-right'}>
          <NavLink exact to={'#'}>
            <NotificationsIcon fontSize={'medium'} className={'icon'} />
          </NavLink>
          <NavLink exact to={'#'}>
            <HelpIcon fontSize={'medium'} className={'icon'} />
          </NavLink>
          <NavLink exact to={'/teacher-dashboard/settings'}>
            <SettingsIcon fontSize={'medium'} className={'icon'} />
          </NavLink>
          <NavLink exact to={'#'}>
            <AccountCircleIcon fontSize={'medium'} className={'icon'} />
          </NavLink>
        </div>
      </nav>
      {show ? <Sidebar /> : ''}
    </>
  )
}

export default Header
