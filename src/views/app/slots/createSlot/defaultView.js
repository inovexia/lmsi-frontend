import React, { useState } from 'react'

const CreateSlot = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  return (
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
                <div className={'form-row mt-3'}>
                  <div className={'form-group col-md-12 '}>
                    <label
                      className={'form-label text-primary font-weight-bold'}
                    >
                      Course Name
                    </label>
                    <input type="text" className={'form-control'} required />
                  </div>
                </div>
                <div className={'form-row mt-3'}>
                  <div className={'form-group col-md-12'}>
                    <label
                      className={'form-label text-primary font-weight-bold'}
                    >
                      Type
                    </label>
                    <input type="text" className={'form-control'} required />
                  </div>
                </div>

                <div className={'form-row mt-3'}>
                  <div className={'form-group col-md-12'}>
                    <label
                      className={'form-label text-primary font-weight-bold'}
                    >
                      Limit
                    </label>
                    <input type="number" className={'form-control'} required />
                  </div>
                </div>
                <div className={'form-row mt-3'}>
                  <div className={'form-group col-md-12'}>
                    <label
                      className={'form-label text-primary font-weight-bold'}
                    >
                      Price
                    </label>
                    <input type="number" className={'form-control'} required />
                  </div>
                </div>

                <div className={'form-row row mt-3'}>
                  <div className={'form-group col-md-6'}>
                    <label
                      htmlFor="start_time"
                      className={'form-label text-primary font-weight-bold'}
                    >
                      Start Time
                    </label>
                    <input
                      className={'form-control'}
                      type="time"
                      name="start_time"
                      id="start_time"
                      defaultValue="14:06"
                      required
                    />
                  </div>
                  <div className={'form-group col-md-6'}>
                    <label
                      htmlFor="end_time"
                      className={'form-label text-primary font-weight-bold'}
                    >
                      End Time
                    </label>
                    <input
                      className={'form-control'}
                      type="time"
                      name="end_time"
                      id="end_time"
                      defaultValue="15:06"
                      required
                    />
                  </div>
                </div>

                <div className={'form-row mt-3'}>
                  <div className={'form-group col-md-12'}>
                    <label
                      className={'form-label text-primary font-weight-bold'}
                      htmlFor="slot_date"
                    >
                      Start Date
                    </label>
                    <input
                      className={'form-control'}
                      type="date"
                      name="slot_date"
                      id="slot_date"
                      min="2021-09-01"
                      max="2021-11-30"
                      defaultValue="2021-09-01"
                      required
                    />
                  </div>
                </div>

                <div className={'mt-3'}>
                  <div className={'mb-3'}>
                    <div className={''}>
                      <input
                        className={'me-2'}
                        style={{ width: '15px', height: '15px' }}
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleOnChange}
                      />
                      <label className={'text-primary font-weight-bold'}>
                        Repeat Session
                      </label>
                    </div>
                  </div>
                  {isChecked ? (
                    <>
                      <div className={'mb-3'}>
                        <div
                          className={
                            'custom-control custom-checkbox me-4 d-inline-block'
                          }
                        >
                          <input
                            type="checkbox"
                            id="day1"
                            className={'custom-control-input me-2'}
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
                            'custom-control custom-checkbox me-4 d-inline-block'
                          }
                        >
                          <input
                            type="checkbox"
                            id="day2"
                            className={'custom-control-input me-2'}
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
                            'custom-control custom-checkbox me-4 d-inline-block'
                          }
                        >
                          <input
                            type="checkbox"
                            id="day3"
                            className={'custom-control-input me-2'}
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
                            'custom-control custom-checkbox me-4 d-inline-block'
                          }
                        >
                          <input
                            type="checkbox"
                            id="day4"
                            className={'custom-control-input me-2'}
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
                            'custom-control custom-checkbox me-4 d-inline-block'
                          }
                        >
                          <input
                            type="checkbox"
                            id="day5"
                            className={'custom-control-input me-2'}
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
                            'custom-control custom-checkbox me-4 d-inline-block'
                          }
                        >
                          <input
                            type="checkbox"
                            id="day6"
                            className={'custom-control-input me-2'}
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
                            'custom-control custom-checkbox me-4 d-inline-block'
                          }
                        >
                          <input
                            type="checkbox"
                            id="day7"
                            className={'custom-control-input me-2'}
                          />
                          <label
                            htmlFor="day7"
                            className={'custom-control-label'}
                          >
                            Sun
                          </label>
                        </div>
                      </div>
                      <div className={'form-row mt-3 mb-3'}>
                        <div className={'form-group col-md-12'}>
                          <label
                            className={
                              'form-label text-primary font-weight-bold'
                            }
                            htmlFor="end_date"
                          >
                            End Date
                          </label>
                          <input
                            className={'form-control'}
                            type="date"
                            name="end_date"
                            id="end_date"
                            min="2021-09-01"
                            max="2021-11-30"
                            defaultValue="2021-09-01"
                            required
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    ''
                  )}
                </div>
                <div className={'form-group'}>
                  <label
                    htmlFor=""
                    className={'text-primary font-weight-bold mb-2'}
                  >
                    Slot Mode
                  </label>
                  <div className={'custom-control custom-radio'}>
                    <input
                      type="radio"
                      className={'custom-control-input me-2'}
                      id="Offline"
                      name="slot_mode"
                      value="1"
                      required
                    />
                    <label className={'custom-control-label'} htmlFor="Offline">
                      Offline
                    </label>
                  </div>
                  <div className={'custom-control custom-radio'}>
                    <input
                      type="radio"
                      className={'custom-control-input me-2'}
                      id="Online"
                      name="slot_mode"
                      value="2"
                      required
                    />
                    <label className={'custom-control-label'} htmlFor="Online">
                      Online
                    </label>
                  </div>
                  <div className={'custom-control custom-radio'}>
                    <input
                      type="radio"
                      className={'custom-control-input me-2'}
                      id="Both"
                      name="slot_mode"
                      value="3"
                      required
                    />
                    <label className={'custom-control-label'} htmlFor="Both">
                      Both
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={'card-footer d-flex justify-content-end'}>
              <button type="submit" className={'btn btn-sm btn-app me-2'}>
                Save
              </button>
              <button type="button" className={'btn btn-sm btn-outline-app'}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateSlot
