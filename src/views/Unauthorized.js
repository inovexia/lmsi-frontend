import React from 'react'
import { NavLink } from 'react-router-dom'

import blockImage from 'src/assets/images/block.svg'

const ViewUnauthorized = () => {
  return (
    <div className={'error-page'}>
      <h1 className={'display-1'}>Unauthorized</h1>
      <img src={blockImage} alt={'Something Went Wrong'} className={'mb-3'} />
      <h3 className={'fs-3'}>
        Sorry, You are not allowed to access that page.
      </h3>
      <NavLink className={'fs-4 text-decoration-none'} to="/">
        Start Over
      </NavLink>
    </div>
  )
}

export default ViewUnauthorized
