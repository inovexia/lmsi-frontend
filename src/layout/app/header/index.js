import React, { useContext } from 'react'
import { Navbar, Form, FormControl } from 'react-bootstrap'

import { Button } from 'src/components/Buttons'
import { AppContext } from 'src/AppContext'

const Header = () => {
  const {
    appStore: { pageHeading }
  } = useContext(AppContext)

  return (
    <Navbar
      style={{ background: '#E5E5E5' }}
      expand={'lg'}
      className={'shadow-none py-0'}
    >
      <div className={'container-fluid'}>
        <div className={'d-flex flex-grow-1 align-items-center'}>
          <Button
            variant={'light'}
            ariaLabel={'Toggle Menu'}
            className={`d-lg-none nav-toggle me-2`}
          >
            <i aria-label={'Line'} className={'line'} />
          </Button>
          <h1 className={'my-auto'}>{pageHeading}</h1>
        </div>
        <Form className={'d-flex'}>
          <FormControl
            style={{ borderRadius: '15px' }}
            type={'search'}
            placeholder={'Search'}
            className={'me-2'}
            aria-label={'Search'}
          />
        </Form>
      </div>
    </Navbar>
  )
}

export default Header
