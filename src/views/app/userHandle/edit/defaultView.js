import React from 'react'
import { Link } from 'react-router-dom'

import EditForm from './editForm'

const Edit = ({ match }) => {
  false && console.log(match)
  return (
    <div>
      <h1>User Profile Edit</h1>
      <p>This page will be used for edit profile information.</p>
      <Link
        className={'btn btn-app me-3 mb-3'}
        to={`/app/${match.params.userHandle}`}
      >
        Back
      </Link>

      <EditForm />
    </div>
  )
}

export default Edit
