import React, { useContext, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Form, InputGroup, Modal, Row, Col } from 'react-bootstrap'
// import { Icon } from 'src/components/Icon'

// import addEvent from 'src/assets/images/addEvent.png'

import { Button /* OutlineButton */ } from 'src/components/Buttons'
import { AppContext } from 'src/AppContext'
import { TITLE_UPDATE } from 'src/constants/actions'

const localizer = momentLocalizer(moment)

const Slot = ({ match }) => {
  const pageHeading = 'Slots list',
    { updateAppStore } = useContext(AppContext),
    [slotModal, toggleSlotModal] = useState(false),
    [slots, setSLots] = useState([]),
    [startDateTime, setStartDateTime] = useState(new Date()),
    [endDateTime, setEndDateTime] = useState(new Date()),
    [slotTitle, setSlotTitle] = useState(''),
    [slotColor, setSlotColor] = useState('app'),
    parseDate = s => {
      var b = s.split(/\D+/)
      return new Date(b[0], --b[1], b[2], b[3], b[4], b[5] || 0, b[6] || 0)
    },
    openSlotModal = ({ start, end }) => {
      toggleSlotModal(true)
      setStartDateTime(start)
      setEndDateTime(end)
    },
    addSlots = () => {
      setSLots(storedSlots => {
        return [
          ...storedSlots,
          {
            start: startDateTime,
            end: endDateTime,
            title: slotTitle,
            id: storedSlots.length + 1,
            courseId: 656,
            instituteId: 454,
            description: 'this is description',
            allDay: false,
            bgColor: slotColor,
            color: '#ffffff',
          },
        ]
      })
      setSlotTitle('')
      setSlotColor('app')
      toggleSlotModal(false)
    },
    slotSelected = slot => {
      console.log(slot)
    },
    slotStyleGetter = slot => {
      return {
        style: {
          borderRadius: '0px',
          border: '0px',
          color: slot.color,
        },
        className: `bg-${slot.bgColor}`,
      }
    }

  useEffect(() => {
    updateAppStore({
      type: TITLE_UPDATE,
      payload: {
        pageHeading,
      },
    })
  }, [updateAppStore])

  return (
    <>
      {/* <div className={'slots'}>
        <h3>CreateSlot</h3>
        <p>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
        <img
          src={addEvent}
          alt={'Add Event Calendar'}
          className={'icon mb-3'}
        />
        <Link
          className={'btn btn-app text-white'}
          to={`${match.url}/create-slot`}
        >
          Create Slot
        </Link>
      </div> */}
      <div className={'card w-100 h-100'}>
        <div className={'card-body h-100'}>
          <Calendar
            localizer={localizer}
            events={slots}
            messages={{}}
            startAccessor={'start'}
            endAccessor={'end'}
            views={['month', 'week', 'day']}
            defaultView={'week'}
            selectable
            popup
            onSelectSlot={openSlotModal}
            onSelectEvent={slotSelected}
            eventPropGetter={slotStyleGetter}
            step={30}
            // timeslots={1}
          />
        </div>
      </div>
      <Modal
        centered={true}
        show={slotModal}
        onHide={() => toggleSlotModal(false)}
        className={'slot-modal'}
        size={'lg'}
      >
        <Form onSubmit={() => addSlots()}>
          <Modal.Header closeButton>
            <Modal.Title>New Slot</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className={'mb-3'}>
              <Form.Group as={Col} md={6} controlId={'title'}>
                <Form.Control
                  type={'text'}
                  placeholder={'Add Title'}
                  aria-label={'Add Title'}
                  value={slotTitle}
                  onChange={({ target: { value } }) => setSlotTitle(value)}
                  required={true}
                />
              </Form.Group>
              <Form.Group as={Col} md={6} controlId={'location'}>
                <Form.Control
                  type={'text'}
                  placeholder={'Location'}
                  aria-label={'Location'}
                />
              </Form.Group>
            </Row>
            <Row className={'mb-3'}>
              <Form.Group as={Col} md={6} controlId={'start'}>
                <InputGroup>
                  <Form.Control
                    type={'datetime-local'}
                    placeholder={'Start'}
                    aria-label={'Start'}
                    value={
                      startDateTime
                        ? new Date(
                            startDateTime?.getTime() +
                              new Date().getTimezoneOffset() * -60 * 1000
                          )
                            .toISOString()
                            .slice(0, 19)
                        : ''
                    }
                    onChange={({ target: { value } }) =>
                      setStartDateTime(parseDate(value))
                    }
                  />
                  {/* <OutlineButton variant={'secondary'} className={'px-1'}>
                  <Icon icon={'calendar'} />
                </OutlineButton>
                <OutlineButton variant={'secondary'} className={'px-1'}>
                  <Icon icon={'hourglass'} />
                </OutlineButton> */}
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="end">
                <InputGroup>
                  <Form.Control
                    type={'datetime-local'}
                    placeholder={'End'}
                    aria-label={'End'}
                    value={
                      endDateTime
                        ? new Date(
                            endDateTime?.getTime() +
                              new Date().getTimezoneOffset() * -60 * 1000
                          )
                            .toISOString()
                            .slice(0, 19)
                        : ''
                    }
                    onChange={({ target: { value } }) =>
                      setEndDateTime(parseDate(value))
                    }
                  />
                  {/* <OutlineButton variant={'secondary'} className={'px-1'}>
                  <Icon icon={'calendar'} />
                </OutlineButton>
                <OutlineButton variant={'secondary'} className={'px-1'}>
                  <Icon icon={'hourglass'} />
                </OutlineButton> */}
                </InputGroup>
              </Form.Group>
            </Row>
            <Form.Group className={'mb-3'} controlId={'allday'}>
              <Form.Check type={'checkbox'} label={'All Day'} />
            </Form.Group>
            <Row className={'mb-3'}>
              <Form.Group as={Col} md={6} controlId={'repeat'}>
                <Form.Select defaultValue={'Repeat'}>
                  <option>Repeat</option>
                  <option value={'never'}>Never</option>
                  <option value={'daily'}>Daily</option>
                  <option value={'weekly'}>Weekly</option>
                  <option value={'monthly'}>Monthly</option>
                  <option value={'yearly'}>Yearly</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md={6} controlId={'color'}>
                <Form.Select
                  value={slotColor}
                  className={`bg-${slotColor} text-white`}
                  onChange={({ target: { value } }) => setSlotColor(value)}
                >
                  <option value={'app'} className={'bg-app text-white py-2'}>
                    App
                  </option>
                  <option
                    value={'primary'}
                    className={'bg-primary text-white py-2'}
                  >
                    Primary
                  </option>
                  <option
                    value={'success'}
                    className={'bg-success text-white py-2'}
                  >
                    Success
                  </option>
                  <option value={'info'} className={'bg-info text-white py-2'}>
                    Info
                  </option>
                  <option
                    value={'danger'}
                    className={'bg-danger text-white py-2'}
                  >
                    Danger
                  </option>
                  <option
                    value={'warning'}
                    className={'bg-warning text-white py-2'}
                  >
                    Warning
                  </option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="select-course">
              <Form.Select defaultValue={'Select Course'}>
                <option>Select Course</option>
                <option value={1}>Course 1</option>
                <option value={2}>Course 2</option>
                <option value={3}>Course 3</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className={'mb-3'} controlId={'description'}>
              <Form.Control
                as={'textarea'}
                placeholder={'Description'}
                rows={3}
                style={{ resize: 'none' }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant={'primary'} type={'submit'}>
              Submit
            </Button>
            <Button
              variant={'secondary'}
              onClick={() => toggleSlotModal(false)}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default Slot
