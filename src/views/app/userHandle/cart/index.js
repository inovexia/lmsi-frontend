import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Cart = React.lazy(() => import('./defaultView'))

const CartView = ({ match }) => {
  console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match = { ...props.match, ...match }
          return <Cart {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default CartView
