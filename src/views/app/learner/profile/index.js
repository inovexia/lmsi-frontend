import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { UserRole } from 'src/constants/defaultValues'
import { isUnAuthorized } from 'src/helpers/Utils'

const Profile = React.lazy(() => import('./defaultView'))
const EditProfile = React.lazy(() => import('./edit'))

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
        path={`${match.url}/edit`}
        render={props => <EditProfile {...props} />}
      />
      <Route
        exact={true}
        path={`${match.url}/`}
        render={props => <Profile {...props} />}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default LearnerView
