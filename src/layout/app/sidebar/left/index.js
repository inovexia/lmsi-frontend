import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { Avatar } from 'react-profile-avatar'

import { AppContext } from 'src/AppContext'
import { useDebounce, useIsMounted, useLocalStorage } from 'src/hooks'
import { Icon } from 'src/components/Icon'
import { getNavMenu, appColor } from 'src/constants/defaultValues'
import { apiRequest, isBrowser } from 'src/helpers/Utils'
import { UserRole, appRoot, userStorageKey } from 'src/constants/defaultValues'
import {
  LOGOUT_USER,
  UNEXPECTED_ERROR,
  INSTITUTE_LOADED
} from 'src/constants/actions'
import Logo from 'src/assets/svg/logo'

const SidebarLeft = () => {
  const {
      appStore: { apiURL, user },
      updateAppStore
    } = useContext(AppContext),
    navMenu = getNavMenu,
    isMounted = useIsMounted(),
    history = useHistory(),
    userPath = user.user_name ? user.user_name : user.serial_id,
    [redirectTo, setRedirect] = useState(''),
    [instituteName, setInstituteName] = useState(''),
    [appUser, setAppUser] = useLocalStorage(userStorageKey, null),
    doLogOut = () => {
      if (appUser && redirectTo === '') {
        isMounted.current && setAppUser(null)
        isMounted.current && setRedirect(window.btoa(window.location.pathname))
      }
    },
    fetchInstitute = useCallback(async () => {
      try {
        const slotsRequest = await apiRequest(
          'GET',
          `${apiURL}/instructor/institute/view`,
          user.accessToken
        )
        if (slotsRequest.ok) {
          const data = await slotsRequest.json()
          false && console.log(data)
          if (data.API_STATUS) {
            const currentInstitute = data?.response?.reverse()?.pop()
            setInstituteName(currentInstitute.institute_name)
            updateAppStore({
              type: INSTITUTE_LOADED,
              payload: {
                currentInstitute
              }
            })
          } else {
            throw new Error('Bad Request')
          }
        } else {
          throw new Error('Unexpected Error')
        }
      } catch (error) {
        updateAppStore({
          type: UNEXPECTED_ERROR,
          payload: {
            error: {
              code: UNEXPECTED_ERROR,
              color: 'warning',
              message: error.message
            }
          }
        })
      }
    }, [apiURL, updateAppStore, user])

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
            message: 'User logged out.'
          }
        }
      })
    },
    100,
    [appUser, redirectTo]
  )

  useEffect(() => {
    if (isMounted.current) {
      if (UserRole.instructor === user.role_id) {
        fetchInstitute()
      }
    }
    if (isBrowser) {
      document
        .querySelector('header .navbar .nav-toggle')
        .addEventListener('click', event => {
          document.querySelector('.app .sidebar.left').classList.add('show')
          document.querySelector('.app .overlay').classList.add('show')
        })

      document
        .querySelector('.app .overlay')
        .addEventListener('click', event => {
          document.querySelector('.app .sidebar.left').classList.remove('show')
          document.querySelector('.app .overlay').classList.remove('show')
        })

      document.querySelectorAll('.sidebar.left a').forEach(link => {
        if (window.location.pathname === link.getAttribute('href')) {
          link.classList.add('active')
        }

        link.addEventListener('click', event => {
          const activeNavLink = document.querySelector('.list .nav-link.active')
          document.querySelector('.app .sidebar.left')?.classList.remove('show')
          document.querySelector('.app .overlay').classList.remove('show')
          activeNavLink?.classList.remove('active')
          event?.target?.closest('.nav-link')?.classList.add('active')
        })
      })
    }
  }, [fetchInstitute, isMounted, user])

  return (
    <>
      <aside className={`sidebar left`}>
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
          <Link to={`${appRoot}/${userPath}`}>
            <Avatar
              name={`${user.first_name} ${user.last_name}`}
              size={42}
              colour={appColor}
              imageSrc={''}
            />
          </Link>
          <h5>
            <Link
              to={`${appRoot}/${userPath}`}
            >{`${user.first_name} ${user.last_name}`}</Link>
          </h5>
          <p>
            {(UserRole.instructor === user.role_id && 'Instructor') ||
              (UserRole.learner === user.role_id && 'Learner')}
          </p>
          {UserRole.instructor === user.role_id && <p>{instituteName}</p>}
          <button className={'logout-button'} onClick={() => doLogOut()}>
            Logout
          </button>
        </div>
      </aside>
      <div className={'overlay'} />
    </>
  )
}

export default SidebarLeft
