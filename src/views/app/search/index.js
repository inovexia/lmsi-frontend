import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// import { urlQuery } from 'src/helpers/Utils'

const Search = React.lazy(() => import('./defaultView'))

const SearchView = ({ match, location }) => {
  false && console.log(match, location)
  // console.log(urlQuery(location))

  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => {
          props.match.params = { ...props.match.params, ...match.params }
          return <Search {...props} />
        }}
      />
      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default SearchView
