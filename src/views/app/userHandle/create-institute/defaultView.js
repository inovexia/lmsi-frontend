import React from 'react'
import { Link } from 'react-router-dom'

import Institute from './Institute'

const Institutes = ({ match }) => {
  false && console.log(match)
  return (
    <div>
      <Institute />
      <Link
        className={'btn btn-app me-3 mb-3'}
        to={`/app/${match.params.userHandle}`}
      >
        Back
      </Link>
    </div>
  )
}

export default Institutes
