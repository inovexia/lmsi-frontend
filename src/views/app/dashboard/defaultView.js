import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from 'src/AppContext'

const Dashboard = ({ match }) => {
  const {
    appStore: { user },
  } = useContext(AppContext)
  return (
    <div className={'dashboard'}>
      <div className={'welcome-card'}>
        <div className={'welcome-card-content'}>
          <h2>Welcome, {`${user.first_name}`}</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>

      <div className={'add-info row'}>
        <div className={'info-card col-6'}>
          <div className={'info-card-content'}>
            <h2>Verify Email Address</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. <br />
              <br /> Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit mollit
            </p>

            <Link className={'btn btn-app text-white'} to={`#`}>
              Verify Email Address
            </Link>
          </div>
        </div>

        <div className={'info-card col-6'}>
          <div className={'info-card-content'}>
            <h2>About Yourself</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
              <br />
              <br /> Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit mollit
            </p>

            <Link
              className={'btn btn-app text-white'}
              to={`${match.url}/add-info`}
            >
              Add Information
            </Link>
          </div>
        </div>
      </div>

      <div className={'welcome-card'}>
        <div className={'welcome-card-content'}>
          <h2>Create Your Institute</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <Link
            style={{ float: 'right', margin: '-40px 40px 0 0' }}
            className={'btn btn-app text-white'}
            to={`#`}
          >
            Create Institute
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
