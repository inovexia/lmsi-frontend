import React from 'react'
// import { Link } from 'react-router-dom'

import PersonalInfo from './PersonalInfo'
// import Address from './Address'
// import Qualification from './Qualification'

const Edit = ({ match }) => {
  false && console.log(match)
  return (
    <section>
      {/* <Link className={'btn btn-app me-3 mb-3'} to={`/app/dashboard`}>
        Back
      </Link> */}
      <PersonalInfo />
      {/* <Address /> */}
      {/* <Qualification /> */}
    </section>
  )
}

export default Edit
