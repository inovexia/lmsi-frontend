import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Edit = React.lazy(() => import('./defaultView'))

const EditView = ({ match }) => {
  console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match = { ...props.match, ...match }
          return <Edit {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default EditView
