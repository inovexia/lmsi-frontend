import React, { useCallback, useContext, useEffect, useState } from 'react'

import { AppContext } from 'src/AppContext'
import { apiRequest, decrypt, encrypt } from 'src/helpers/Utils'
import { useDebounce, useLocalStorage } from 'src/hooks'
import { userStorageKey } from 'src/constants/defaultValues'
import { RELOAD_USER } from 'src/constants/actions'

const EmailVerification = ({
  history,
  match: {
    params: { verificationId, token }
  }
}) => {
  const {
      appStore: { apiURL, appRoot, user: loggedInUser },
      updateAppStore
    } = useContext(AppContext),
    [appUser, setAppUser] = useLocalStorage(userStorageKey, null),
    [reqCompleted, setReqCompleted] = useState(false),
    [message, setMessage] = useState(null),
    [status, setStatus] = useState(null),
    doEmailVerification = useCallback(async () => {
      try {
        if (reqCompleted) {
          return
        }
        const emailVerifyReq = await apiRequest(
          'GET',
          `${apiURL}/member/verify-email/${verificationId}/${token}`
        )
        if (emailVerifyReq.ok) {
          const data = await emailVerifyReq.json()
          if (data.API_STATUS) {
            if (loggedInUser) {
              delete loggedInUser.checksum
              loggedInUser.is_email_verified = true
              setAppUser(encrypt(loggedInUser))
            }
            setStatus('success')
            setMessage(data.message)
          } else {
            setStatus('danger')
            setMessage(data.message ? data.message : 'Something Went Wrong')
          }
        } else {
          throw new Error('Unexpected Error')
        }
      } catch (error) {
        console.error(error)
      } finally {
        setReqCompleted(true)
        history.push(loggedInUser ? `${appRoot}/dashboard` : `/auth/sign-in`)
      }
    }, [
      apiURL,
      appRoot,
      history,
      loggedInUser,
      reqCompleted,
      setAppUser,
      token,
      verificationId
    ])

  useDebounce(
    () => {
      updateAppStore({
        type: RELOAD_USER,
        payload: { user: decrypt(appUser) }
      })
    },
    100,
    [appUser]
  )

  useEffect(() => {
    doEmailVerification()
  }, [doEmailVerification])

  return (
    <>
      <div className={'Info-card'}>
        <div className={'card-heading'}>
          <h5>Email Verification</h5>
          {message ? (
            <div className={`alert alert-${status}`} role="alert">
              <h3 className={'text-capitalize mb-0'}>{message}</h3>
            </div>
          ) : (
            <>
              <p>Please Wait!</p>
              <div className={'my-4'}>
                <div
                  className={'spinner-border text-app'}
                  role={'status'}
                  style={{ width: '4rem', height: '4rem' }}
                >
                  <span className={'visually-hidden'}>Loading...</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default EmailVerification
