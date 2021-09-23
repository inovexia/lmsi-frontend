import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { UserRole } from 'src/constants/defaultValues'
import { isUnAuthorized } from 'src/helpers/Utils'

const Courses = React.lazy(() => import('./defaultView'))
const Slots = React.lazy(() => import('./slots'))

const LearnerView = ({ match }) => {
  const {
    appStore: { user },
  } = useContext(AppContext)

  return (
    <Switch>
      {isUnAuthorized(user.role_id, UserRole.learner) && (
        <Redirect from={`${match.url}/`} to={`/unauthorized`} />
      )}
      <Route
        exact={true}
        path={`${match.url}/`}
        render={props => <Courses {...props} />}
      />
      <Route
        exact={true}
        path={`${match.url}/slots`}
        render={props => <Slots {...props} />}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default LearnerView
