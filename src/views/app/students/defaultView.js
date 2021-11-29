import React, { useContext, useEffect } from 'react'

import { AppContext } from 'src/AppContext'
import { TITLE_UPDATE } from 'src/constants/actions'

const StudentList = () => {
  const pageHeading = 'Student list',
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
        </div>
        <div className={'col-2'}>
          <h3>Mobile NO.</h3>
          <p>2021134073</p>
          <p>2021134073</p>
          <p>2021134073</p>
          <p>2021134073</p>
          <p>2021134073</p>
          <p>2021134073</p>
          <p>2021134073</p>
          <p>2021134073</p>
          <p>2021134073</p>
          <p>2021134073</p>
        </div>
        <div className={'col-4'}>
          <h3>EMAIL</h3>
          <p>arafat.nayeem@gmail.com</p>
          <p>arafat.nayeem@gmail.com</p>
          <p>arafat.nayeem@gmail.com</p>
          <p>arafat.nayeem@gmail.com</p>
          <p>arafat.nayeem@gmail.com</p>
          <p>arafat.nayeem@gmail.com</p>
          <p>arafat.nayeem@gmail.com</p>
          <p>arafat.nayeem@gmail.com</p>
          <p>arafat.nayeem@gmail.com</p>
          <p>arafat.nayeem@gmail.com</p>
        </div>
        <div className={'col-2'}>
          <h3>NO. SLOTS</h3>
          <p className={'ms-3'}>4</p>
          <p className={'ms-3'}>4</p>
          <p className={'ms-3'}>4</p>
          <p className={'ms-3'}>4</p>
          <p className={'ms-3'}>4</p>
          <p className={'ms-3'}>4</p>
          <p className={'ms-3'}>4</p>
          <p className={'ms-3'}>4</p>
          <p className={'ms-3'}>4</p>
          <p className={'ms-3'}>4</p>
        </div>
      </div>
    </div>
  )
}

export default StudentList