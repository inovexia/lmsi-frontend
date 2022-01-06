import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AppContext } from 'src/AppContext'
import PageNotFound from 'src/views/auth/PageNotFound'

const Profile = React.lazy(() => import('./defaultView'))
const ProfileEdit = React.lazy(() => import('./profile-edit'))

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
            path={`${match.url}/edit`}
            render={props => {
              props.match.params = { ...props.match.params, ...match.params }
              return <ProfileEdit {...props} />
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
