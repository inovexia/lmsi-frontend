import React from 'react'
import { Link } from 'react-router-dom'

const CreateCourse = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h1>Institute Course</h1>
      <p>
        This page will be used for displaying Course
        {` ${match.params.courseHandle} `}
        in the institute {match.params.instituteHandle}.
      </p>
      <Link
        className={'btn btn-app me-3 mb-3'}
        to={`/app/${match.params.userHandle}/${match.params.instituteHandle}/courses`}
      >
        Back
      </Link>
    </div>
  )
}

export default CreateCourse
