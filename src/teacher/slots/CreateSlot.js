import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'

const CreateSlot = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className={'user-main'}>
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={'col-12'}>
            <div className={'mb-2 d-flex justify-content-between'}>
              <h3>
                <NavLink exact to="/teacher-dashboard/slots">
                  <KeyboardBackspaceSharpIcon className={'icon'} />
                </NavLink>
                <span>Create Slots</span>
              </h3>
              <NavLink exact to="/teacher-dashboard/slots">
                <button className={'invite-btn'}>All Slots</button>
              </NavLink>
            </div>
            <div className={'separator mb-5'}></div>
            <div className={'row justify-content-center'}>
              <div className={'col-lg-6'}>
                <form action="">
                  <div className={'card'}>
                    <div className={'card-body'}>
                      <h1
                        style={{ fontSize: '22px' }}
                        className={'text-primary font-weight-bold'}
                      >
                        Create Slot
                      </h1>
                      <div>
                        <div className={'form-row'}>
                          <div className={'form-group col-md-12 mt-3'}>
                            <label
                              className={
                                'form-label text-primary font-weight-bold'
                              }
                            >
                              Course Name
                            </label>
                            <input
                              type="text"
                              className={'form-control'}
                              required
                            />
                          </div>
                        </div>
                        <div className={'form-row'}>
                          <div className={'form-group col-md-12'}>
                            <label
                              className={
                                'form-label text-primary font-weight-bold'
                              }
                            >
                              Type
                            </label>
                            <input
                              type="text"
                              className={'form-control'}
                              required
                            />
                          </div>
                        </div>

                        <div className={'form-row'}>
                          <div className={'form-group col-md-12'}>
                            <label
                              className={
                                'form-label text-primary font-weight-bold'
                              }
                            >
                              Limit
                            </label>
                            <input
                              type="number"
                              className={'form-control'}
                              required
                            />
                          </div>
                        </div>
                        <div className={'form-row'}>
                          <div className={'form-group col-md-12'}>
                            <label
                              className={
                                'form-label text-primary font-weight-bold'
                              }
                            >
                              Price
                            </label>
                            <input
                              type="number"
                              className={'form-control'}
                              required
                            />
                          </div>
                        </div>

                        <div className={'form-row'}>
                          <div className={'form-group col-md-12'}>
                            <label
                              className={
                                'form-label text-primary font-weight-bold'
                              }
                            >
                              Start Time
                            </label>
                            <input
                              type="text"
                              className={'form-control'}
                              required
                            />
                          </div>
                        </div>
                        <div className={'form-row'}>
                          <div className={'form-group col-md-12'}>
                            <label
                              className={
                                'form-label text-primary font-weight-bold'
                              }
                            >
                              End Time
                            </label>
                            <input
                              type="text"
                              className={'form-control'}
                              required
                            />
                          </div>
                        </div>
                        <div className={'mt-3'}>
                          <div className={'mb-3'}>
                            <div className={''}>
                              <input
                                className={'mr-2'}
                                style={{ width: '15px', height: '15px' }}
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleOnChange}
                              />
                              <label
                                className={'text-primary font-weight-bold'}
                              >
                                Repeat Session
                              </label>
                            </div>
                          </div>
                          {isChecked ? (
                            <div className={'mb-3'}>
                              <div
                                className={
                                  'custom-control custom-checkbox mr-4 d-inline-block'
                                }
                              >
                                <input
                                  type="checkbox"
                                  id="day1"
                                  className={'custom-control-input'}
                                />
                                <label
                                  htmlFor="day1"
                                  className={'custom-control-label'}
                                >
                                  Mon
                                </label>
                              </div>
                              <div
                                className={
                                  'custom-control custom-checkbox mr-4 d-inline-block'
                                }
                              >
                                <input
                                  type="checkbox"
                                  id="day2"
                                  className={'custom-control-input'}
                                />
                                <label
                                  htmlFor="day2"
                                  className={'custom-control-label'}
                                >
                                  Tue
                                </label>
                              </div>
                              <div
                                className={
                                  'custom-control custom-checkbox mr-4 d-inline-block'
                                }
                              >
                                <input
                                  type="checkbox"
                                  id="day3"
                                  className={'custom-control-input'}
                                />
                                <label
                                  htmlFor="day3"
                                  className={'custom-control-label'}
                                >
                                  Wed
                                </label>
                              </div>
                              <div
                                className={
                                  'custom-control custom-checkbox mr-4 d-inline-block'
                                }
                              >
                                <input
                                  type="checkbox"
                                  id="day4"
                                  className={'custom-control-input'}
                                />
                                <label
                                  htmlFor="day4"
                                  className={'custom-control-label'}
                                >
                                  Thu
                                </label>
                              </div>
                              <div
                                className={
                                  'custom-control custom-checkbox mr-4 d-inline-block'
                                }
                              >
                                <input
                                  type="checkbox"
                                  id="day5"
                                  className={'custom-control-input'}
                                />
                                <label
                                  htmlFor="day5"
                                  className={'custom-control-label'}
                                >
                                  Fri
                                </label>
                              </div>
                              <div
                                className={
                                  'custom-control custom-checkbox mr-4 d-inline-block'
                                }
                              >
                                <input
                                  type="checkbox"
                                  id="day6"
                                  className={'custom-control-input'}
                                />
                                <label
                                  htmlFor="day6"
                                  className={'custom-control-label'}
                                >
                                  Sat
                                </label>
                              </div>
                              <div
                                className={
                                  'custom-control custom-checkbox mr-4 d-inline-block'
                                }
                              >
                                <input
                                  type="checkbox"
                                  id="day7"
                                  className={'custom-control-input'}
                                />
                                <label
                                  htmlFor="day7"
                                  className={'custom-control-label'}
                                >
                                  Sun
                                </label>
                              </div>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className={'form-group'}>
                          <label
                            htmlFor=""
                            className={'text-primary font-weight-bold'}
                          >
                            Slot Mode
                          </label>
                          <div className={'custom-control custom-radio'}>
                            <input
                              type="radio"
                              className={'custom-control-input'}
                              id="Offline"
                              name="slot_mode"
                              value="1"
                              required
                            />
                            <label
                              className={'custom-control-label'}
                              htmlFor="Offline"
                            >
                              Offline
                            </label>
                          </div>
                          <div className={'custom-control custom-radio'}>
                            <input
                              type="radio"
                              className={'custom-control-input'}
                              id="Online"
                              name="slot_mode"
                              value="2"
                              required
                            />
                            <label
                              className={'custom-control-label'}
                              htmlFor="Online"
                            >
                              Online
                            </label>
                          </div>
                          <div className={'custom-control custom-radio'}>
                            <input
                              type="radio"
                              className={'custom-control-input'}
                              id="Both"
                              name="slot_mode"
                              value="3"
                              required
                            />
                            <label
                              className={'custom-control-label'}
                              htmlFor="Both"
                            >
                              Both
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={'card-footer d-flex justify-content-end'}>
                      <button
                        type="submit"
                        className={'btn btn-sm btn-primary mr-2'}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className={'btn btn-sm btn-outline-primary'}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateSlot
