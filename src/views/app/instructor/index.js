import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { UserRole } from 'src/constants/defaultValues'
import { isUnAuthorized } from 'src/helpers/Utils'

const Dashboard = React.lazy(() => import('./dashboard/Dashboard'))
const Users = React.lazy(() => import('./user/Users.js'))
const InviteUsers = React.lazy(() => import('./user/InviteUser'))
const Slots = React.lazy(() => import('./slots/SlotList.js'))
const InstituteView = React.lazy(() => import('./institute'))

const InstructorView = ({ match }) => {
  const {
    appStore: { user },
  } = useContext(AppContext)

  return (
    <Switch>
      {isUnAuthorized(user.role_id, UserRole.instructor) && (
        <Redirect from={`${match.url}/`} to={`/unauthorized`} />
      )}
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
      <Route
        exact
        path={`${match.url}/dashboard`}
        render={props => <Dashboard {...props} />}
      />
      <Route
        exact
        path={`${match.url}/institute`}
        render={props => <InstituteView {...props} />}
      />
      <Route
        exact
        path={`${match.url}/users`}
        render={props => <Users {...props} />}
      />
      <Route
        exact
        path={`${match.url}/users/invite`}
        render={props => <InviteUsers {...props} />}
      />
      <Route
        exact
        path={`${match.url}/slots`}
        render={props => <Slots {...props} />}
      />

      <Redirect to="/error" message={'page not exist'} />
    </Switch>
  )
}

export default InstructorView
