import React from 'react'
import { Card } from 'react-bootstrap'
import FullName from './FullName'
import Email from './Email'
import Avatar from './Avatar'
import Password from './Password'
import UserName from './UserName'

const AccountDetails = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Account Details</Card.Title>
      </Card.Header>
      <Card.Body>
        <Avatar />
        <FullName />
        <UserName />
        <Email />
        <Password />
      </Card.Body>
    </Card>
  )
}

export default AccountDetails
