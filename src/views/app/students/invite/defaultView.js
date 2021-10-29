import React from 'react'
import { Link } from 'react-router-dom'

const Invite = () => {
  return (
    <div className={'invite'}>
      <div className={'img'}></div>
      <div className={'invite-detail'}>
        <div className={'invite-input d-flex'}>
          <input type="text" placeholder="Mobile No." />
          <span>Or</span>
          <input type="email" placeholder="Email" />
        </div>

        <div className={'d-flex justify-content-center send-invite'}>
          <Link className={'btn btn-app text-white mx-auto'} to={`#`}>
            Send Invite
          </Link>
        </div>

        <div className={'invite-link'}>
          <h3>Your Invite Link</h3>
          <input type="text" />
        </div>

        <div className={'invite-list row'}>
          <div className={'col-6'}>
            <h3>Type </h3>
            <p>arafat.nayeem@gmail.com</p>
            <p>arafat.nayeem@gmail.com</p>
            <p>arafat.nayeem@gmail.com</p>
            <p>arafat.nayeem@gmail.com</p>
            <p>arafat.nayeem@gmail.com</p>
          </div>
          <div className={'col-3'}>
            <h3>Date</h3>
            <p>27-10-2021</p>
            <p>27-10-2021</p>
            <p>27-10-2021</p>
            <p>27-10-2021</p>
            <p>27-10-2021</p>
          </div>
          <div className={'col-3'}>
            <h3>Invitations Sent</h3>
            <p className={'ms-4'}>5</p>
            <p className={'ms-4'}>4</p>
            <p className={'ms-4'}>5</p>
            <p className={'ms-4'}>6</p>
            <p className={'ms-4'}>3</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invite
