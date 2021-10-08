import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Bookings = React.lazy(() => import('./defaultView'))

const BookingsView = ({ match }) => {
  console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match = { ...props.match, ...match }
          return <Bookings {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default BookingsView
