import React from 'react'
import { NavLink } from 'react-router-dom'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'

const CreateSlot = () => {
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
                <form action=''>
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
                              type='text'
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
                              type='text'
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
                              Learning Mode
                            </label>
                            <input
                              type='text'
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
                              type='number'
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
                              type='text'
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
                              Day
                            </label>
                            <input
                              type='text'
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
                              type='text'
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
                              type='text'
                              className={'form-control'}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={'card-footer d-flex justify-content-end'}>
                      <button
                        type='submit'
                        className={'btn btn-sm btn-primary mr-2'}
                      >
                        Save
                      </button>
                      <button
                        type='button'
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
