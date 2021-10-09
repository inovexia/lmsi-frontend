import React from 'react'

// import { appRoot } from 'constants/defaultValues';
import { encrypt, decrypt } from 'src/helpers/Utils'
import { useWindowSize } from 'src/hooks'
import { UserRole } from 'src/constants/defaultValues'
import comingSoon from 'src/assets/images/coming-soon.svg'

const ViewHome = () => {
  const encrypted = encrypt(UserRole),
    decrypted = decrypt(encrypted),
    { width, height } = useWindowSize()
  false && console.log(encrypted, decrypted, width, height)

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
