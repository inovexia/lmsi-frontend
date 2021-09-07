import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AuthLayout from '../../layout/auth'

const SignIn = React.lazy(() => import('./sign-in'))
const SignUp = React.lazy(() => import('./sign-up'))
const ForgotPassword = React.lazy(() => import('./forgot-password'))
const SetPassword = React.lazy(() => import('./set-password'))

const ViewAuth = ({ match }) => {
  return (
    <AuthLayout>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/sign-in`} />
          <Route
            path={`${match.url}/sign-in`}
            render={props => <SignIn {...props} />}
          />
          <Route
            path={`${match.url}/sign-up/:RoleKey/:Method?/:MethodValue?/:InstituteId?`}
            render={props => <SignUp {...props} />}
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
      </Suspense>
    </AuthLayout>
  )
}

export default ViewAuth
