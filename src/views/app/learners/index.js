import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const LearnerList = React.lazy(() => import('./defaultView'))
const Invite = React.lazy(() => import('./invite'))
const Profile = React.lazy(() => import('./profile'))

const LearnerView = ({ match }) => {
  false && console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/invite`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <Invite {...props} />
        }}
      />
      <Route
        path={`${match.url}/:id`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <Profile {...props} />
        }}
      />
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <LearnerList {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default LearnerView
