import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AppContext } from 'src/AppContext'
import PageNotFound from 'src/views/auth/PageNotFound'

const Profile = React.lazy(() => import('./defaultView'))
const MyInstitute = React.lazy(() => import('./my-institute'))
const AboutMe = React.lazy(() => import('./about'))

const ProfileView = ({ match }) => {
  const {
      appStore: { user }
    } = useContext(AppContext),
    redirectTo = user.user_name ? user.user_name : user.serial_id

  false && console.log(match)

  return (
    <Switch>
      {redirectTo === match.params.userHandle ? (
        <>
          <Route
            path={`${match.url}/about`}
            render={props => {
              props.match.params = { ...props.match.params, ...match.params }
              return <AboutMe {...props} />
            }}
          />
          <Route
            path={`${match.url}/my-institute`}
            render={props => {
              props.match.params = { ...props.match.params, ...match.params }
              return <MyInstitute {...props} />
            }}
          />
          <Route
            exact
            path={`${match.url}/`}
            render={props => {
              props.match.params = { ...props.match.params, ...match.params }
              return <Profile {...props} />
            }}
          />
        </>
      ) : (
        <Route path={`*`} component={PageNotFound} />
      )}

      <Redirect to={'/error'} message={'page not exist'} />
    </Switch>
  )
}

export default ProfileView
