import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Institutes = React.lazy(() => import('./defaultView'))

const InstitutesView = ({ match }) => {
  console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match = { ...props.match, ...match }
          return <Institutes {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default InstitutesView
