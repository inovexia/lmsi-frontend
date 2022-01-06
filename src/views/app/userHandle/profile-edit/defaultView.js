import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Profile from './Profile'
import About from './About'
import Account from './Account'

const ProfileEdit = ({ match }) => {
  false && console.log(match)
  return (
    <div>
      <Row>
        <Col className={'py-2'} lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Account Details</Card.Title>
              <Card.Text>
                <Profile />
                <About />
                <Account />
              </Card.Text>
              <button className={'btn btn-app'}>Save Changes</button>
            </Card.Body>
          </Card>
        </Col>
        <Col className={'py-2'} lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Institute Details</Card.Title>
              <Card.Text>
                Edit institute Name, change type (public /private)
              </Card.Text>
              <button className={'btn btn-app'}>Save Changes</button>
            </Card.Body>
          </Card>
        </Col>
        <Col className={'py-2'} lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Address Details</Card.Title>
              <Card.Text>
                Can be edited all the details Country , state , city , zipcode ,
                address_line1 , address_line2 address type (home
                ,office,others),
              </Card.Text>
              <button className={'btn btn-app'}>Save Changes</button>
            </Card.Body>
          </Card>
        </Col>
        <Col className={'py-2'} lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Personal Info</Card.Title>
              <Card.Text>
                About me, social links, date of birth, gender, vedio,
                university, occupation post, interest
              </Card.Text>
              <button className={'btn btn-app'}>Save Changes</button>
            </Card.Body>
          </Card>
        </Col>
        <Col className={'py-2'} lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Qualification</Card.Title>
              <Card.Text>info, documents links , expertise</Card.Text>
              <button className={'btn btn-app'}>Save Changes</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProfileEdit
