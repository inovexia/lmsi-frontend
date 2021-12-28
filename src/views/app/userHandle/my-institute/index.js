import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const MyInstitute = React.lazy(() => import('./defaultView'))
// const Buttons = React.lazy(() => import('./display-buttons'))

const MyInstituteView = ({ match }) => {
  false && console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <MyInstitute {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default MyInstituteView
