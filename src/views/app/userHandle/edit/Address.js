import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Address = () => {
  const [Address1, setAddress1] = useState(''),
    [Address2, setAddress2] = useState(''),
    [Country, setCountry] = useState(''),
    [State, setState] = useState(''),
    [Landmark, setLandmark] = useState(''),
    [AddressType, setAddressType] = useState(''),
    [City, setCity] = useState(''),
    [ZipCode, setZipCode] = useState(''),
    handleSubmit = async event => {
      event.preventDefault()
    }

  return (
    <Form className={'mb-3'} onSubmit={event => handleSubmit(event)}>
      <fieldset className={'border border-success p-2'}>
        <legend className={'w-auto float-none mb-0 px-3'}>
          Address Information
        </legend>
        <div className={'row'}>
          <Form.Group className={'mb-3 col-6'} controlId="Address1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address Line 1"
              value={Address1}
              onChange={({ target: { value } }) => setAddress1(value)}
            />
          </Form.Group>
          <Form.Group className={'mb-3 col-6'} controlId="Address2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address Line 2"
              value={Address2}
              onChange={({ target: { value } }) => setAddress2(value)}
            />
          </Form.Group>
          <Form.Group className={'mb-3 col-6'} controlId="Country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country"
              value={Country}
              onChange={({ target: { value } }) => setCountry(value)}
            />
          </Form.Group>
          <Form.Group className={'mb-3 col-6'} controlId="State">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              value={State}
              onChange={({ target: { value } }) => setState(value)}
            />
          </Form.Group>
          <Form.Group className={'mb-3 col-6'} controlId="Landmark">
            <Form.Label>Landmark</Form.Label>
            <Form.Control
              type="text"
              placeholder="Landmark"
              value={Landmark}
              onChange={({ target: { value } }) => setLandmark(value)}
            />
          </Form.Group>
          <Form.Group className={'mb-3 col-6'} controlId="AddressType">
            <Form.Label>AddressType</Form.Label>
            <Form.Control
              type="text"
              placeholder="AddressType"
              value={AddressType}
              onChange={({ target: { value } }) => setAddressType(value)}
            />
          </Form.Group>
          <Form.Group className={'mb-3 col-6'} controlId="City">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              value={City}
              onChange={({ target: { value } }) => setCity(value)}
            />
          </Form.Group>
          <Form.Group className={'mb-3 col-6'} controlId="ZipCode">
            <Form.Label>ZipCode</Form.Label>
            <Form.Control
              type="text"
              placeholder="ZipCode"
              value={ZipCode}
              onChange={({ target: { value } }) => setZipCode(value)}
            />
          </Form.Group>
        </div>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </fieldset>
    </Form>
  )
}

export default Address
