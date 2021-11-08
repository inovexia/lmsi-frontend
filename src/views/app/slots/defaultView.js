import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import addEvent from 'src/assets/images/addEvent.png'
import { AppContext } from 'src/AppContext'
import { TITLE_UPDATE } from 'src/constants/actions'

const Slot = ({ match }) => {
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
    <div className={'slots'}>
      <h3>CreateSlot</h3>
      <p>
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
        cillum dolor. Voluptate exercitation incididunt aliquip deserunt
        reprehenderit elit laborum.
      </p>
      <img src={addEvent} alt={'Add Event Calendar'} className={'icon mb-3'} />
      <Link
        className={'btn btn-app text-white'}
        to={`${match.url}/create-slot`}
      >
        Create Slot
      </Link>
    </div>
  )
}

export default Slot
