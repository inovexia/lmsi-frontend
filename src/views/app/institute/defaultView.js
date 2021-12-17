import React, { useState, useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import { AppContext } from 'src/AppContext'
import { Button } from 'src/components/Buttons'
import { apiRequest } from 'src/helpers/Utils'
import { TITLE_UPDATE, UNEXPECTED_ERROR } from 'src/constants/actions'

const Institute = () => {
  const pageHeading = 'Create Institute',
    {
      appStore: { user, apiURL },
      updateAppStore
    } = useContext(AppContext),
    [instituteName, setInstituteName] = useState(''),
    [userName, setUserName] = useState(''),
    [description, setDescription] = useState(''),
    [creating, setCreating] = useState(false),
    createNewInstitute = async event => {
      try {
        event.preventDefault()
        setCreating(true)
        const reqData = {
            institute_name: instituteName,
            institute_handle_name: userName,
            institute_description: description
          },
          createInstituteReq = await apiRequest(
            'POST',
            `${apiURL}/instructor/institute/create`,
            user.accessToken,
            reqData
          )
        if (createInstituteReq.ok) {
          const data = await createInstituteReq.json()
          console.log(data)
          if (data.API_STATUS) {
            // updateAppStore({
            //   type: SLOT_CREATED,
            //   payload: {
            //     notification: {
            //       code: SLOT_CREATED,
            //       color: 'success',
            //       message: data.message,
            //     },
            //   },
            // })
          } else {
            throw new Error('Bad Request')
          }
        } else {
          throw new Error('Unexpected Error')
        }
      } catch (error) {
        updateAppStore({
          type: UNEXPECTED_ERROR,
          payload: {
            error: {
              code: UNEXPECTED_ERROR,
              color: 'warning',
              message: error.message
            }
          }
        })
      } finally {
        setCreating(false)
      }
    }

  useEffect(() => {
    updateAppStore({
      type: TITLE_UPDATE,
      payload: {
        pageHeading
      }
    })
  }, [updateAppStore])

  return (
    <div className={'institute'}>
      <div className={'institute-header'}>
        <div className={'user'} />
      </div>

      <div className={'institute-form'}>
        <Form
          onSubmit={event => {
            createNewInstitute(event)
          }}
        >
          <div className={'row'}>
            <Form.Group className={'mb-3 col-6'} controlId="instituteName">
              <Form.Label>Institute Name</Form.Label>
              <Form.Control
                className={'input-field'}
                type="text"
                placeholder="Institute Name"
                value={instituteName}
                required={true}
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
                required={true}
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
          <div className={'d-flex justify-content-end'}>
            <Button variant={'app'} type={'submit'} disabled={creating}>
              Create Institute
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Institute
