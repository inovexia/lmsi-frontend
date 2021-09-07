import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// import AppLayout from '../../layout/app'

const BlankPage = React.lazy(() => import('./blank-page'))

const App = ({ match }) => {
  return (
    <div className="dashboard-wrapper">
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Redirect
            exact
            from={`${match.url}/`}
            to={`${match.url}/blank-page`}
          />
          <Route
            path={`${match.url}/blank-page`}
            render={props => <BlankPage {...props} />}
          />
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
