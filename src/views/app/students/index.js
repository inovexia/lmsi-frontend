import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const StudentList = React.lazy(() => import('./defaultView'))
const Invite = React.lazy(() => import('./invite'))

const StudentView = ({ match }) => {
  return (
    <Switch>
      <Route
        exact
        path={`${match.url}/`}
        render={props => <StudentList {...props} />}
      />
      <Route
        path={`${match.url}/invite`}
        render={props => <Invite {...props} />}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default StudentView
