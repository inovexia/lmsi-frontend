import React, { useCallback, useContext, useEffect, useState } from 'react'

import { Icon } from 'src/components/Icon'
import { AppContext } from 'src/AppContext'
import { TITLE_UPDATE } from 'src/constants/actions'
import { apiRequest } from 'src/helpers/Utils'
import { UserRole } from 'src/constants/defaultValues'
import { Link } from 'react-router-dom'

const Profile = ({ match }) => {
  const [info, setInfo] = useState({}),
    pageHeading = 'My Profile',
    {
      appStore: { user, apiURL, currentInstitute },
      updateAppStore
    } = useContext(AppContext),
    ProfileInfo = useCallback(async () => {
      const checkRequest = await apiRequest(
        'GET',
        `${apiURL}/instructor/personal/info/view`,
        user.accessToken
      )
      try {
        if (checkRequest.ok) {
          const ProfileInfoData = await checkRequest.json()
          // console.log(ProfileInfoData)
          setInfo(ProfileInfoData.response[0])
        } else {
          throw new Error('Unexpected Error')
        }
      } catch (err) {
        console.log(err)
      }
    }, [apiURL, user.accessToken])

  useEffect(() => {
    updateAppStore({
      type: TITLE_UPDATE,
      payload: {
        pageHeading
      }
    })
  }, [updateAppStore])

  useEffect(() => {
    ProfileInfo()
  }, [ProfileInfo])

  false && console.log(match, user)
  // console.log(UserRole)
  // console.log(currentInstitute)

  return (
    <div className={'display-profile'}>
      <div className={'profile-content row py-3 m-3'}>
        <div className={'profile-info col-12 col-md-6'}>
          <div className={'d-flex'}>
            <div className={'profile-pic'}>
              <div className={'img'} />
            </div>
            <div className={'profile-data my-auto'}>
              <div className={'d-flex'}>
                <h5
                  style={{ textTransform: 'capitalize' }}
                >{`${user.first_name} ${user.last_name}`}</h5>
              </div>
              {UserRole.instructor === user.role_id && (
                <p>{currentInstitute.institute_name}</p>
              )}
              <p>
                {(UserRole.instructor === user.role_id && 'Instructor') ||
                  (UserRole.learner === user.role_id && 'Learner')}
              </p>
              <Link to={`${match.url}/edit`}>
                <button className={'btn btn-outline-app'}>Edit Profile</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={'profile-contacts col-12 col-md-6'}>
          <div className={'d-flex justify-content-between'}>
            <p>
              <Icon icon={'envelope-closed'} className={'icon'} /> {user.email}
            </p>
            <p>
              <Icon icon={'phone'} className={'icon'} /> +447700960160
            </p>
          </div>

          <div className={'d-flex justify-content-end social-icons'}>
            <a target="_blank" href={info.linkedin_link} rel="noreferrer">
              <Icon icon={'linkedin'} className={'icon me-2'} />
            </a>
            <a target="_blank" href={info.facebook_link} rel="noreferrer">
              <Icon icon={'facebook'} className={'icon me-2'} />
            </a>
            <a target="_blank" href={info.twitter_link} rel="noreferrer">
              <Icon icon={'instagram'} className={'icon'} />
            </a>
          </div>
        </div>
      </div>
      <div className={'profile-details row justify-content-center'}>
        <div className={'personal-information col-10'}>
          <div className={'d-flex justify-content-between header'}>
            <h3>Personal Information</h3>
          </div>
          <div>
            <h3 className={'about-me heading'}>About me</h3>
            <p className={'aboutme-content content-heading'}>{info.about_me}</p>
          </div>
          <div className={'container d-flex justify-content-between py-2'}>
            <h3 className={'dob heading '}>Date of Birth</h3>
            <span className={'dob-date content-heading'}>{info.datebirth}</span>
          </div>
          <div className={'container d-flex justify-content-between py-2'}>
            <h3 className={'dob heading '}>Gender</h3>
            <span className={'dob-date content-heading'}>{info.gender}</span>
          </div>
          <div className={'container d-flex justify-content-between py-2'}>
            <h3 className={'dob heading '}>Interest</h3>
            <span className={'dob-date content-heading'}>{info.interest}</span>
          </div>
          <div className={'container d-flex justify-content-between py-2'}>
            <h3 className={'dob heading '}>University</h3>
            <span className={'dob-date content-heading'}>
              {info.university}
            </span>
          </div>
          <div className={'container d-flex justify-content-between py-2'}>
            <h3 className={'dob heading '}>Video Link</h3>
            <span className={'dob-date content-heading'}>
              {info.video_link}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
