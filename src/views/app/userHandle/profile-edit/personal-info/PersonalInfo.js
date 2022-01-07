import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

const PersonalInfo = () => {
  const [aboutMe, setAboutMe] = useState(''),
    [socialLink, setSocialLink] = useState(''),
    [dob, setDob] = useState(''),
    [videoLink, setVideoLink] = useState(''),
    [university, setUniversity] = useState(''),
    [post, setPost] = useState(''),
    [interest, setInterest] = useState(''),
    handleSubmit = async event => {
      event.preventDefault()
    }

  return (
    <Form className={'mb-3'} onSubmit={event => handleSubmit(event)}>
      <Card>
        <Card.Header>
          <Card.Title>Personal Info</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className={'row'}>
            <Form.Group className={'mb-3'} controlId="About Me">
              <Form.Label>About Me</Form.Label>
              <Form.Control
                type="text"
                placeholder="About Me"
                value={aboutMe}
                onChange={({ target: { value } }) => setAboutMe(value)}
              />
            </Form.Group>
            <Form.Group className={'mb-3'} controlId="Social Links">
              <Form.Label>Social Links</Form.Label>
              <Form.Control
                type="text"
                placeholder="Social Links"
                value={socialLink}
                onChange={({ target: { value } }) => setSocialLink(value)}
              />
            </Form.Group>
            <Form.Group className={'mb-3'} controlId="Experience">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control
                type="text"
                placeholder="Date of birth"
                value={dob}
                onChange={({ target: { value } }) => setDob(value)}
              />
            </Form.Group>
            <Form.Group className={'mb-3'} controlId="Gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className={'mb-3'} controlId="Video Links">
              <Form.Label>Video Links</Form.Label>
              <Form.Control
                type="text"
                placeholder="Video Links"
                value={videoLink}
                onChange={({ target: { value } }) => setVideoLink(value)}
              />
            </Form.Group>
            <Form.Group className={'mb-3'} controlId="University">
              <Form.Label>University</Form.Label>
              <Form.Control
                type="text"
                placeholder="University"
                value={university}
                onChange={({ target: { value } }) => setUniversity(value)}
              />
            </Form.Group>
            <Form.Group className={'mb-3'} controlId="Occupation/Post">
              <Form.Label>Occupation/Post</Form.Label>
              <Form.Control
                type="text"
                placeholder="Occupation/Post"
                value={post}
                onChange={({ target: { value } }) => setPost(value)}
              />
            </Form.Group>
            <Form.Group className={'mb-3'} controlId="Interest">
              <Form.Label>Interest</Form.Label>
              <Form.Control
                type="text"
                placeholder="Interest"
                value={interest}
                onChange={({ target: { value } }) => setInterest(value)}
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

export default PersonalInfo
