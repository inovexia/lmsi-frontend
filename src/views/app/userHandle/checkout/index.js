import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Checkout = React.lazy(() => import('./defaultView'))

const CheckoutView = ({ match }) => {
  console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match = { ...props.match, ...match }
          return <Checkout {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default CheckoutView
