import React, { useContext, useEffect } from 'react'

import { AppContext } from 'src/AppContext'
import { TITLE_UPDATE } from 'src/constants/actions'

const StudentList = () => {
  const pageHeading = 'Slots list',
    { updateAppStore } = useContext(AppContext)

  useEffect(() => {
    updateAppStore({
      type: TITLE_UPDATE,
      payload: {
        pageHeading,
      },
    })
  }, [updateAppStore])

  return (
    <div className={'students'}>
      <div className={'list-heading row'}>
        <div className={'col-4'}>
          <h3>STUDENT NAME</h3>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
          <p>Arafat Ahmed Chowdhury</p>
        </div>
        <div className={'col-2'}>
          <h3>Date</h3>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
          <p>27-10-2021</p>
        </div>
        <div className={'col-4'}>
          <h3>TIME</h3>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
          <p>11:00 am - 12:00 pm</p>
        </div>
        <div className={'col-2'}>
          <h3>PAYMENT STATUS</h3>
          <p>Pending</p>
          <p>Pending</p>
          <p>Pending</p>
          <p>Pending</p>
          <p>Pending</p>
          <p>Pending</p>
          <p>Pending</p>
          <p>Pending</p>
          <p>Pending</p>
          <p>Pending</p>
          <p>Pending</p>
          <p>Pending</p>
          <p>Pending</p>
          <p>Pending</p>
        </div>
      </div>
    </div>
  )
}

export default StudentList
