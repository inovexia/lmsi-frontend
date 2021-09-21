import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { UserRole } from 'src/constants/defaultValues'
import { isUnAuthorized } from 'src/helpers/Utils'

const InstituteInfo = React.lazy(() => import('./defaultView'))
// const InstituteEdit = React.lazy(() => import('./edit'))
const InstituteCreate = React.lazy(() => import('./create'))

const InstituteRoute = ({ match }) => {
  console.log(match.url)
  const {
    appStore: { user },
  } = useContext(AppContext)

  return (
    <Switch>
      {isUnAuthorized(user.role_id, UserRole.instructor) && (
        <Redirect from={`${match.url}/`} to={`/unauthorized`} />
      )}
      <Route
        exact
        path={`${match.url}/`}
        render={props => <InstituteInfo {...props} />}
      />
      <Route
        exact
        path={`${match.url}/create`}
        render={props => <InstituteCreate {...props} />}
      />
      {/* <Route
        exact
        path={`${match.url}/edit`}
        render={props => <InstituteEdit {...props} />}
      /> */}

      <Redirect to="/error" message={'page not exist'} />
    </Switch>
  )
}

export default InstituteRoute
