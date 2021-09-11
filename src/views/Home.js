import React from 'react'

// import { appRoot } from 'constants/defaultValues';
import comingSoon from 'src/assets/images/coming-soon.svg'

const ViewHome = () => {
  return (
    <div className={'d-flex justify-content-center vh-100'}>
      <img
        src={comingSoon}
        alt={'coming-soon'}
        className={'w-100 mh-100'}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  )
}

export default ViewHome
