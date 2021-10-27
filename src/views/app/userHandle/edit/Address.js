import React, { useContext, useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

import { AppContext } from 'src/AppContext'
import {
  UNEXPECTED_ERROR,
  ADDRESS_UPDATE_FAILED,
  ADDRESS_UPDATED,
} from 'src/constants/actions'

const Address = () => {
  const {
      appStore: { user, apiURL },
      updateAppStore,
    } = useContext(AppContext),
    [Address1, setAddress1] = useState(''),
    [Address2, setAddress2] = useState(''),
    [Country, setCountry] = useState(''),
    [State, setState] = useState(''),
    [Landmark, setLandmark] = useState(''),
    [AddressType, setAddressType] = useState(''),
    [City, setCity] = useState(''),
    [ZipCode, setZipCode] = useState(''),
    [addressId, setAddressId] = useState(''),
    handleSubmit = async event => {
      event.preventDefault()
      try {
        const updateData = {
            address_line1: Address1,
            address_line2: Address2,
            country: Country,
            state: State,
            city: City,
            landmark: Landmark,
            address_type: AddressType,
            zip_code: ZipCode,
          },
          changeRequest = await fetch(
            `${apiURL}/instructor/address/update/${addressId}`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                language: 'en',
                Authorization: `Bearer ${user.accessToken}`,
              },
              body: JSON.stringify(updateData),
            }
          )
        // Request Access Token From API
        if (changeRequest.ok) {
          const data = await changeRequest.json()
          if (data.API_STATUS) {
            updateAppStore({
              type: ADDRESS_UPDATED,
              payload: {
                notification: {
                  code: ADDRESS_UPDATED,
                  color: 'success',
                  message: data.message,
                },
              },
            })
          } else {
            updateAppStore({
              type: ADDRESS_UPDATE_FAILED,
              payload: {
                error: {
                  code: ADDRESS_UPDATE_FAILED,
                  color: 'danger',
                  message: data.message,
                },
              },
            })
          }
        } else {
          throw new Error('Unexpected Error')
        }
      } catch (err) {
        updateAppStore({
          type: UNEXPECTED_ERROR,
          payload: {
            error: {
              code: UNEXPECTED_ERROR,
              color: 'warning',
              message: err.message,
            },
          },
        })
      }
    }

  useEffect(() => {
    const getAddress = async () => {
      try {
        const fetchAddress = await fetch(`${apiURL}/instructor/address/get`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            language: 'en',
            Authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify(),
        })

        // Request Access Token From API
        if (fetchAddress.ok) {
          const data = await fetchAddress.json()
          if (data.API_STATUS) {
            const address = data.response
            setAddress1(address.address_line1)
            setAddress2(address.address_line2)
            setCountry(address.country)
            setState(address.state)
            setLandmark(address.landmark)
            setAddressType(address.address_type)
            setCity(address.city)
            setZipCode(address.zip_code)
            setAddressId(address.address_id)
          } else {
            throw new Error('Unexpected Error')
          }
        } else {
          throw new Error('Unexpected Error')
        }
      } catch (err) {
        updateAppStore({
          type: UNEXPECTED_ERROR,
          payload: {
            error: {
              code: UNEXPECTED_ERROR,
              color: 'warning',
              message: err.message,
            },
          },
        })
      }
    }

    getAddress()
  }, [])

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
