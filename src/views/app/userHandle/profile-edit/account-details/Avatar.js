import React from 'react'
import { useDropzone } from 'react-dropzone'
import { Form } from 'react-bootstrap'

const Avatar = () => {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1
  })

  return (
    <Form.Group className={'mb-3'}>
      <Form.Label>Profile Photo</Form.Label>
      <div {...getRootProps({ className: 'dropzone avatar' })}>
        <input {...getInputProps()} />
        <span>Drag 'n' drop avatar here</span>
      </div>
    </Form.Group>
  )
}

export default Avatar
