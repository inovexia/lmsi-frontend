import React from 'react'
import { NavLink } from 'react-router-dom'

import errorImage from 'src/assets/images/wrong-action.svg'

const Error = () => {
  return (
    <div className={'container-fluid px-sm-0'}>
      <div className={'error-page'}>
        <h1 className={'display-1'}>Something Went Wrong</h1>
        <img
          src={errorImage}
          alt={'Something Went Wrong'}
          className={'img-fluid mb-3'}
        />
        <h3 className={'fs-3'}>Sorry, This page can not be displayed.</h3>
        <NavLink className={'fs-4 text-decoration-none'} to={'/app'}>
          Start Over
        </NavLink>
      </div>
    </div>
  )
}

export default Error
