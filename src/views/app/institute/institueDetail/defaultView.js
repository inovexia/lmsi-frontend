import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import addEvent from 'src/assets/images/addEvent.png'
import { AppContext } from 'src/AppContext'
import { TITLE_UPDATE } from 'src/constants/actions'

const InstituteDetail = () => {
  const pageHeading = 'Institute Name',
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
    <div className={'institute'}>
      <div className={'institute-header'}>
        <div className={'user'}></div>
      </div>

      <div className={'institute-detail'}>
        <p>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea
          quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore
          cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt
          sint deserunt ut voluptate aute id deserunt nisi.
        </p>
      </div>

      <div className={'d-flex justify-content-center mb-3'}>
        <img
          src={addEvent}
          alt={'Add Event Calendar'}
          className={'icon mb-3'}
        />
      </div>

      <div className={'d-flex justify-content-center pb-5'}>
        <Link className={'btn btn-app text-white'} to={`/app/dashboard`}>
          Create Institute
        </Link>
      </div>
    </div>
  )
}

export default InstituteDetail
