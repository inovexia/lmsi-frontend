import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { ProtectedRoute } from './helpers/authHelper'
import { appRoot, UserRole } from 'src/constants/defaultValues'

const ViewAuth = React.lazy(() => import('./views/auth'))

const ViewApp = React.lazy(() => import('./views/app'))

const ViewHome = React.lazy(() => import('./views/Home'))

const ViewError = React.lazy(() => import('./views/Error'))

const ViewUnauthorized = React.lazy(() => import('./views/Unauthorized'))

const App = () => {
  return (
    <Switch>
      <ProtectedRoute
        path={appRoot}
        component={ViewApp}
        roles={[
          // TODO: Disable super_admin and admin Login until Components will be created
          // UserRole.super_admin,
          // UserRole.admin,
          UserRole.instructor,
          UserRole.learner,
        ]}
      />
      <Route path={'/auth'} render={props => <ViewAuth {...props} />} />
      <Route path={'/error'} exact render={props => <ViewError {...props} />} />
      <Route
        path={'/unauthorized'}
        exact
        render={props => <ViewUnauthorized {...props} />}
      />
      <Route path={'/'} exact render={props => <ViewHome {...props} />} />
      {/* <Redirect exact from="/" to={appRoot} /> */}
      <Redirect to={'/error'} />
    </Switch>
  )
}

export default App
