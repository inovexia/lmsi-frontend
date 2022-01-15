import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { confirmable, createConfirmation } from 'react-confirm'

const Confirmation = ({
  show,
  proceed,
  dismiss,
  cancel,
  confirmation,
  title,
  okText = 'OK',
  cancelText = 'Cancel',
  okButtonStyle = 'primary',
  cancelButtonStyle = 'secondary',
  ...options
}) => {
  const header = title ? (
    <Modal.Header className={'justify-content-center'}>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  ) : undefined
  return (
    <Modal
      size={'small'}
      show={show}
      onHide={() => proceed(false)}
      backdrop={'static'}
      centered={true}
    >
      {header}
      <Modal.Body className={'text-center'}>{confirmation}</Modal.Body>
      <Modal.Footer className={'justify-content-center'}>
        <Button
          variant={cancelButtonStyle}
          onClick={() => proceed(false)}
          className={'my-0'}
        >
          {cancelText}
        </Button>
        <Button
          variant={okButtonStyle}
          onClick={() => proceed(true)}
          className={'my-0'}
        >
          {okText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const confirmLow = createConfirmation(confirmable(Confirmation))

export const confirm = (message, options = {}) => {
  return confirmLow(Object.assign({ confirmation: message }, options))
}

const Alert = ({
  show,
  proceed,
  dismiss,
  cancel,
  confirmation,
  title,
  okText = 'OK',
  okButtonStyle = 'primary',
  ...options
}) => {
  const header = title ? (
    <Modal.Header className={'justify-content-center'}>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  ) : undefined
  return (
    <Modal
      size={'small'}
      show={show}
      onHide={() => proceed()}
      keyboard={true}
      backdrop={'static'}
      centered={true}
    >
      {header}
      <Modal.Body className={'text-center'}>{confirmation}</Modal.Body>
      <Modal.Footer className={'justify-content-center'}>
        <Button
          variant={okButtonStyle}
          onClick={() => proceed()}
          className={'my-0'}
        >
          {okText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const alertLow = createConfirmation(confirmable(Alert))

export const alert = (message, options = {}) => {
  return alertLow(Object.assign({ confirmation: message }, options))
}
