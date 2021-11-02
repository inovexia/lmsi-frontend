import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const InstituteDetail = React.lazy(() => import('./defaultView'))

const InstituteDetailView = ({ match }) => {
  return (
    <Switch>
      <Route
        exact
        path={`${match.url}/`}
        render={props => <InstituteDetail {...props} />}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default InstituteDetailView
