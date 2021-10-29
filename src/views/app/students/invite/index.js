import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Invite = React.lazy(() => import('./defaultView'))

const InviteView = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/`} render={props => <Invite {...props} />} />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default InviteView
