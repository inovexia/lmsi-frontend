import React from 'react'
import { Button } from 'src/components/Buttons'
import { Icon, GoogleIcon } from 'src/components/Icon'

const SignIn = () => {
  return (
    <section className={'signIn-card'}>
      <div className={'card-heading'}>
        <h5>Log in to your account</h5>
      </div>
      <form action="">
        <div className={'form-group'}>
          <input className={'form-data'} type="email" />
        </div>
        <div className={'form-group'}>
          <input className={'form-data'} type="password" />
        </div>
        <div className={'form-group'}>
          <Button type="submit" variant="primary" label="Log in" />
        </div>
      </form>
      <h6 className={'text-center my-3'}>
        <small>OR</small>
      </h6>
      <div className={'social-login'}>
        <Button
          className={'d-flex w-100 border'}
          variant="light"
          disabled={true}
        >
          <GoogleIcon className={'my-auto'} />
          <span className={'flex-grow-1 text-center'}>
            Continue With Google
          </span>
        </Button>
        <Button
          className={'d-flex w-100 border'}
          variant="light"
          disabled={true}
        >
          <Icon icon={'facebook'} className={'my-auto'} />
          <span className={'flex-grow-1 text-center'}>
            Continue With Facebook
          </span>
        </Button>
        <Button
          className={'d-flex w-100 border'}
          variant="light"
          disabled={true}
        >
          <Icon icon={'linkedin'} className={'my-auto'} />
          <span className={'flex-grow-1 text-center'}>
            Continue With LinkedIn
          </span>
        </Button>
        <Button
          className={'d-flex w-100 border'}
          variant="light"
          disabled={true}
        >
          <Icon icon={'twitter'} className={'my-auto'} />
          <span className={'flex-grow-1 text-center'}>
            Continue With Twitter
          </span>
        </Button>
      </div>
    </section>
  )
}

export default SignIn
