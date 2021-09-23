import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from 'src/AppContext'
import { UserRole } from 'src/constants/defaultValues'
import { isUnAuthorized } from 'src/helpers/Utils'

const SlotList = React.lazy(() => import('./defaultView'))
const CreateSlot = React.lazy(() => import('./create'))
const MyAppointment = React.lazy(() => import('./myappointment'))
const EditSlot = React.lazy(() => import('./edit'))

const SlotRoute = ({ match }) => {
  const {
    appStore: { user },
  } = useContext(AppContext)

  return (
    <Switch>
      {isUnAuthorized(user.role_id, UserRole.instructor) && (
        <Redirect from={`${match.url}/`} to={`/unauthorized`} />
      )}
      <Route
        path={`${match.url}/edit`}
        render={props => <EditSlot {...props} />}
      />
      <Route
        path={`${match.url}/my-appointment`}
        render={props => <MyAppointment {...props} />}
      />
      <Route
        path={`${match.url}/create`}
        render={props => <CreateSlot {...props} />}
      />
      <Route
        exact
        path={`${match.url}/`}
        render={props => <SlotList {...props} />}
      />
      <Redirect to="/error" message={'page not exist'} />
    </Switch>
  )
}

export default SlotRoute
