import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Icon } from 'src/components/Icon'
import { AppContext } from 'src/AppContext'
import { TITLE_UPDATE } from 'src/constants/actions'
import { apiRequest } from 'src/helpers/Utils'

const Profile = ({ match }) => {
  const [info, setInfo] = useState({})
  const pageHeading = 'My Profile',
    {
      appStore: { user, apiURL },
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

  return (
    <div className={'display-profile'}>
      <div className={'profile-header mx-n3'}></div>
      <div className={'profile-content row py-3'}>
        <div className={'profile-info col-12 col-md-6'}>
          <div className={'d-flex'}>
            <div className={'profile-pic'}>
              <div className={'img'}>
                <Icon icon={'pencil'} className={'icon'} />
              </div>
            </div>
            <div className={'profile-data my-auto'}>
              <div className={'d-flex'}>
                <h5
                  style={{ textTransform: 'capitalize' }}
                >{`${user.first_name} ${user.last_name}`}</h5>
                <Icon icon={'pencil'} className={'icon'} />
              </div>
              <p>Web Designer</p>
              <p>B.E Computer Science</p>
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
      <div className={'tab-layout d-flex'}>
        <Link to={`${match.url}`} className={'me-3 active'}>
          Home
        </Link>
        <Link to={`${match.url}/my-institute`} className={'me-3'}>
          My Institutes
        </Link>
        <Link to={`${match.url}/about`}>About</Link>
      </div>
      <div className={'profile-details row'}>
        <div className={'col-5 p-0 pe-3'}>
          <div className={'personal-information'}>
            <div className={'d-flex justify-content-between header'}>
              <h3>Personal Information</h3>
              <Icon icon={'pencil'} className={'icon'} />
            </div>
            <div>
              <h3 className={'about-me heading'}>About me</h3>
              <p className={'aboutme-content content-heading'}>
                {info.about_me}
              </p>
            </div>
            <div className={'container d-flex justify-content-between py-2'}>
              <h3 className={'dob heading '}>Date of Birth</h3>
              <h3 className={'dob-date content-heading'}>{info.datebirth}</h3>
            </div>
          </div>
          <div className={'address-information'}>
            <div className={'d-flex justify-content-between header'}>
              <h3>Address</h3>
              <Icon icon={'pencil'} className={'icon'} />
            </div>
            <div className="address-attributes">
              <p>
                <strong>Country:</strong>
                <span>Canada </span>
                <strong>State:</strong>
                <span>Toronto </span>
                <strong>City:</strong>
                <span>Vancouver </span>
              </p>
              <p>
                <strong>Zip Code:</strong>
                <span> 283206 </span>
                <strong>Address type:</strong>
                <span>Work </span>
              </p>
              <p>
                2972 estheimer Rd. Santa Ana, Illinois 85486 sector N1 aliganj
                lucknow
              </p>
            </div>
          </div>
        </div>
        <div className={'col-7 p-0'}>
          <div className={'institute-information'}>
            <div className={'d-flex justify-content-between header'}>
              <h3>Institute Details</h3>
              <Icon icon={'pencil'} className={'icon'} />
            </div>
            <div className={'institute-name'}>
              <h3>Institute Name</h3>
              <h3>Institute Handle Name</h3>
              <div className={'institute-description'}>
                <h3>About Institute</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.{' '}
                </p>
              </div>
              <div className={'d-flex justify-content-between'}>
                <div>
                  <h3>Institute Status</h3>
                </div>
                <div className={'status d-flex'}>
                  <p>Private</p>
                  <Icon icon={'pencil'} className={'icon'} />
                  <p>Public</p>
                </div>
              </div>
            </div>
          </div>
          <div className={'expertise-information'}>
            <div className={'d-flex justify-content-between header'}>
              <h3>Expertise</h3>
              <Icon icon={'pencil'} className={'icon'} />
            </div>
            <div className={'d-flex justify-content-around'}>
              <p>Maths</p>
              <p>Physics</p>
              <p>Chemistry</p>
              <p>Chemistry</p>
              <p>Chemistry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
