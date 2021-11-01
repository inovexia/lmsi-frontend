import React from 'react'

import { Icon } from 'src/components/Icon'

const Profile = ({ match }) => {
  false && console.log(match)
  return (
    <div className={'display-profile'}>
      <div className={'profile-header'}>
        <Icon icon={'pencil'} className={'icon'} />
      </div>
      <div className={'profile-content row'}>
        <div className={'profile-info col-6'}>
          <div className={'d-flex'}>
            <div className={'profile-pic'}>
              <div className={'img'}>
                <Icon icon={'pencil'} className={'icon'} />
              </div>
            </div>
            <div className={'profile-data my-auto'}>
              <div className={'d-flex'}>
                <h5>Haris Ahmed</h5>
                <Icon icon={'pencil'} className={'icon'} />
              </div>
              <p>Web Designer</p>
              <p>B.E Computer Science</p>
            </div>
          </div>
        </div>
        <div className={'profile-contacts col-6'}>
          <div className={'d-flex justify-content-between'}>
            <p>
              <Icon icon={'envelope-closed'} className={'icon'} />{' '}
              Haris.ahmed@example.com
            </p>
            <p>
              <Icon icon={'phone'} className={'icon'} /> +447700960160
            </p>
          </div>

          <div className={'d-flex justify-content-end social-icons'}>
            <Icon icon={'linkedin'} className={'icon me-2'} />
            <Icon icon={'facebook'} className={'icon me-2'} />
            <Icon icon={'instagram'} className={'icon'} />
          </div>
        </div>
      </div>

      <div className={'profile-details row'}>
        <div className={'col-5'}>
          <div className={'personal-information'}>
            <div className={'d-flex justify-content-between header'}>
              <h3>Personal Information</h3>
              <Icon icon={'pencil'} className={'icon'} />
            </div>
          </div>
        </div>
        <div className={'col-7'}></div>
      </div>
    </div>
  )
}

export default Profile
