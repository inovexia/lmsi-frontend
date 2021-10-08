import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { UserRole } from 'src/constants/defaultValues'
import { isUnAuthorized } from 'src/helpers/Utils'

const Admin = React.lazy(() => import('./defaultView'))

const AdminView = ({ match }) => {
  const {
    appStore: { user },
  } = useContext(AppContext)

  return (
    <Switch>
      {(isUnAuthorized(user.role_id, UserRole.admin) ||
        isUnAuthorized(user.role_id, UserRole.super_admin)) && (
        <Redirect exact from={`${match.url}/`} to={`/unauthorized`} />
      )}
      <Route path={`${match.url}/`} render={props => <Admin {...props} />} />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default AdminView
