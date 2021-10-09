import React from 'react'
import { Link } from 'react-router-dom'

const Following = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h1>User Following</h1>
      <p>This page will be used for user following.</p>
      <Link
        className={'btn btn-app me-3 mb-3'}
        to={`/app/${match.params.userHandle}`}
      >
        Back
      </Link>
    </div>
  )
}

export default Following
