import React, { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const SlotList = () => {
  const [Slots, setSlots] = useState([])

  const memberId = 22
  const coachingId = 20
  const limit = 10
  const page = 1

  const fetchUsers = useCallback(async () => {
    const slotData = {
      startDate: '2021/08/24',
      endDate: '2021/08/25',
    }
    const res = await fetch(
      `https://lmsi-api.herokuapp.com/api/teacher/slots/upcoming/get/${memberId}/${coachingId}/${limit}/${page}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          language: 'en',
        },
        body: JSON.stringify(slotData),
      }
    )
    try {
      const data = await res.json()
      if (data.API_STATUS) {
        return data.res
      } else {
        console.error(data.message)
      }
    } catch (err) {
      console.error(err.message)
    }
  }, [])

  useEffect(() => {
    const getUser = async () => {
      const usersFromServer = await fetchUsers()
      setSlots(usersFromServer)
    }

    getUser()
  }, [fetchUsers])

  return (
    <div className={'user-main'}>
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={'col-12'}>
            <div className={'mb-2 d-flex justify-content-between'}>
              <h3>Slots List</h3>
              <div>
                <NavLink exact to="/teacher-dashboard/slots/create-slot">
                  <button className={'invite-btn mr-2'}>Create Slot</button>
                </NavLink>
                <NavLink exact to="/teacher-dashboard/slots/my-appointments">
                  <button className={'invite-btn'}>My Appointments</button>
                </NavLink>
              </div>
            </div>
            <div className={'separator mb-5'}></div>
          </div>
        </div>

        {Slots.map((slot, i) => {
          return (
            <div key={i} className={'row'}>
              <div className={'col-12 list'}>
                <div className={'card mb-3'}>
                  <div style={{ padding: '1.75rem' }} className={'card-body'}>
                    <h4 className={'pb-1 border-bottom mb-3'}>
                      {slot.slot_title}
                    </h4>
                    <div className={'mx-n2 my-n1 text-center text-md-start'}>
                      <div className={'alert alert-danger mb-0'}>
                        <ol>
                          <li className={'ml-2'}>
                            <span
                              style={{
                                fontWeight: 'bold',
                              }}
                            >
                              Type :{' '}
                            </span>
                            {slot.slot_type}
                          </li>
                          <li className={'ml-2 mt-3'}>
                            <span style={{ fontWeight: 'bold' }}>
                              Learning Mode :{' '}
                            </span>
                            {slot.learning_mode}
                          </li>
                          <li className={'ml-2 mt-3'}>
                            <span style={{ fontWeight: 'bold' }}>Limit : </span>
                            {slot.slot_limit}
                          </li>
                          <li className={'ml-2 mt-3'}>
                            <span style={{ fontWeight: 'bold' }}>Price : </span>
                            {slot.slot_price}
                          </li>
                          <li className={'ml-2 mt-3'}>
                            <span style={{ fontWeight: 'bold' }}>Day : </span>
                            {slot.slot_day}
                          </li>
                          <li className={'ml-2 mt-3'}>
                            <span style={{ fontWeight: 'bold' }}>
                              Start Time :{' '}
                            </span>
                            {slot.start_time}
                          </li>
                          <li className={'ml-2 mt-3'}>
                            <span style={{ fontWeight: 'bold' }}>
                              End Time :{' '}
                            </span>
                            {slot.end_time}
                          </li>
                          <li className={'ml-2 mt-3'}>
                            <span style={{ fontWeight: 'bold' }}>
                              Duration :{' '}
                            </span>
                            {slot.slot_duration}
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className={'card-footer'}>
                    <NavLink exact to="/teacher-dashboard/slots/create">
                      <button className={'btn btn-sm btn-primary mr-3'}>
                        Create Common Slots
                      </button>
                    </NavLink>
                    <NavLink exact to="/teacher-dashboard/slots/create-course">
                      <button className={'btn btn-sm btn-primary mr-1'}>
                        Create Course Slot
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SlotList
