import React, { useContext } from 'react'
import { Navbar, Form, FormControl } from 'react-bootstrap'

import { AppContext } from 'src/AppContext'

const Header = () => {
  const {
    appStore: { pageHeading },
  } = useContext(AppContext)

  return (
    <Navbar bg="light" expand="lg">
      <div className={'container-fluid'}>
        <h1>{pageHeading}</h1>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </div>
    </Navbar>
  )
}

export default Header
