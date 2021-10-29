import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

import { AppContext } from 'src/AppContext'
import { useDebounce, useIsMounted, useLocalStorage } from 'src/hooks'
import { Icon } from 'src/components/Icon'
import { getNavMenu } from 'src/constants/defaultValues'
import { appRoot, userStorageKey } from 'src/constants/defaultValues'
import { LOGOUT_USER } from 'src/constants/actions'
import Logo from 'src/assets/svg/logo'

const SidebarLeft = () => {
  const {
      appStore: { user },
      updateAppStore,
    } = useContext(AppContext),
    navMenu = getNavMenu,
    isMounted = useIsMounted(),
    history = useHistory(),
    userPath = user.user_name ? user.user_name : user.serial_id,
    [redirectTo, setRedirect] = useState(''),
    [appUser, setAppUser] = useLocalStorage(userStorageKey, null),
    doLogOut = () => {
      if (appUser && redirectTo === '') {
        isMounted.current && setAppUser(null)
        isMounted.current && setRedirect(window.btoa(window.location.pathname))
      }
    }

  console.log(user)

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
    <aside className={'sidebar left'}>
      <Link to={appRoot} className={'logo'}>
        <Logo
          iconColor={'#FFAA2C'}
          textColor={'#000000'}
          width={104}
          height={74}
        />
      </Link>
      <div className={'list'}>
        {navMenu.map(({ link, label, icon, subMenu }, i) =>
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
              {icon ? (
                <>
                  <Icon icon={icon} className={'my-auto'} />
                  <span className={'my-auto'}>{label}</span>
                </>
              ) : (
                label
              )}
            </Link>
          )
        )}
      </div>
      <div className={'user-profile'}>
        <div className={'img'}></div>
        <h5>{`${user.first_name} ${user.last_name}`}</h5>
        <p>FrontEnd Developer</p>
        <p>UI/UX Designer</p>
        <button className={'logout-button'} onClick={() => doLogOut()}>
          Logout
        </button>
        <div className={'d-flex justify-content-center send-invite'}>
          <Link
            className={'btn btn-app text-white'}
            to={`${appRoot}/${userPath}`}
          >
            View Profile
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default SidebarLeft
