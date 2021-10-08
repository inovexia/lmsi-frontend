import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

import { AppContext } from 'src/AppContext'
import { useDebounce, useIsMounted, useLocalStorage } from 'src/hooks'
import { getNavMenu } from 'src/helpers/Utils'
import { appRoot, userStorageKey } from 'src/constants/defaultValues'
import { LOGOUT_USER } from 'src/constants/actions'
import Logo from 'src/assets/svg/logo'

const SidebarLeft = () => {
  const {
      appStore: { user },
      updateAppStore,
    } = useContext(AppContext),
    navMenu = getNavMenu(user.role_id),
    isMounted = useIsMounted(),
    history = useHistory(),
    [redirectTo, setRedirect] = useState(''),
    [appUser, setAppUser] = useLocalStorage(userStorageKey, null),
    doLogOut = () => {
      if (appUser && redirectTo === '') {
        isMounted.current && setAppUser(null)
        isMounted.current && setRedirect(window.btoa(window.location.pathname))
      }
    }

  useDebounce(
    () => {
      updateAppStore({
        type: LOGOUT_USER,
        payload: {
          history,
          pathname: `/auth/sign-in/${redirectTo}`,
          notification: {
            code: LOGOUT_USER,
            color: 'app',
            message: 'User logged out.',
          },
        },
      })
    },
    100,
    [appUser, redirectTo]
  )

  return (
    <div className={'sidebar left'}>
      <Link to={appRoot} className={'logo'}>
        <Logo
          iconColor={'#ffffff'}
          textColor={'#ffffff'}
          width={104}
          height={74}
        />
      </Link>
      <div className={'list'}>
        {navMenu.map(({ link, label, subMenu }, i) =>
          subMenu ? (
            <NavDropdown
              title={label}
              key={i}
              renderMenuOnMount={true}
              menuVariant={'dark'}
            >
              {subMenu.map(({ label, link }, j) => (
                <NavDropdown.Item as={'div'} key={j} className={'p-0'}>
                  <Link className={'dropdown-item'} to={link}>
                    {label}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          ) : (
            <Link className={'nav-link'} key={i} to={link}>
              {label}
            </Link>
          )
        )}
      </div>
      <button className={'logout-button'} onClick={() => doLogOut()}>
        Logout
      </button>
    </div>
  )
}

export default SidebarLeft
