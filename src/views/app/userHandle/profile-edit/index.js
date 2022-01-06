import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const ProfileEdit = React.lazy(() => import('./defaultView'))

const ProfileEditView = ({ match }) => {
  false && console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <ProfileEdit {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default ProfileEditView
