import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { UserRole } from 'src/constants/defaultValues'
import { isUnAuthorized } from 'src/helpers/Utils'

const Invite = React.lazy(() => import('./defaultView'))

const InviteRoute = ({ match }) => {
  const {
    appStore: { user },
  } = useContext(AppContext)

  return (
    <Switch>
      {isUnAuthorized(user.role_id, UserRole.instructor) && (
        <Redirect from={`${match.url}/`} to={`/unauthorized`} />
      )}
      <Route path={`${match.url}/`} render={props => <Invite {...props} />} />
      <Redirect to="/error" message={'page not exist'} />
    </Switch>
  )
}

export default InviteRoute
