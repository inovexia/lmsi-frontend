import React from 'react'

const Course = ({ match }) => {
  false && console.log(match)
  return (
    <div className={'course'}>
      <div className={'course-top d-flex justify-content-between mt-3'}>
        <button className={'btn btn-app'}>Create Course</button>
        <button className={'btn btn-app'}>Filters</button>
      </div>
      <div className={'course-details row bg-white m-1 mt-3 p-3'}>
        <div className={'col-3'}>
          <div
            style={{ backgroundColor: 'gray', height: '150px', width: '150px' }}
          >
            <span className={'text-white'}>Course Image</span>
          </div>
        </div>
        <div className={'col-9'}>
          <p>
            Course title Last update , lifetime & other details like no of chap.
            & tests
          </p>
          <div className={'d-flex'}>
            <button className={'btn btn-app me-3'}>View</button>
            <button className={'btn btn-app'}>Update</button>
          </div>
        </div>
      </div>
      <div className={'course-details row bg-white m-1 mt-3 p-3'}>
        <div className={'col-3'}>
          <div
            style={{ backgroundColor: 'gray', height: '150px', width: '150px' }}
          >
            <span className={'text-white'}>Course Image</span>
          </div>
        </div>
        <div className={'col-9'}>
          <p>
            Course title Last update , lifetime & other details like no of chap.
            & tests
          </p>
          <div className={'d-flex'}>
            <button className={'btn btn-app me-3'}>View</button>
            <button className={'btn btn-app'}>Update</button>
          </div>
        </div>
      </div>
      <div className={'course-details row bg-white m-1 mt-3 p-3'}>
        <div className={'col-3'}>
          <div
            style={{ backgroundColor: 'gray', height: '150px', width: '150px' }}
          >
            <span className={'text-white'}>Course Image</span>
          </div>
        </div>
        <div className={'col-9'}>
          <p>
            Course title Last update , lifetime & other details like no of chap.
            & tests
          </p>
          <div className={'d-flex'}>
            <button className={'btn btn-app me-3'}>View</button>
            <button className={'btn btn-app'}>Update</button>
          </div>
        </div>
      </div>
      <div className={'course-details row bg-white m-1 mt-3 p-3'}>
        <div className={'col-3'}>
          <div
            style={{ backgroundColor: 'gray', height: '150px', width: '150px' }}
          >
            <span className={'text-white'}>Course Image</span>
          </div>
        </div>
        <div className={'col-9'}>
          <p>
            Course title Last update , lifetime & other details like no of chap.
            & tests
          </p>
          <div className={'d-flex'}>
            <button className={'btn btn-app me-3'}>View</button>
            <button className={'btn btn-app'}>Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
