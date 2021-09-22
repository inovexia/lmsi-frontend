import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { UserRole } from 'src/constants/defaultValues'
import { isUnAuthorized } from 'src/helpers/Utils'

const InstituteInfo = React.lazy(() => import('./defaultView'))
const CreateRoute = React.lazy(() => import('./create'))
const EditRoute = React.lazy(() => import('./edit'))

const InstituteRoute = ({ match }) => {
  const {
    appStore: { user },
  } = useContext(AppContext)

  return (
    <Switch>
      {isUnAuthorized(user.role_id, UserRole.instructor) && (
        <Redirect from={`${match.url}/`} to={`/unauthorized`} />
      )}
      <Route
        path={`${match.url}/create`}
        render={props => <CreateRoute {...props} />}
      />
      <Route
        path={`${match.url}/edit`}
        render={props => <EditRoute {...props} />}
      />
      <Route
        path={`${match.url}/`}
        render={props => <InstituteInfo {...props} />}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default InstituteRoute
