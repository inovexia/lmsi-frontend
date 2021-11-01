import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Profile = React.lazy(() => import('./defaultView'))

const ProfileView = ({ match }) => {
  false && console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <Profile {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default ProfileView
