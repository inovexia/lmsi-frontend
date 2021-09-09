import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// import { appRoot } from './constants/defaultValues'

const ViewAuth = React.lazy(() => import('./views/auth'))

// const ViewApp = React.lazy(() => import('./views/app'))

const ViewHome = React.lazy(() => import('./views/Home'))

const ViewError = React.lazy(() => import('./views/Error'))

const ViewUnauthorized = React.lazy(() => import('./views/Unauthorized'))

const App = () => {
  return (
    <Suspense fallback={<div className={'loading'} />}>
      <Switch>
        <Route path={'/auth'} render={props => <ViewAuth {...props} />} />
        <Route
          path={'/error'}
          exact
          render={props => <ViewError {...props} />}
        />
        <Route
          path={'/unauthorized'}
          exact
          render={props => <ViewUnauthorized {...props} />}
        />
        <Route path={'/'} exact render={props => <ViewHome {...props} />} />
        {/* <Redirect exact from="/" to={appRoot} /> */}
        <Redirect to={'/error'} />
      </Switch>
    </Suspense>
  )
}

export default App
