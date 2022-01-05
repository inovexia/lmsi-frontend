import React, { useContext, useEffect, useState } from 'react'
import { Navbar, FormControl } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'

import { Button } from 'src/components/Buttons'
import { AppContext } from 'src/AppContext'
import { useDebounce } from 'src/hooks'
import { isBrowser, urlQuery } from 'src/helpers/Utils'

const Header = () => {
  const [query, setQuery] = useState(null),
    history = useHistory(),
    location = useLocation(),
    {
      appStore: { pageHeading }
    } = useContext(AppContext),
    handleSearch = ({ target: { value } }) => {
      setQuery(value.length > 0 ? value : null)
    }

  useDebounce(
    () =>
      query !== null
        ? history.push(`/app/search?q=${query}`)
        : history.replace(`/app/search`),
    500,
    [query]
  )

  useEffect(() => {
    if (isBrowser) {
      const q = urlQuery(location),
        allLinks = document.querySelectorAll('.app a')

      allLinks.forEach(link =>
        link.addEventListener('click', () => setQuery(null))
      )
      q && setQuery(q)
    }
  }, [location])

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
        <div className={'d-flex flex-grow-1 flex-sm-grow-0'}>
          <FormControl
            style={{ borderRadius: '0.5rem', height: '40px' }}
            type={'search'}
            placeholder={'Search'}
            aria-label={'Search'}
            value={query ? query : ''}
            onChange={handleSearch}
          />
        </div>
      </div>
    </Navbar>
  )
}

export default Header
