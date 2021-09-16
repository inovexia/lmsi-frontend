import React, { useContext, useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AuthLayout from 'src/layout/auth'

import { AppContext } from 'src/AppContext'
const ViewSignIn = React.lazy(() => import('./sign-in'))
const ViewSignUp = React.lazy(() => import('./sign-up'))
const ForgotPassword = React.lazy(() => import('./forgot-password'))
const SetPassword = React.lazy(() => import('./set-password'))

const ViewAuth = ({ match }) => {
  const [sendPath, sendTo] = useState(null),
    {
      appStore: { appRoot, user },
    } = useContext(AppContext)

  useEffect(() => {
    if (user) {
      sendTo(appRoot)
    }
  }, [appRoot, user])

  return sendPath ? (
    <Redirect to={sendPath} />
  ) : (
    <AuthLayout>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/sign-in`} />
        <Route
          path={`${match.url}/sign-in`}
          render={props => <ViewSignIn {...props} />}
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
  )
}

export default ViewAuth
