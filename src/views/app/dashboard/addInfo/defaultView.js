import React from 'react'
import { Link } from 'react-router-dom'

import About from './About'
import Account from './Account'
import Legalities from './Legalities'
import Profile from './Profile'
import Security from './Security'
import Address from './Address'
import Qualification from './Qualification'

const Edit = ({ match }) => {
  false && console.log(match)
  return (
    <section>
      <h1>User Profile Edit</h1>
      <p>This page will be used for edit profile information.</p>
      <Link
        className={'btn btn-app me-3 mb-3'}
        to={`/app/${match.params.userHandle}`}
      >
        Back
      </Link>
      <Profile />
      <About />
      <Legalities />
      <Account />
      <Qualification />
      <Address />
      <Security />
    </section>
  )
}

export default Edit
