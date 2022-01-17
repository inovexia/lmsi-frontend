import React, { useContext } from 'react'
import { AppContext } from 'src/AppContext'
import InstructorView from './instructorView'
import LearnerView from './learnerView'
import { UserRole } from 'src/constants/defaultValues'

const Slot = () => {
  const {
    appStore: { user }
  } = useContext(AppContext)

  return (
    (UserRole.instructor === user.role_id && <InstructorView />) ||
    (UserRole.learner === user.role_id && <LearnerView />)
  )
}

export default Slot
