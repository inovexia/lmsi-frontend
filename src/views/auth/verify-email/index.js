import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const VerifyEmail = React.lazy(() => import('./defaultView'))

const VerifyEmailRoute = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <VerifyEmail {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default VerifyEmailRoute
