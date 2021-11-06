import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const CreateSlot = React.lazy(() => import('./defaultView'))

const CreateSlotView = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => <CreateSlot {...props} />}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default CreateSlotView
