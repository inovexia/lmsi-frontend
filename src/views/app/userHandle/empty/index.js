import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Empty = React.lazy(() => import('./defaultView'))

const EmptyView = ({ match }) => {
  console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match = { ...props.match, ...match }
          return <Empty {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default EmptyView
