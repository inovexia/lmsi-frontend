import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { UserRole } from 'src/constants/defaultValues'
import { isUnAuthorized } from 'src/helpers/Utils'

const LearnerDashboard = React.lazy(() => import('./dashboard'))
const LearnerCourses = React.lazy(() => import('./courses'))
const LearnerProfile = React.lazy(() => import('./profile'))

const LearnerView = ({ match }) => {
  const {
    appStore: { user },
  } = useContext(AppContext)

  return (
    <Switch>
      {isUnAuthorized(user.role_id, UserRole.learner) && (
        <Redirect from={`${match.url}/`} to={`/unauthorized`} />
      )}
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
      <Route
        path={`${match.url}/dashboard`}
        render={props => <LearnerDashboard {...props} />}
      />
      <Route
        path={`${match.url}/courses`}
        render={props => <LearnerCourses {...props} />}
      />
      <Route
        path={`${match.url}/profile`}
        render={props => <LearnerProfile {...props} />}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default LearnerView
