import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Institute = () => {
  const [instituteName, setInstituteName] = useState(''),
    [userName, setUserName] = useState(''),
    [description, setDescription] = useState('')

  return (
    <div className={'institute'}>
      <div className={'institute-header'}>
        <div className={'user'}></div>
      </div>

      <div className={'institute-form'}>
        <Form>
          <div className={'row'}>
            <Form.Group className={'mb-3 col-6'} controlId="instituteName">
              <Form.Label>Institute Name</Form.Label>
              <Form.Control
                className={'input-field'}
                type="text"
                placeholder="Institute Name"
                value={instituteName}
                onChange={({ target: { value } }) => setInstituteName(value)}
              />
            </Form.Group>
            <Form.Group className={'mb-3 col-6'} controlId="userName">
              <Form.Label>Institute User Name</Form.Label>
              <Form.Control
                className={'input-field'}
                type="text"
                placeholder="Institute User Name"
                value={userName}
                onChange={({ target: { value } }) => setUserName(value)}
              />
            </Form.Group>

            <Form.Group className={'mb-3 col-12'} controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                className={'input-field'}
                placeholder="Description"
                value={description}
                onChange={({ target: { value } }) => setDescription(value)}
              />
            </Form.Group>
          </div>
        </Form>

        <Link
          style={{ float: 'right' }}
          className={'btn btn-app text-white'}
          to={`create-institute/institute-detail`}
        >
          Create Institute
        </Link>
      </div>
    </div>
  )
}

export default Institute
