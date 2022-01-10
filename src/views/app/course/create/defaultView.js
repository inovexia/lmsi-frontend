import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const CreateCourse = ({ match }) => {
  false && console.log(match)
  return (
    <div className={'row justify-content-center mt-5'}>
      <Card className={'col-10'}>
        <Form className={'p-3'}>
          <Form.Group className="mb-3" controlId="courseTitle">
            <Form.Label>Course Title</Form.Label>
            <Form.Control type="text" placeholder="Course Title" />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="courseMainImage">
              <Form.Label>Course Main Image</Form.Label>
              <Form.Control type="text" placeholder="Course Main Image" />
            </Form.Group>

            <Form.Group as={Col} controlId="courseMoreImage">
              <Form.Label>Course More Image</Form.Label>
              <Form.Control type="text" placeholder="Course More Image" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="courseDesc">
            <Form.Label>Course Intro OR Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="courseLifetime">
            <Form.Label>Course Lifetime</Form.Label>
            <Form.Control type="text" placeholder="Course lifetime" />
          </Form.Group>
          <Button variant="app" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default CreateCourse
