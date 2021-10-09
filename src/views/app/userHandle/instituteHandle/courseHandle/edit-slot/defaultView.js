import React from 'react'
import { Link } from 'react-router-dom'

import { appRoot } from 'src/constants/defaultValues'

const CourseEditSlot = ({ match }) => {
  false && console.log(match)
  return (
    <div>
      <h1>Course Edit Slot {match.params.slotId}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: `This page will be used for edit institute <strong>${match.params.instituteHandle}</strong> course <strong>${match.params.courseHandle} slot</strong>.`,
        }}
      />
      <Link
        className={'btn btn-app me-3 mb-3'}
        to={`${appRoot}/${match.params.userHandle}/${match.params.instituteHandle}/${match.params.courseHandle}/slot/${match.params.slotId}`}
      >
        Back
      </Link>
    </div>
  )
}

export default CourseEditSlot
