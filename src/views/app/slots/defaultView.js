import React, { useCallback, useContext, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Form, InputGroup, Modal, Row, Col } from 'react-bootstrap'
// import { Icon } from 'src/components/Icon'

// import addEvent from 'src/assets/images/addEvent.png'

import { Button /* OutlineButton */ } from 'src/components/Buttons'
import { apiRequest } from 'src/helpers/Utils'
import { AppContext } from 'src/AppContext'
import {
  TITLE_UPDATE,
  SLOT_CREATED,
  SLOT_UPDATED,
  SLOT_DELETED,
  UNEXPECTED_ERROR
} from 'src/constants/actions'

const localizer = momentLocalizer(moment)

const Slot = ({ match }) => {
  const pageHeading = 'Slots',
    {
      appStore: { user, apiURL },
      updateAppStore
    } = useContext(AppContext),
    [slotModal, toggleSlotModal] = useState(false),
    [slots, setSlots] = useState([]),
    [startDateTime, setStartDateTime] = useState(new Date()),
    [endDateTime, setEndDateTime] = useState(new Date()),
    [slotID, setSlotID] = useState(null),
    [slotTitle, setSlotTitle] = useState(''),
    [slotType, setSlotType] = useState('Select Slot Type'),
    [learningMode, setLearningMode] = useState('Online'),
    [slotPrice, setSlotPrice] = useState(0),
    [slotLimit, setSlotLimit] = useState(10),
    [allDay, setAllDay] = useState(false),
    [slotDescription, setSlotDescription] = useState(''),
    [slotColor, setSlotColor] = useState('app'),
    [slotProcessing, setSlotProcessing] = useState(false),
    parseDate = s => {
      const b = s.split(/\D+/)
      return new Date(b[0], --b[1], b[2], b[3], b[4], b[5] || 0, b[6] || 0)
    },
    closeSlotModal = () => {
      setSlotID(null)
      setAllDay(false)
      setSlotTitle('')
      setSlotDescription('')
      setSlotColor('app')
      setSlotType('Select Slot Type')
      setLearningMode('Online')
      setSlotPrice(0)
      setSlotLimit(10)
      setStartDateTime(new Date())
      setEndDateTime(new Date())
      setSlotProcessing(false)
      toggleSlotModal(false)
    },
    openSlotModal = ({ start, end }) => {
      if (moment(end).diff(moment(start), 'days') < 1) {
        setAllDay(moment(end).diff(moment(start), 'days') === 1 ? true : false)
        setStartDateTime(start)
        setEndDateTime(end)
        toggleSlotModal(true)
      }
    },
    addSlots = async event => {
      try {
        event.preventDefault()
        setSlotProcessing(true)
        const slotData = {
            start: moment.utc(startDateTime).unix(),
            end: moment.utc(endDateTime).unix(),
            slot_title: slotTitle,
            slot_price: slotPrice,
            slot_limit: slotLimit,
            slot_type: slotType,
            learning_mode: learningMode,
            slot_description: slotDescription,
            color: slotColor
          },
          addSlotReq = await apiRequest(
            'POST',
            `${apiURL}/instructor/slot/create`,
            user.accessToken,
            slotData
          )
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
                  color: 'white',
                  slotType,
                  learningMode,
                  status: '1',
                  limit: slotLimit,
                  price: slotPrice
                }
              ]
            })
            updateAppStore({
              type: SLOT_CREATED,
              payload: {
                notification: {
                  code: SLOT_CREATED,
                  color: 'success',
                  message: data.message
                }
              }
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
              message: error.message
            }
          }
        })
      } finally {
        closeSlotModal()
      }
    },
    updateSlot = async event => {
      try {
        event.preventDefault()
        setSlotProcessing(true)
        const slotData = {
            start: moment.utc(startDateTime).unix(),
            end: moment.utc(endDateTime).unix(),
            slot_title: slotTitle,
            slot_price: slotPrice,
            slot_limit: slotLimit,
            slot_type: slotType,
            learning_mode: learningMode,
            slot_description: slotDescription,
            color: slotColor
          },
          updateSlotReq = await apiRequest(
            'PUT',
            `${apiURL}/instructor/slot/update/${slotID}`,
            user.accessToken,
            slotData
          )
        if (updateSlotReq.ok) {
          const data = await updateSlotReq.json()
          if (data.API_STATUS) {
            setSlots(storedSlots => {
              return storedSlots.map(slot =>
                slot.id !== slotID
                  ? slot
                  : {
                      start: startDateTime,
                      end: endDateTime,
                      title: slotTitle,
                      id: data.id,
                      courseId: 656,
                      instituteId: 454,
                      description: slotDescription,
                      allDay: allDay,
                      bgColor: slotColor,
                      color: 'white',
                      slotType,
                      learningMode,
                      status: '1',
                      limit: slotLimit,
                      price: slotPrice
                    }
              )
            })
            updateAppStore({
              type: SLOT_UPDATED,
              payload: {
                notification: {
                  code: SLOT_UPDATED,
                  color: 'success',
                  message: data.message
                }
              }
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
              message: error.message
            }
          }
        })
      } finally {
        closeSlotModal()
      }
    },
    deleteSlot = async () => {
      if (window.confirm('Are you sure you want to delete?') === false) {
        return
      }
      try {
        setSlotProcessing(true)
        const deleteSlotReq = await apiRequest(
          'DELETE',
          `${apiURL}/instructor/slot/terminate/${slotID}`,
          user.accessToken
        )
        if (deleteSlotReq.ok) {
          const data = await deleteSlotReq.json()
          console.log(data, slotID)
          if (data.API_STATUS) {
            setSlots(storedSlots =>
              storedSlots.filter(slot => slot.id !== slotID)
            )
            updateAppStore({
              type: SLOT_DELETED,
              payload: {
                notification: {
                  code: SLOT_DELETED,
                  color: 'success',
                  message: data.message
                }
              }
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
              message: error.message
            }
          }
        })
      } finally {
        closeSlotModal()
      }
    },
    slotSelected = ({
      allDay,
      bgColor,
      color,
      description,
      end,
      id,
      learningMode,
      limit,
      price,
      slotType,
      start,
      title
    }) => {
      setSlotID(id)
      setSlotTitle(title)
      setSlotPrice(parseFloat(price))
      setAllDay(allDay)
      setSlotColor(bgColor)
      setLearningMode(learningMode)
      setSlotType(slotType)
      setSlotLimit(limit)
      setSlotDescription(description)
      openSlotModal({
        start,
        end
      })
    },
    slotStyleGetter = slot => {
      return {
        className: [
          `bg-${slot.bgColor}`,
          `border-${slot.bgColor}`,
          `text-${slot.color}`,
          `border-start`,
          `border-top-0`,
          `border-end-0`,
          `border-bottom-0`,
          `border-4`,
          `rounded-0`,
          `rounded-end`
        ].join(' '),
        style: {
          '--bs-bg-opacity': 0.5
        }
      }
    },
    fetchSlots = useCallback(async () => {
      try {
        const slotsRequest = await apiRequest(
          'GET',
          `${apiURL}/instructor/slot/get/list`,
          user.accessToken
        )
        if (slotsRequest.ok) {
          const data = await slotsRequest.json()
          false && console.log(data)
          if (data.API_STATUS) {
            if (data.HTTP_STATUS === 204) {
              throw new Error(data.message)
            }
            const slotsData = data.response.map(slot => {
              // console.log(
              //   moment(
              //     moment
              //       .unix(slot.end)
              //       .utc()
              //       .toDate()
              //   ).diff(
              //     moment(
              //       moment
              //         .unix(slot.start)
              //         .utc()
              //         .toDate()
              //     ),
              //     'minutes'
              //   )
              // )
              return {
                allDay: false,
                bgColor: slot.color ? slot.color : 'app',
                color: 'white',
                courseId: slot.slot_type === '' ? null : 656,
                description: slot.slot_description,
                end: moment.unix(slot.end).utc().toDate(),
                id: slot.slot_id,
                instituteId: slot.institute_id,
                learningMode: slot.learning_mode,
                slotType: slot.slot_type,
                start: moment.unix(slot.start).utc().toDate(),
                title: slot.slot_title,
                status: slot.slot_status,
                limit: slot.slot_limit,
                price: slot.slot_price,
                createdBy: slot.created_by
              }
            })
            setSlots(slotsData)
          } else {
            if (data.HTTP_STATUS === 400) {
              throw new Error(data.message)
            }
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
      }
    }, [apiURL, updateAppStore, user])

  useEffect(() => {
    fetchSlots()
    updateAppStore({
      type: TITLE_UPDATE,
      payload: {
        pageHeading
      }
    })
    if (typeof window !== 'undefined') {
      const timeContent = document.querySelector('.slot-card .rbc-time-content')
      setTimeout(() => {
        const currentTimeIndicator = timeContent.querySelector(
          '.rbc-current-time-indicator'
        )
        if (currentTimeIndicator) {
          timeContent.style.scrollBehavior = 'smooth'
          timeContent.scrollTop = currentTimeIndicator?.offsetTop - 20
          timeContent.removeAttribute('style')
        }
      }, 1500)
    }
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
      <div className={'d-flex h-100 flex-column'}>
        <div className={'flex-shrink-1'}>
          <Button
            variant={'app'}
            className={'my-3'}
            onClick={() => toggleSlotModal(true)}
          >
            Add New Slot
          </Button>
        </div>
        <div className={'flex-grow-1 overflow-auto'}>
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
                selectable={'ignoreEvents'}
                popup
                onSelectSlot={openSlotModal}
                onSelectEvent={slotSelected}
                eventPropGetter={slotStyleGetter}
                step={60}
                timeslots={1}
                formats={{
                  dayFormat: 'DD dddd',
                  timeGutterFormat: 'hh:ss a'
                }}
              />
            </div>
          </div>
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
        <Form
          onSubmit={event => {
            slotID === null ? addSlots(event) : updateSlot(event)
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {slotID === null ? 'New Slot' : `Edit Slot: ${slotTitle}`}
            </Modal.Title>
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
                    setSlotPrice(value ? parseFloat(value) : 0)
                  }
                  value={slotPrice}
                  min={0}
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
                  <option value={'dark'} className={'bg-dark text-white py-2'}>
                    Night
                  </option>
                  <option
                    value={'primary'}
                    className={'bg-primary text-white py-2'}
                  >
                    Water
                  </option>
                  <option
                    value={'success'}
                    className={'bg-success text-white py-2'}
                  >
                    Nature
                  </option>
                  <option value={'info'} className={'bg-info text-white py-2'}>
                    Sky
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
                  defaultValue={slotType}
                >
                  <option>Select Slot Type</option>
                  <option value={'Common'}>Common</option>
                  <option value={'Specific'}>Specific</option>
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
                  value={slotDescription}
                />
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer className={'justify-content-between'}>
            <Button variant={'app'} type={'submit'} disabled={slotProcessing}>
              Submit
            </Button>
            {slotID !== null && (
              <Button
                variant={'danger'}
                onClick={() => {
                  deleteSlot()
                }}
                disabled={slotProcessing}
              >
                Delete
              </Button>
            )}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default Slot
