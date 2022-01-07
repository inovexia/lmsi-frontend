import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

const Qualification = () => {
  const [info, setInfo] = useState(''),
    [docs, setDocs] = useState(''),
    [expertise, setExpertise] = useState(''),
    handleSubmit = async event => {
      event.preventDefault()
    }

  return (
    <Form className={'mb-3'} onSubmit={event => handleSubmit(event)}>
      <Card>
        <Card.Header>
          <Card.Title>Qualification</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className={'row'}>
            <Form.Group className={'mb-3'} controlId="Qualification">
              <Form.Label>Info</Form.Label>
              <Form.Control
                type="text"
                placeholder="Info"
                value={info}
                onChange={({ target: { value } }) => setInfo(value)}
              />
            </Form.Group>
            <Form.Group className={'mb-3'} controlId="Document Links">
              <Form.Label>Document Links</Form.Label>
              <Form.Control
                type="text"
                placeholder="Document Links"
                value={docs}
                onChange={({ target: { value } }) => setDocs(value)}
              />
            </Form.Group>
            <Form.Group className={'mb-3'} controlId="Expertise">
              <Form.Label>Expertise</Form.Label>
              <Form.Control
                type="text"
                placeholder="Expertise"
                value={expertise}
                onChange={({ target: { value } }) => setExpertise(value)}
              />
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

export default Qualification
