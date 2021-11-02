import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Institute = React.lazy(() => import('./defaultView'))
const InstituteDetailView = React.lazy(() => import('./institueDetail'))

const InstituteView = ({ match }) => {
  return (
    <Switch>
      <Route
        exact
        path={`${match.url}/`}
        render={props => <Institute {...props} />}
      />
      <Route
        path={`${match.url}/institute-detail`}
        render={props => <InstituteDetailView {...props} />}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default InstituteView
