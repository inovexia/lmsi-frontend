import React from 'react'
import { Link } from 'react-router-dom'

const Institute = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h1>Institute</h1>
      <p>This page will be used for displaying user institute.</p>
      <Link
        className={'btn btn-app me-3'}
        to={`/app/${match.params.userHandle}`}
      >
        Back
      </Link>
    </div>
  )
}

export default Institute
