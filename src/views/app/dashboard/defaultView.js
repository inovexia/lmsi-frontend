import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { Button } from 'src/components/Buttons'
import { apiRequest } from 'src/helpers/Utils'
import { TITLE_UPDATE, UNEXPECTED_ERROR } from 'src/constants/actions'

const Dashboard = ({ match }) => {
  const pageHeading = 'Dashboard',
    {
      appStore: { user, apiURL },
      updateAppStore
    } = useContext(AppContext),
    [verifyingEmail, setVerifyingEmail] = useState(false),
    [message, setMessage] = useState(null),
    doEmailVerify = async () => {
      try {
        setVerifyingEmail(true)
        const reqData = {
            email: user.email,
            checksum: user.checksum
          },
          emailVerifyReq = await apiRequest(
            'POST',
            `${apiURL}/member/link/verify/email`,
            user.accessToken,
            reqData
          )
        if (emailVerifyReq.ok) {
          const data = await emailVerifyReq.json()
          false && console.log(data)
          setMessage(data.message)
        } else {
          throw new Error('Unexpected Error')
        }
      } catch (error) {
        updateAppStore({
          type: UNEXPECTED_ERROR,
          payload: {
            error: {
              code: UNEXPECTED_ERROR,
              color: 'warning',
              message: error.message
            }
          }
        })
      } finally {
        setVerifyingEmail(false)
      }
    }

  useEffect(() => {
    updateAppStore({
      type: TITLE_UPDATE,
      payload: {
        pageHeading
      }
    })
  }, [updateAppStore])

  return (
    <div className={'dashboard'}>
      <div className={'welcome-card'}>
        <div className={'welcome-card-content'}>
          <h2>{`Welcome, ${user.first_name}`}</h2>
          <p>
            {
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
            }
          </p>
        </div>
      </div>

      <div className={'add-info row'}>
        {!user.is_email_verified && (
          <div className={'info-card col-6'}>
            <div className={'info-card-content'}>
              <h2>{'Verify Email Address'}</h2>
              <p>
                {message
                  ? message
                  : `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit`}
              </p>

              <Button
                variant={'app'}
                disabled={verifyingEmail}
                onClick={() => doEmailVerify()}
              >
                {'Verify Email Address'}
              </Button>
            </div>
          </div>
        )}

        <div className={'info-card col-6'}>
          <div className={'info-card-content'}>
            <h2>{'About Yourself'}</h2>
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
            to={`create-institute`}
          >
            Create Institute
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
