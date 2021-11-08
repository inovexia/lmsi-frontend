import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const SlotList = React.lazy(() => import('./defaultView'))

const StudentView = ({ match }) => {
  return (
    <Switch>
      <Route
        exact
        path={`${match.url}/`}
        render={props => <SlotList {...props} />}
      />

      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default StudentView
