import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import AppLayout from 'src/layout/app'

const UserHandleView = React.lazy(() => import('./userHandle'))
const DashboardView = React.lazy(() => import('./dashboard'))
const StudentView = React.lazy(() => import('./students'))
const InstituteView = React.lazy(() => import('./institute'))
const SlotView = React.lazy(() => import('./slots'))

const App = ({ match }) => {
  const {
      appStore: { user },
    } = useContext(AppContext),
    redirectTo = user.user_name ? user.user_name : user.serial_id
  // console.log(user)

  return (
    <AppLayout>
      <Switch>
        <Redirect
          exact
          from={`${match.url}/`}
          to={`${match.url}/${redirectTo}`}
        />
        <Route
          path={`${match.url}/dashboard`}
          render={props => {
            return <DashboardView {...props} />
          }}
        />
        <Route
          path={`${match.url}/students`}
          render={props => {
            return <StudentView {...props} />
          }}
        />
        <Route
          path={`${match.url}/create-institute`}
          render={props => {
            return <InstituteView {...props} />
          }}
        />
        <Route
          path={`${match.url}/slots`}
          render={props => {
            return <SlotView {...props} />
          }}
        />
        <Route
          path={`${match.url}/:userHandle`}
          render={props => {
            return <UserHandleView {...props} />
          }}
        />
        <Redirect to={'/error'} />
      </Switch>
    </AppLayout>
  )
}

export default App
