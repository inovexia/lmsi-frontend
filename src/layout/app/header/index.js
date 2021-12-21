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
        <div className={'d-flex flex-sm-grow-1 align-items-center'}>
          <Button
            variant={'light'}
            ariaLabel={'Toggle Menu'}
            className={`d-lg-none nav-toggle me-2`}
          >
            <i aria-label={'Line'} className={'line'} />
          </Button>
          <h1 className={'my-auto d-none d-sm-block'}>{pageHeading}</h1>
        </div>
        <Form className={'d-flex flex-grow-1 flex-sm-grow-0'}>
          <FormControl
            style={{ borderRadius: '0.5rem', height: '40px' }}
            type={'search'}
            placeholder={'Search'}
            aria-label={'Search'}
          />
        </Form>
      </div>
    </Navbar>
  )
}

export default Header
