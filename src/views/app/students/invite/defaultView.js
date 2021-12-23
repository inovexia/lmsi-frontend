import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Form, InputGroup, FloatingLabel } from 'react-bootstrap'

import { Button } from 'src/components/Buttons'
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
    [invites, setInvites] = useState([]),
    fetchInvites = useCallback(async () => {
      try {
        const inviteRequest = await apiRequest(
          'GET',
          `${apiURL}/instructor/members/invite/list`,
          user.accessToken
        )
        if (inviteRequest.ok) {
          const data = await inviteRequest.json()
          false && console.log(data)
          if (data.API_STATUS) {
            setInvites(data.response)
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
          <div className={'row gx-0 mb-4'}>
            {/* <input type="text" placeholder="Mobile No." />
                  <span>Or</span>
                  <input type="email" placeholder="Email" /> */}
            <Form.Group className={'col-md'} controlId={'mobile'}>
              <FloatingLabel controlId={'mobile'} label={'Mobile'}>
                <Form.Control type={'text'} placeholder={'name@example.com'} />
              </FloatingLabel>
            </Form.Group>
            <div className="col-md-1 align-self-center text-center">Or</div>
            <Form.Group className={'col-md'} controlId={'email'}>
              <FloatingLabel controlId={'email'} label={'Email'}>
                <Form.Control type={'email'} placeholder={'name@example.com'} />
              </FloatingLabel>
            </Form.Group>
          </div>
          <div className={'row gx-0 mb-4'}>
            <div className={'col-md-12 text-center'}>
              <Button variant={'app'} type={'submit'} className={'btn-lg'}>
                Send Invite
              </Button>
            </div>
          </div>
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
                      <th className={'text-start'}>Type</th>
                      <th className={'text-center'}>Date</th>
                      <th className={'text-center'}>Invitations Sent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invites.map(
                      ({
                        creation_on,
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
                            <td className={'text-center'}>{creation_on}</td>
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
