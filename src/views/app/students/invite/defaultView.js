import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Form, InputGroup, FloatingLabel } from 'react-bootstrap'
import moment from 'moment'

import { Button } from 'src/components/Buttons'
import { inviteBody /* countriesList */ } from 'src/constants/defaultValues'
import { Icon } from 'src/components/Icon'
import { AppContext } from 'src/AppContext'
import { apiRequest } from 'src/helpers/Utils'
import { TITLE_UPDATE, UNEXPECTED_ERROR } from 'src/constants/actions'

const Invite = () => {
  const pageHeading = 'Invite Students',
    {
      appStore: { user, apiURL },
      updateAppStore
    } = useContext(AppContext),
    [mobileNo, setMobileNo] = useState(''),
    [emailId, setEmailId] = useState(''),
    [invites, setInvites] = useState([]),
    [inviting, setInviting] = useState(false),
    sendInvite = async event => {
      try {
        event.preventDefault()
        setInviting(true)
        const inviteApi = mobileNo !== '' ? 'sms' : 'email',
          reInvite = invites.find(({ mobile, email }) => {
            if (mobileNo !== '') {
              return mobile === `+${mobileNo}`
            } else {
              return email === emailId
            }
          }),
          inviteType = reInvite ? 'reinvite' : 'invite',
          reqMethod = reInvite ? 'PUT' : 'POST',
          apiPath = `/instructor/members/${inviteType}-by/${inviteApi}${
            reInvite ? `/${reInvite.invite_id}` : ''
          }`,
          reqBody = {
            email: emailId !== '' ? emailId : undefined,
            mobile: mobileNo !== '' ? `+${mobileNo}` : undefined,
            invitation_body: inviteBody
          }
        const inviteRequest = await apiRequest(
          reqMethod,
          `${apiURL}${apiPath}`,
          user.accessToken,
          reqBody
        )
        if (inviteRequest.ok) {
          const data = await inviteRequest.json()
          !false && console.log(data)
          if (data.API_STATUS) {
            setMobileNo('')
            setEmailId('')
            fetchInvites()
          } else {
            throw new Error('Bad Request')
          }
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
        setInviting(false)
      }
    },
    fetchInvites = useCallback(async () => {
      try {
        const inviteFetchReq = await apiRequest(
          'GET',
          `${apiURL}/instructor/members/invite/list`,
          user.accessToken
        )
        if (inviteFetchReq.ok) {
          const data = await inviteFetchReq.json()
          false && console.log(data)
          if (data.API_STATUS) {
            setInvites(data.response)
          } else {
            throw new Error('No User Invited Yet')
          }
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
      }
    }, [apiURL, updateAppStore, user])

  useEffect(() => {
    fetchInvites()
    updateAppStore({
      type: TITLE_UPDATE,
      payload: {
        pageHeading
      }
    })
  }, [fetchInvites, updateAppStore])

  return (
    <div className={'invite'}>
      <div className={'img'}></div>
      <div className={'card invite-detail'}>
        <div className={'card-body p-4 m-1'}>
          <Form onSubmit={event => sendInvite(event)} autoComplete={'false'}>
            <div className={'row gx-0 mb-4'}>
              {/* <input type="text" placeholder="Mobile No." />
                        <span>Or</span>
                        <input type="email" placeholder="Email" /> */}
              <Form.Group className={'col-md'}>
                <InputGroup>
                  {/* <Form.Select
                    aria-label={'Select Country'}
                    defaultValue={'+91'}
                    style={{
                      paddingRight: '0.75rem'
                    }}
                  >
                    {Object.keys(countriesList).map(country => {
                      return (
                        <option
                          key={country}
                          value={`+${countriesList[country]}`}
                        >
                          {`${country} +${countriesList[country]}`}
                        </option>
                      )
                    })}
                  </Form.Select> */}
                  <InputGroup.Text>+</InputGroup.Text>
                  <FloatingLabel
                    className={'flex-grow-1'}
                    controlId={'mobile-invite'}
                    label={'Mobile'}
                    // style={{ maxWidth: '160px' }}
                  >
                    <Form.Control
                      autoComplete={'mobile-invite'}
                      type={'text'}
                      placeholder={'Enter Mobile No'}
                      required={emailId === ''}
                      disabled={emailId !== ''}
                      value={mobileNo}
                      onChange={({ target: { value } }) => {
                        // ? Use regex "/[^0-9]/g" or "/\D/gm" to allow only number
                        setMobileNo(value.replace(/\D/gm, ''))
                      }}
                      maxLength={15}
                    />
                  </FloatingLabel>
                </InputGroup>
              </Form.Group>
              <div className="col-md-1 align-self-center text-center text-uppercase">
                Or
              </div>
              <Form.Group className={'col-md'} controlId={'email-invite'}>
                <FloatingLabel controlId={'email-invite'} label={'Email'}>
                  <Form.Control
                    autoComplete={'email-invite'}
                    type={'email'}
                    placeholder={'Enter Email Id'}
                    required={mobileNo === ''}
                    disabled={mobileNo !== ''}
                    value={emailId}
                    onChange={({ target: { value } }) => {
                      setEmailId(value)
                    }}
                  />
                </FloatingLabel>
              </Form.Group>
            </div>
            <div className={'row gx-0 mb-4'}>
              <div className={'col-md-12 text-center'}>
                <Button
                  variant={'app'}
                  type={'submit'}
                  className={'btn-lg'}
                  disabled={inviting}
                >
                  Send Invite
                </Button>
              </div>
            </div>
          </Form>
          <div className={'row gx-0 mb-4'}>
            <h3>Your Invite Link</h3>
            <Form.Group className={'col-md-6'} controlId={'invite-link'}>
              <InputGroup>
                <Form.Control
                  placeholder={'Invite Link'}
                  aria-label={"Recipient's username"}
                  aria-describedby={'basic-addon2'}
                  className={'py-3'}
                  readOnly={true}
                />
                <Button variant={'outline-secondary'} className={'px-3'}>
                  <Icon icon={'copy'} />
                </Button>
              </InputGroup>
            </Form.Group>
          </div>
          <div className={'row gx-0'}>
            <div className={'col-md-12'}>
              <div className={'table-responsive'}>
                <table className={'table table-borderless mb-0'}>
                  <thead>
                    <tr>
                      <th className={'text-start'}>Type [Email/Mobile]</th>
                      <th className={'text-center'}>Date</th>
                      <th className={'text-center'}>Invitations Sent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invites.map(
                      ({
                        updation_on,
                        email,
                        invite_count,
                        invite_id,
                        invite_type,
                        mobile
                      }) => {
                        return (
                          <tr key={invite_id}>
                            <td className={'text-start'}>
                              {invite_type === 'sms' ? mobile : email}
                            </td>
                            <td className={'text-center'}>
                              {moment
                                .unix(updation_on)
                                .format('Do MMM YYYY hh:ss a')}
                            </td>
                            <td className={'text-center'}>{invite_count}</td>
                          </tr>
                        )
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invite
