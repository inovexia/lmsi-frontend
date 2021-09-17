import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { UserRole } from 'src/constants/defaultValues'
import { isUnAuthorized } from 'src/helpers/Utils'

const Dashboard = React.lazy(() => import('./dashboard/Dashboard'))
const Users = React.lazy(() => import('./user/Users.js'))

const InstructorView = ({ match }) => {
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
        render={props => <Dashboard {...props} />}
      />
      <Route
        exact
        path={`${match.url}/users`}
        render={props => <Users {...props} />}
      />
      <Redirect to="/error" message={'page not exist'} />
    </Switch>
  )
}

export default InstructorView
