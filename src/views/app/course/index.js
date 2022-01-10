import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Course = React.lazy(() => import('./defaultView'))
const CreateCourse = React.lazy(() => import('./create'))
const EditCourse = React.lazy(() => import('./edit'))

const CourseView = ({ match }) => {
  false && console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/create`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <CreateCourse {...props} />
        }}
      />
      <Route
        path={`${match.url}/edit/:id`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <EditCourse {...props} />
        }}
      />
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <Course {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default CourseView
