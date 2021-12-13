import React, { useCallback, useContext, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Form, InputGroup, Modal, Row, Col } from 'react-bootstrap'
// import { Icon } from 'src/components/Icon'

// import addEvent from 'src/assets/images/addEvent.png'

import { Button /* OutlineButton */ } from 'src/components/Buttons'
import { AppContext } from 'src/AppContext'
import {
  TITLE_UPDATE,
  SLOT_CREATED,
  UNEXPECTED_ERROR,
} from 'src/constants/actions'

const localizer = momentLocalizer(moment)

const Slot = ({ match }) => {
  const pageHeading = 'Slots',
    {
      appStore: { user, apiURL },
      updateAppStore,
    } = useContext(AppContext),
    [slotModal, toggleSlotModal] = useState(false),
    [slots, setSlots] = useState([]),
    [startDate, setStartDate] = useState(
      moment(new Date()).format('YYYY/MM/DD')
    ),
    [startDateTime, setStartDateTime] = useState(new Date()),
    [endDateTime, setEndDateTime] = useState(new Date()),
    [slotTitle, setSlotTitle] = useState(''),
    [slotType, setSlotType] = useState('Select Slot Type'),
    [learningMode, setLearningMode] = useState('Online'),
    [slotPrice, setSlotPrice] = useState(0),
    [slotLimit, setSlotLimit] = useState(10),
    [allDay, setAllDay] = useState(false),
    [slotDescription, setSlotDescription] = useState(''),
    [slotColor, setSlotColor] = useState('app'),
    [slotCreating, setSlotCreating] = useState(false),
    parseDate = s => {
      const b = s.split(/\D+/)
      return new Date(b[0], --b[1], b[2], b[3], b[4], b[5] || 0, b[6] || 0)
    },
    closeSlotModal = () => {
      setAllDay(false)
      setStartDate(moment(new Date()).format('YYYY/MM/DD'))
      setStartDateTime(new Date())
      setEndDateTime(new Date())
      setSlotCreating(false)
      toggleSlotModal(false)
    },
    openSlotModal = ({ start, end, ...rest }) => {
      if (moment(end).diff(moment(start), 'days') < 1) {
        setAllDay(moment(end).diff(moment(start), 'days') === 1 ? true : false)
        setStartDate(moment(start).format('YYYY/MM/DD'))
        setStartDateTime(start)
        setEndDateTime(end)
        toggleSlotModal(true)
      }
    },
    addSlots = async event => {
      try {
        event.preventDefault()
        setSlotCreating(true)
        const slotData = {
            slot_date: startDate,
            start: moment.utc(startDateTime).unix(),
            end: moment.utc(endDateTime).unix(),
            slot_title: slotTitle,
            slot_price: slotPrice,
            slot_limit: slotLimit,
            slot_type: slotType,
            learning_mode: learningMode,
            slot_description: slotDescription,
          },
          addSlotReq = await fetch(`${apiURL}/instructor/slot/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              language: 'en',
              Authorization: `Bearer ${user.accessToken}`,
            },
            body: JSON.stringify(slotData),
          })
        if (addSlotReq.ok) {
          const data = await addSlotReq.json()
          console.log(data)
          if (data.API_STATUS) {
            setSlots(storedSlots => {
              return [
                ...storedSlots,
                {
                  start: startDateTime,
                  end: endDateTime,
                  title: slotTitle,
                  id: data.id,
                  courseId: 656,
                  instituteId: 454,
                  description: slotDescription,
                  allDay: allDay,
                  bgColor: slotColor,
                  color: '#ffffff',
                  slotType,
                  status: '1',
                  limit: slotLimit,
                  price: slotPrice,
                },
              ]
            })
            updateAppStore({
              type: SLOT_CREATED,
              payload: {
                notification: {
                  code: SLOT_CREATED,
                  color: 'success',
                  message: data.message,
                },
              },
            })
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
              message: error.message,
            },
          },
        })
      } finally {
        setSlotTitle('')
        setAllDay(false)
        setSlotDescription('')
        setSlotColor('app')
        setSlotCreating(false)
        toggleSlotModal(false)
      }
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
    },
    fetchSlots = useCallback(async () => {
      try {
        const slotsRequest = await fetch(`${apiURL}/instructor/slot/get/list`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            language: 'en',
            Authorization: `Bearer ${user.accessToken}`,
          },
        })
        if (slotsRequest.ok) {
          const data = await slotsRequest.json()
          console.log(data)
          if (data.API_STATUS) {
            if (data.HTTP_STATUS === 204) {
              throw new Error(data.message)
            }
            const slotsData = data.response.map(slot => {
              console.log(
                moment(moment.unix(slot.end).utc().toDate()).diff(
                  moment(moment.unix(slot.start).utc().toDate()),
                  'minutes'
                )
              )
              return {
                allDay: false,
                bgColor: 'app',
                color: '#ffffff',
                courseId: slot.slot_type === '' ? null : 656,
                description: slot.slot_description,
                end: moment.unix(slot.end).utc().toDate(),
                id: slot.slot_id,
                instituteId: slot.institute_id,
                slotType: slot.slot_type,
                start: moment.unix(slot.start).utc().toDate(),
                title: slot.slot_title,
                status: slot.slot_status,
                limit: slot.slot_limit,
                price: slot.slot_price,
                createdBy: slot.created_by,
              }
            })
            setSlots(slotsData)
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
              message: error.message,
            },
          },
        })
      }
    }, [apiURL, updateAppStore, user])

  useEffect(() => {
    fetchSlots()
    updateAppStore({
      type: TITLE_UPDATE,
      payload: {
        pageHeading,
      },
    })
  }, [fetchSlots, updateAppStore])

  false && console.log(slots)

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
      <Button
        variant={'app'}
        className={'my-3'}
        onClick={() => toggleSlotModal(true)}
      >
        Add New Slot
      </Button>
      <div className={'card w-100 h-100 slot-card'}>
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
        onHide={() => closeSlotModal()}
        className={'slot-modal'}
        contentClassName={'border'}
        size={'lg'}
      >
        <Form onSubmit={event => addSlots(event)}>
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
              <Form.Group as={Col} md={6} controlId={'price'}>
                <Form.Control
                  type={'number'}
                  placeholder={'Price'}
                  aria-label={'Price'}
                  onChange={({ target: { value } }) =>
                    setSlotPrice(parseFloat(value))
                  }
                />
              </Form.Group>
            </Row>
            <Row className={'mb-3'}>
              <Form.Group as={Col} md={6} controlId={'start'}>
                <InputGroup>
                  <InputGroup.Text className={'mb-0'}>Start</InputGroup.Text>
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
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="end">
                <InputGroup>
                  <InputGroup.Text className={'mb-0'}>End</InputGroup.Text>
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
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className={'mb-3'}>
              <Form.Group as={Col} md={6} controlId={'allday'}>
                <Form.Check
                  type={'checkbox'}
                  label={'All Day'}
                  defaultChecked={allDay}
                  onChange={({ target: { checked } }) => {
                    setAllDay(checked)
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md={6}>
                <div className={'d-flex align-items-center h-100'}>
                  <Form.Label className={'mb-0'}>Learning Mode</Form.Label>
                  <div className={'d-flex flex-grow-1 justify-content-evenly'}>
                    <Form.Check
                      inline
                      className={'mb-0'}
                      defaultChecked={learningMode === 'Online'}
                      onChange={({ target: { checked } }) =>
                        checked && setLearningMode('Online')
                      }
                      label={'Online'}
                      name={'learningMode'}
                      type={'radio'}
                      id={'learningModeOnline'}
                    />
                    <Form.Check
                      inline
                      className={'mb-0'}
                      label={'Offline'}
                      defaultChecked={learningMode === 'Offline'}
                      onChange={({ target: { checked } }) =>
                        checked && setLearningMode('Offline')
                      }
                      name={'learningMode'}
                      type={'radio'}
                      id={'learningModeOffline'}
                    />
                  </div>
                </div>
              </Form.Group>
            </Row>
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
                  className={`bg-${slotColor} text-white slot-color`}
                  onChange={({ target: { value } }) => setSlotColor(value)}
                >
                  <option value={'app'} className={'bg-app text-white py-2'}>
                    Forest
                  </option>
                  <option
                    value={'primary'}
                    className={'bg-primary text-white py-2'}
                  >
                    Cool
                  </option>
                  <option
                    value={'success'}
                    className={'bg-success text-white py-2'}
                  >
                    Nature
                  </option>
                  <option value={'info'} className={'bg-info text-white py-2'}>
                    Ice
                  </option>
                  <option
                    value={'danger'}
                    className={'bg-danger text-white py-2'}
                  >
                    Heat
                  </option>
                  <option
                    value={'warning'}
                    className={'bg-warning text-white py-2'}
                  >
                    Warm
                  </option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className={'mb-3'}>
              <Form.Group as={Col} md={6} controlId={'slot-type'}>
                <Form.Select
                  onChange={({ target: { value } }) => {
                    setSlotType(value)
                  }}
                  required={true}
                >
                  <option>Select Slot Type</option>
                  <option value={'Common'}>Common</option>
                  <option value={'Course'}>Course</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md={6} controlId={'select-course'}>
                <Form.Select defaultValue={'Select Course'}>
                  <option>Select Course</option>
                  <option value={1}>Course 1</option>
                  <option value={2}>Course 2</option>
                  <option value={3}>Course 3</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                md={12}
                className={'mb-3'}
                controlId={'select-course'}
              >
                <div className={'d-flex align-items-center h-100'}>
                  <Form.Label className={'mb-0 me-3'}>
                    Slot Limit: <strong>{slotLimit}</strong>
                  </Form.Label>
                  <div className={'d-flex flex-grow-1 justify-content-around'}>
                    <Form.Range
                      max={100}
                      min={1}
                      step={1}
                      defaultValue={slotLimit}
                      onChange={({ target: { value } }) => {
                        setSlotLimit(parseInt(value))
                      }}
                    />
                  </div>
                </div>
              </Form.Group>
              <Form.Group
                as={Col}
                md={12}
                className={'mb-3'}
                controlId={'description'}
              >
                <Form.Control
                  as={'textarea'}
                  placeholder={'Description'}
                  rows={3}
                  style={{ resize: 'none' }}
                  onChange={({ target: { value } }) =>
                    setSlotDescription(value)
                  }
                />
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer className={'justify-content-between'}>
            <Button variant={'app'} type={'submit'} disabled={slotCreating}>
              Submit
            </Button>
            <Button variant={'secondary'} onClick={() => closeSlotModal()}>
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default Slot
