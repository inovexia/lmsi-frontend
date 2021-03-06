import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import AppLayout from 'src/layout/app'

const UserHandleView = React.lazy(() => import('./userHandle'))
const DashboardView = React.lazy(() => import('./dashboard'))
const CourseView = React.lazy(() => import('./course'))
const SearchView = React.lazy(() => import('./search'))
const StudentView = React.lazy(() => import('./students'))
const InstituteView = React.lazy(() => import('./institute'))
const SlotView = React.lazy(() => import('./slots'))
const LearnerView = React.lazy(() => import('./learners'))
const CartView = React.lazy(() => import('./cart'))
const CheckoutView = React.lazy(() => import('./checkout'))
const PageNotFound = React.lazy(() => import('./PageNotFound'))

const App = ({ match }) => {
  const {
      appStore: { user }
    } = useContext(AppContext),
    redirectTo = user.user_name ? user.user_name : user.serial_id

  // console.log(user)

  return (
    <AppLayout>
      <Switch>
        <Redirect
          exact
          from={`${match.url}/`}
          to={`${match.url}/${redirectTo}`}
        />
        <Route
          path={`${match.url}/dashboard`}
          render={props => {
            return <DashboardView {...props} />
          }}
        />
        <Route
          path={`${match.url}/courses`}
          render={props => {
            return <CourseView {...props} />
          }}
        />
        <Route
          path={`${match.url}/learners`}
          render={props => {
            return <LearnerView {...props} />
          }}
        />
        <Route
          path={`${match.url}/search`}
          render={props => {
            return <SearchView {...props} />
          }}
        />
        <Route
          path={`${match.url}/students`}
          render={props => {
            return <StudentView {...props} />
          }}
        />
        <Route
          path={`${match.url}/cart`}
          render={props => {
            return <CartView {...props} />
          }}
        />
        <Route
          path={`${match.url}/checkout`}
          render={props => {
            return <CheckoutView {...props} />
          }}
        />
        <Route
          path={`${match.url}/create-institute`}
          render={props => {
            return <InstituteView {...props} />
          }}
        />
        <Route
          path={`${match.url}/slots`}
          render={props => {
            return <SlotView {...props} />
          }}
        />
        <Route
          path={`${match.url}/:userHandle`}
          render={props => {
            return <UserHandleView {...props} />
          }}
        />
        <Route path={`*`} component={PageNotFound} />
        {/* <Redirect to={'/error'} /> */}
      </Switch>
    </AppLayout>
  )
}

export default App
