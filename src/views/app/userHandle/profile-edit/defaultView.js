import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AccountDetails from './account-details'
import Address from './address-details/Address'
import Institute from './institute-details/Institute'
import PersonalInfo from './personal-info/PersonalInfo'
import Qualification from './qualification/Qualification'

const ProfileEdit = ({ match }) => {
  false && console.log(match)
  return (
    <div>
      <Row>
        <Col className={'py-2'} lg={6}>
          <AccountDetails />
        </Col>
        <Col className={'py-2'} lg={6}>
          <PersonalInfo />
        </Col>
        <Col className={'py-2'} lg={6}>
          <Address />
        </Col>
        <Col className={'py-2'} lg={6}>
          <Qualification />
        </Col>
        <Col className={'py-2'} lg={6}>
          <Institute />
        </Col>
      </Row>
    </div>
  )
}

export default ProfileEdit
