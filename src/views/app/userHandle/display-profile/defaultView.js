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
            <div>
              <h3 className={'about-me heading'}>About me</h3>
              <p className={'aboutme-content content-heading'}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.{' '}
              </p>
            </div>
            <div className={'container d-flex justify-content-between'}>
              <h3 className={'dob heading '}>Date of Birth</h3>
              <h3 className={'dob-date content-heading'}>01/01/1990</h3>
            </div>
          </div>
          <div className={'address-information'}>
            <div className={'d-flex justify-content-between header'}>
              <h3>Address</h3>
              <Icon icon={'pencil'} className={'icon'} />
            </div>
            <div className="address-attributes">
              <div className={'d-flex justify-content-start'}>
                <h6>Country:</h6>
                <span>Canada</span>
                <h6>State:</h6>
                <span>Toronto</span>
                <h6>City:</h6>
                <span>Vancouver</span>
              </div>
              <div className={'d-flex justify-space-around'}>
                <h6>Zip Code:</h6>
                <span> 283206</span>
                <h6>Address type:</h6>
                <span>Work</span>
              </div>
              <p>
                2972 estheimer Rd. Santa Ana, Illinois 85486 sector N1 aliganj
                lucknow
              </p>
            </div>
          </div>
        </div>
        <div className={'col-7'}>
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
