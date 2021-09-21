import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const List = React.lazy(() => import('./list'))
const Create = React.lazy(() => import('./create'))
const Edit = React.lazy(() => import('./edit'))

const InstituteView = ({ match }) => {
  console.log(match.url)
  return (
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
      <Route
        exact
        path={`${match.url}/list`}
        render={props => <List {...props} />}
      />

      <Route
        exact
        path={`${match.url}/create`}
        render={props => <Create {...props} />}
      />

      <Route
        exact
        path={`${match.url}/edit`}
        render={props => <Edit {...props} />}
      />

      <Redirect to="/error" message={'page not exist'} />
    </Switch>
  )
}

export default InstituteView
