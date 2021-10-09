import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Followers = React.lazy(() => import('./defaultView'))

const FollowersView = ({ match }) => {
  console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <Followers {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default FollowersView
