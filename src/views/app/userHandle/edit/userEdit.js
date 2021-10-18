import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import { AppContext } from 'src/AppContext'

const EditUser = () => {
  const {
      appStore: { user },
    } = useContext(AppContext),
    [userName, setUserName] = useState(user.user_name),
    handleSubmit = async event => {
      event.preventDefault()
    }

  !false && console.log(user, userName)
  return (
    <div>
      <Form onSubmit={event => handleSubmit(event)}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter User Name"
            defaultValue={`${userName}`}
            onChange={({ target: { value } }) => setUserName(value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  )
}

export default EditUser
