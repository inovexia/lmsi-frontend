import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

const Institute = () => {
  const [instituteName, setInstituteName] = useState(''),
    handleSubmit = async event => {
      event.preventDefault()
    }

  return (
    <Form className={'mb-3'} onSubmit={event => handleSubmit(event)}>
      <Card>
        <Card.Header>
          <Card.Title>Institute Details</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className={'row'}>
            <Form.Group className={'mb-3'} controlId="Institute Name">
              <Form.Label>Edit Institute Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit Institute Name"
                value={instituteName}
                onChange={({ target: { value } }) => setInstituteName(value)}
              />
            </Form.Group>
            <Form.Group className={'mb-3'} controlId="Institute Type">
              <Form.Label>Institute Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="public">Public</option>
                <option value="private">Private</option>
              </Form.Select>
            </Form.Group>
          </div>
        </Card.Body>
        <Card.Footer>
          <Button variant="app" type="submit">
            Save Changes
          </Button>
        </Card.Footer>
      </Card>
    </Form>
  )
}

export default Institute
