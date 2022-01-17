import React from 'react'
import { Button, Card } from 'react-bootstrap'

const LearnerView = () => {
  return (
    <div>
      <div className={'d-flex justify-content-around my-3'}>
        <button class="btn btn-app">Filters</button>
        <button class="btn btn-app">View History</button>
        <button class="btn btn-app">Explore Slots</button>
        <select className={'p-2'}>
          <option>Open this select menu</option>
          <option value="1">Booking Date</option>
          <option value="2">Hosting Time</option>
          <option value="3">Optional</option>
        </select>
      </div>
      <Card className={'mb-3'}>
        <Card.Body className={'p-5'}>
          Slots Title with Date, institute details, hosting countdown
        </Card.Body>
        <Card.Footer>
          <div className={'d-flex justify-content-around'}>
            <Button variant={'app'}>Request for Cancel</Button>
            <Button variant={'app'}>Join Slot</Button>
            <Button variant={'app'}>View Details</Button>
            <p>2 hrs ago</p>
          </div>
        </Card.Footer>
      </Card>
      <Card className={'mb-3'}>
        <Card.Body className={'p-5'}>
          Slots Title with Date, institute details, hosting countdown
        </Card.Body>
        <Card.Footer>
          <div className={'d-flex justify-content-around'}>
            <Button variant={'app'}>Request for Cancel</Button>
            <Button variant={'app'}>Join Slot</Button>
            <Button variant={'app'}>View Details</Button>
            <p>2 hrs ago</p>
          </div>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body className={'p-5'}>
          Slots Title with Date, institute details, hosting countdown
        </Card.Body>
        <Card.Footer>
          <div className={'d-flex justify-content-around'}>
            <Button variant={'app'}>Request for Cancel</Button>
            <Button variant={'app'}>Join Slot</Button>
            <Button variant={'app'}>View Details</Button>
            <p>2 hrs ago</p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default LearnerView
