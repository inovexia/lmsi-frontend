import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AuthLayout from '../../layout/auth'

const SignIn = React.lazy(() => import('./sign-in'))
const ViewSignUp = React.lazy(() => import('./sign-up'))
const ForgotPassword = React.lazy(() => import('./forgot-password'))
const SetPassword = React.lazy(() => import('./set-password'))

const ViewAuth = ({ match }) => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <AuthLayout>
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/sign-in`} />
          <Route
            path={`${match.url}/sign-in`}
            render={props => <SignIn {...props} />}
          />
          <Route
            path={`${match.url}/sign-up`}
            render={props => <ViewSignUp {...props} />}
          />
          <Route
            path={`${match.url}/forgot-password`}
            render={props => <ForgotPassword {...props} />}
          />
          <Route
            path={`${match.url}/set-password/:token`}
            render={props => <SetPassword {...props} />}
          />
          <Redirect to="/error" />
        </Switch>
      </AuthLayout>
    </Suspense>
  )
}

export default ViewAuth
