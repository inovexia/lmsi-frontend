import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Profile = React.lazy(() => import('./defaultView'))
// const Buttons = React.lazy(() => import('./display-buttons'))

const ProfileView = ({ match }) => {
  false && console.log(match)

  return (
    <Switch>
      <Route
        exact
        path={`${match.url}/`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <Profile {...props} />
        }}
      />
      {/* <Route
        path={`${match.url}/display-buttons`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <Buttons {...props} />
        }}
      /> */}
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default ProfileView
