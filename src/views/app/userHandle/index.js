import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const User = React.lazy(() => import('./defaultView'))
const BookingsView = React.lazy(() => import('./bookings'))
const CartView = React.lazy(() => import('./cart'))
const CheckoutView = React.lazy(() => import('./checkout'))
const EditView = React.lazy(() => import('./edit'))
const FollowingView = React.lazy(() => import('./following'))
const FollowersView = React.lazy(() => import('./followers'))
const InstitutesView = React.lazy(() => import('./institutes'))
const SettingsView = React.lazy(() => import('./settings'))
const CreateInstituteView = React.lazy(() => import('./create-institute'))
const InstituteHandleView = React.lazy(() => import('./instituteHandle'))

const UserView = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/:userHandle/bookings`}
        render={props => <BookingsView {...props} />}
      />
      <Route
        path={`${match.url}/:userHandle/cart`}
        render={props => <CartView {...props} />}
      />
      <Route
        path={`${match.url}/:userHandle/checkout`}
        render={props => <CheckoutView {...props} />}
      />
      <Route
        path={`${match.url}/:userHandle/edit`}
        render={props => <EditView {...props} />}
      />
      <Route
        path={`${match.url}/:userHandle/followers`}
        render={props => <FollowersView {...props} />}
      />
      <Route
        path={`${match.url}/:userHandle/following`}
        render={props => <FollowingView {...props} />}
      />
      <Route
        path={`${match.url}/:userHandle/institutes`}
        render={props => <InstitutesView {...props} />}
      />
      <Route
        path={`${match.url}/:userHandle/settings`}
        render={props => <SettingsView {...props} />}
      />
      <Route
        path={`${match.url}/:userHandle/create-institute`}
        render={props => <CreateInstituteView {...props} />}
      />
      <Route
        path={`${match.url}/:userHandle/:instituteHandle`}
        render={props => <InstituteHandleView {...props} />}
      />
      <Route
        exact={true}
        path={`${match.url}/:userHandle`}
        render={props => <User {...props} />}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default UserView
