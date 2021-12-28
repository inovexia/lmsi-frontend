import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Profile = React.lazy(() => import('./defaultView'))
const MyInstitute = React.lazy(() => import('./my-institute'))
const AboutMe = React.lazy(() => import('./about'))

const ProfileView = ({ match }) => {
  false && console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/about`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <AboutMe {...props} />
        }}
      />
      <Route
        path={`${match.url}/my-institute`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <MyInstitute {...props} />
        }}
      />
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
