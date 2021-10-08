import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const CreateInstitute = React.lazy(() => import('./defaultView'))

const CreateInstituteView = ({ match }) => {
  console.log(match)

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match = { ...props.match, ...match }
          return <CreateInstitute {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default CreateInstituteView
