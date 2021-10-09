import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const BookSlot = React.lazy(() => import('./defaultView'))

const InstituteBookSlotView = ({ match }) => {
  false && console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <BookSlot {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default InstituteBookSlotView
