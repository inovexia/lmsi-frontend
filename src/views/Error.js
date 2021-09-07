import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div
      className={
        'd-flex flex-column justify-content-center align-items-center vh-100'
      }
    >
      <h2 className={'fs-1'}>404 Error Page</h2>
      <p className={'fs-3'}>Sorry, This page doesn't exist.</p>
      <NavLink className={'fs-4'} to="/">
        Go Back
      </NavLink>
    </div>
  )
}

export default Error
