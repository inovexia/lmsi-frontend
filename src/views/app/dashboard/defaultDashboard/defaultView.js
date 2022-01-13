import React from 'react'
import { Card } from 'react-bootstrap'

const Empty = ({ match }) => {
  false && console.log(match)
  return (
    <div className={'row gy-5'}>
      <div className={'col-4'}>
        <Card>
          <Card.Header>Slots</Card.Header>
          <Card.Body className={'p-5'}>All Slots {'->'}</Card.Body>
        </Card>
      </div>
      <div className={'col-4'}>
        <Card>
          <Card.Header>Learner</Card.Header>
          <Card.Body className={'p-5'}>All Users {'->'}</Card.Body>
        </Card>
      </div>
      <div className={'col-4'}>
        <Card>
          <Card.Header>Invitation</Card.Header>
          <Card.Body className={'p-5'}>All Invites {'->'}</Card.Body>
        </Card>
      </div>
      <div className={'col-4'}>
        <Card>
          <Card.Header>Courses</Card.Header>
          <Card.Body className={'p-5'}>All Courses {'->'}</Card.Body>
        </Card>
      </div>
      <div className={'col-4'}>
        <Card>
          <Card.Header>Upcoming</Card.Header>
          <Card.Body className={'p-5'}>All Meetings {'->'}</Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Empty
