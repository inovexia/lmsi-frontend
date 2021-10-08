import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const InstituteHandle = React.lazy(() => import('./defaultView'))

const InstituteHandleView = ({ match }) => {
  console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match = { ...props.match, ...match }
          return <InstituteHandle {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default InstituteHandleView
