import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Dashboard = React.lazy(() => import('./defaultView'))
const AddInfo = React.lazy(() => import('./addInfo'))
const DefaultDashboard = React.lazy(() => import('./defaultDashboard'))

const DashboardView = ({ match }) => {
  return (
    <Switch>
      <Route
        exact
        path={`${match.url}/`}
        render={props => <Dashboard {...props} />}
      />
      <Route
        path={`${match.url}/add-info`}
        render={props => <AddInfo {...props} />}
      />
      <Route
        path={`${match.url}/default-dashboard`}
        render={props => <DefaultDashboard {...props} />}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default DashboardView
