import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

import { AppContext } from 'src/AppContext'
import { getNavMenu } from 'src/helpers/Utils'
import Logo from 'src/assets/svg/logo'

const Header = () => {
  const {
      appStore: { user },
    } = useContext(AppContext),
    navMenu = getNavMenu(user.role_id)

  return (
    <div className={'sidebar'}>
      <div className={'logo'}>
        <Logo
          iconColor={'#ffffff'}
          textColor={'#ffffff'}
          width={104}
          height={74}
        />
      </div>
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
    </div>
  )
}

export default Header
