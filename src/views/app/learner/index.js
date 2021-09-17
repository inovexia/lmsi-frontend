import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { UserRole } from 'src/constants/defaultValues'
import { isUnAuthorized } from 'src/helpers/Utils'

const LearnerDashboard = React.lazy(() => import('./dashboard'))

const LearnerView = ({ match }) => {
  const {
    appStore: { user },
  } = useContext(AppContext)

  return (
    <Switch>
      {isUnAuthorized(user.role_id, UserRole.learner) && (
        <Redirect exact from={`${match.url}/`} to={`/unauthorized`} />
      )}
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
      <Route
        path={`${match.url}/dashboard`}
        render={props => <LearnerDashboard {...props} />}
      />
      <Redirect to="/error" message={'page not exist'} />
    </Switch>
  )
}

export default LearnerView
