import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { getUserPath } from 'src/helpers/Utils'
import AppLayout from 'src/layout/app'

const AdminView = React.lazy(() => import('./admin'))
const InstructorView = React.lazy(() => import('./instructor'))
const LearnerView = React.lazy(() => import('./learner'))

const App = ({ match }) => {
  const {
      appStore: { user },
    } = useContext(AppContext),
    redirectTo = getUserPath(user.role_id)

  return (
    <AppLayout>
      <Switch>
        <Redirect
          exact
          from={`${match.url}/`}
          to={
            redirectTo !== 'unauthorized'
              ? `${match.url}/${redirectTo}`
              : `/unauthorized`
          }
        />
        <Route
          path={`${match.url}/admin`}
          render={props => <AdminView {...props} />}
        />
        <Route
          path={`${match.url}/instructor`}
          render={props => <InstructorView {...props} />}
        />
        <Route
          path={`${match.url}/learner`}
          render={props => <LearnerView {...props} />}
        />
        <Redirect to={'/error'} />
      </Switch>
    </AppLayout>
  )
}

export default App
