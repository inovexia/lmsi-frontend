import React from 'react'

const SignIn = () => {
  return (
    <div>
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
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default SignIn
