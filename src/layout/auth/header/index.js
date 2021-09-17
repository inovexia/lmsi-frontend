import React from 'react'

import Logo from 'src/assets/svg/logo'
import { IsTablet } from 'src/helpers/Utils'

const Header = () => {
  return (
    <header className={'d-flex justify-content-center w-100 px-3 px-sm-0'}>
      <Logo
        className={`${IsTablet() ? `mw-50` : `mw-100`} h-auto`}
        iconColor={'#5927e5'}
        textColor={'#362B48'}
        width={160}
        height={36}
      />
    </header>
  )
}

export default Header
