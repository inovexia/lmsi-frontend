import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import AppLayout from 'src/layout/app'

const UserHandleView = React.lazy(() => import('./userHandle'))

const App = ({ match }) => {
  const {
      appStore: { user },
    } = useContext(AppContext),
    redirectTo = user.user_name ? user.user_name : user.serial_id

  return (
    <AppLayout>
      <Switch>
        <Redirect
          exact
          from={`${match.url}/`}
          to={`${match.url}/${redirectTo}`}
        />
        <Route
          path={`${match.url}/`}
          render={props => <UserHandleView {...props} />}
        />
        <Redirect to={'/error'} />
      </Switch>
    </AppLayout>
  )
}

export default App
