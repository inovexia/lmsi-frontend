import React, { useCallback, useContext, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Editor } from '@tinymce/tinymce-react'

import { AppContext } from 'src/AppContext'
import { useLocalStorage } from 'src/hooks'
import { decrypt, encrypt } from 'src/helpers/Utils'
import {
  PROFILE_NAME_UPDATED,
  PROFILE_UPDATE_FAILED,
  UNEXPECTED_ERROR
} from 'src/constants/actions'

const PersonalInfo = () => {
  const {
      appStore: { user, userStorageKey, apiURL },
      updateAppStore
    } = useContext(AppContext),
    editorRef = useRef(null),
    [appUser, setAppUser] = useLocalStorage(userStorageKey, null),
    [firstName, setFirstName] = useState(user.first_name),
    [lastName, setLastName] = useState(user.last_name),
    [aboutMe, setAboutMe] = useState(''),
    [Occupation, setOccupation] = useState(''),
    [VideoLink, setVideoLink] = useState(''),
    [DOB, setDOB] = useState(''),
    pickerCallback = useCallback((callback, value, meta) => {
      if (meta.filetype === 'image') {
        var input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.setAttribute('accept', 'image/*')
        input.click()
        input.onchange = function () {
          var file = input.files[0]
          var reader = new FileReader()
          reader.onload = function (e) {
            callback(e.target.result, {
              alt: file.name
            })
          }
          reader.readAsDataURL(file)
        }
      }
    }, []),
    setFullName = value => {
      if (value.includes(' ')) {
        const FullName = value.split(' ')
        setLastName(FullName.pop())
        setFirstName(FullName.join(' '))
      } else {
        setFirstName(value)
      }
    },
    saveFullName = async value => {
      if (`${firstName} ${lastName}` === value) {
        return
      }
      try {
        const FullName = value.split(' '),
          updateData = {
            last_name: FullName.pop(),
            first_name: FullName.join(' ')
          },
          nameRequest = await fetch(`${apiURL}/member/profile-name/update`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              language: 'en',
              Authorization: `Bearer ${user.accessToken}`
            },
            body: JSON.stringify(updateData)
          })
        // Request Access Token From API
        if (nameRequest.ok) {
          const data = await nameRequest.json()
          if (data.API_STATUS) {
            const appUserData = decrypt(appUser),
              updatedUser = encrypt({
                ...appUserData,
                ...updateData
              })
            setFullName(value)
            setAppUser(updatedUser)
            updateAppStore({
              type: PROFILE_NAME_UPDATED,
              payload: {
                notification: {
                  code: PROFILE_NAME_UPDATED,
                  color: 'success',
                  message: data.message
                },
                user: updatedUser
              }
            })
          } else {
            updateAppStore({
              type: PROFILE_UPDATE_FAILED,
              payload: {
                error: {
                  code: PROFILE_UPDATE_FAILED,
                  color: 'danger',
                  message: data.message
                }
              }
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
              message: err.message
            }
          }
        })
      }
    }

  false && console.log(user)
  return (
    <Form className={'mb-3'}>
      <Form.Group className={'mb-3'}>
        <Form.Label>Full name</Form.Label>
        <Form.Control
          type={'text'}
          placeholder={'Enter Full Name'}
          defaultValue={`${firstName} ${lastName}`}
          onBlur={({ target: { value } }) => {
            saveFullName(value)
          }}
        />
      </Form.Group>
      <Form.Group className={'mb-3'}>
        <Form.Label>About Me</Form.Label>
        <Editor
          apiKey="slam4hctjihwvvlza5dl8s8xe4vk5q07o06zmwnht0z5ue42"
          onInit={(evt, editor) => {
            return (editorRef.current = editor)
          }}
          onBlur={({ target }) => {
            const value = target.getContent({ format: 'html' })
            setAboutMe(value)
          }}
          initialValue={aboutMe}
          init={{
            branding: false,
            selector: 'textarea',
            resize: false,
            placeholder: 'Type here...',
            height: 250,
            menubar: false,
            statusbar: true,
            image_title: true,
            automatic_uploads: true,
            file_picker_types: 'image',
            paste_data_images: true,
            file_picker_callback: pickerCallback,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help fullscreen'
            ],
            fullscreen_native: true,
            toolbar:
              'undo redo | formatselect | bold italic underline backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image fullscreen | removeformat | help',
            content_style:
              'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
          }}
        />
      </Form.Group>
      <div className={'row'}>
        <Form.Group className={'mb-3 col-6'} controlId="Occupation">
          <Form.Label>Occupation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Occupation"
            value={Occupation}
            onChange={({ target: { value } }) => setOccupation(value)}
          />
        </Form.Group>
        <Form.Group className={'mb-3 col-6'} controlId="VideoLink">
          <Form.Label>Intro Video Link (Optional)</Form.Label>
          <Form.Control
            type="text"
            placeholder="VideoLink"
            value={VideoLink}
            onChange={({ target: { value } }) => setVideoLink(value)}
          />
        </Form.Group>
        <Form.Group className={'mb-3 col-6'}>
          <Form.Label>Gender</Form.Label>
          <Form.Select aria-label="Gender">
            <option>Male</option>
            <option>Female</option>
            <option>Rather Not Say</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className={'mb-3 col-6'} controlId="DOB">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control
            type="text"
            placeholder="Date of birth"
            value={DOB}
            onChange={({ target: { value } }) => setDOB(value)}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default PersonalInfo
