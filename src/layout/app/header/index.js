import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

import { AppContext } from 'src/AppContext'
import { getNavMenu } from 'src/helpers/Utils'

const Header = () => {
  const {
      appStore: { user },
    } = useContext(AppContext),
    navMenu = getNavMenu(user.role_id)

  return (
    <Navbar variant={'dark'} bg={'app'} expand={'lg'}>
      <Container fluid>
        <Link className={'navbar-brand'} to={'/app'}>
          LMSI
        </Link>
        <Navbar.Toggle aria-controls={'main-menu'} />
        <Navbar.Collapse id={'main-menu'}>
          <Nav className={'me-auto'}>
            {navMenu.map(({ link, label, subMenu }, i) =>
              subMenu ? (
                <NavDropdown
                  title={label}
                  key={i}
                  renderMenuOnMount={true}
                  menuVariant={'dark'}
                >
                  {subMenu.map(({ label, link }, j) => (
                    <NavDropdown.Item as={'div'} key={j}>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
