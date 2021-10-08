import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Following = React.lazy(() => import('./defaultView'))

const FollowingView = ({ match }) => {
  console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match = { ...props.match, ...match }
          return <Following {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default FollowingView
