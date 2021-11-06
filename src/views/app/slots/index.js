import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Slot = React.lazy(() => import('./defaultView'))
const CreateSlot = React.lazy(() => import('./createSlot'))

const SlotView = ({ match }) => {
  return (
    <Switch>
      <Route
        exact
        path={`${match.url}/`}
        render={props => <Slot {...props} />}
      />

      <Route
        path={`${match.url}/create-slot`}
        render={props => <CreateSlot {...props} />}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default SlotView
