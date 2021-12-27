import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const Qualification = () => {
  const [Qualification, setQualification] = useState(''),
    [University, setUniversity] = useState(''),
    [Certification, setCertification] = useState(''),
    [CertificationUrl, setCertificationUrl] = useState(''),
    [Experience, setExperience] = useState(''),
    [Expertise, setExpertise] = useState(''),
    handleSubmit = async event => {
      event.preventDefault()
    }

  return (
    <Form className={'mb-3'} onSubmit={event => handleSubmit(event)}>
      <div className={'row'}>
        <Form.Group className={'mb-3 col-6'} controlId="Qualification">
          <Form.Label>Qualification</Form.Label>
          <Form.Control
            type="text"
            placeholder="Qualification"
            value={Qualification}
            onChange={({ target: { value } }) => setQualification(value)}
          />
        </Form.Group>
        <Form.Group className={'mb-3 col-6'} controlId="University">
          <Form.Label>University</Form.Label>
          <Form.Control
            type="text"
            placeholder="University"
            value={University}
            onChange={({ target: { value } }) => setUniversity(value)}
          />
        </Form.Group>
        <Form.Group className={'mb-3 col-6'} controlId="Certification">
          <Form.Label>Certification (If Any)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Certification Details"
            value={Certification}
            onChange={({ target: { value } }) => setCertification(value)}
          />
        </Form.Group>
        <Form.Group className={'mb-3 col-6'} controlId="CertificationUrl">
          <Form.Label>Certification Url</Form.Label>
          <Form.Control
            type="text"
            placeholder="Certification Url"
            value={CertificationUrl}
            onChange={({ target: { value } }) => setCertificationUrl(value)}
          />
        </Form.Group>
        <Form.Group className={'mb-3 col-6'} controlId="Experience">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            type="text"
            placeholder="Experience"
            value={Experience}
            onChange={({ target: { value } }) => setExperience(value)}
          />
        </Form.Group>
        <Form.Group className={'mb-3 col-6'} controlId="Expertise">
          <Form.Label>Expertise</Form.Label>
          <Form.Control
            type="text"
            placeholder="Expertise"
            value={Expertise}
            onChange={({ target: { value } }) => setExpertise(value)}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default Qualification
