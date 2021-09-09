import React from 'react'

import Logo from '../../../assets/svg/logo'
import { IsTablet } from '../../../helpers/Utils'

const Header = () => {
  return (
    <header className={'d-flex justify-content-center w-100 px-3 px-sm-0'}>
      <Logo
        className={`${IsTablet() ? `mw-50` : `mw-100`} h-auto`}
        textColor={'#212529'}
      />
    </header>
  )
}

export default Header
