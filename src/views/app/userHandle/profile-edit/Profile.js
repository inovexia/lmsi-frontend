import React from 'react'
import { useDropzone } from 'react-dropzone'
import { Form } from 'react-bootstrap'

const Profile = () => {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1
  })

  return (
    <Form.Group className={'mb-3'}>
      <Form.Label>Profile Photo</Form.Label>
      <div {...getRootProps({ className: 'dropzone avatar' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop avatar here</p>
      </div>
    </Form.Group>
  )
}

export default Profile
