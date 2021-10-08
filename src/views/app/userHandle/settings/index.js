import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Settings = React.lazy(() => import('./defaultView'))

const SettingsView = ({ match }) => {
  console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match = { ...props.match, ...match }
          return <Settings {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default SettingsView
