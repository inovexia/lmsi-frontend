import React, { useCallback, useContext, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useJwt } from 'react-jwt'
import moment from 'moment'

import { AppContext } from 'src/AppContext'
import { ProtectedRoute } from './helpers/authHelper'
import { apiRequest, decrypt, encrypt } from 'src/helpers/Utils'
import { useDebounce, useLocalStorage } from 'src/hooks'
import { appRoot, UserRole, userStorageKey } from 'src/constants/defaultValues'
import { RELOAD_USER } from 'src/constants/actions'

const ViewAuth = React.lazy(() => import('./views/auth'))

const ViewApp = React.lazy(() => import('./views/app'))

const ViewHome = React.lazy(() => import('./views/Home'))

const InstitutePublic = React.lazy(() => import('./views/InstitutePublic'))

const ViewError = React.lazy(() => import('./views/Error'))

const ViewUnauthorized = React.lazy(() => import('./views/Unauthorized'))

const App = () => {
  const {
      appStore: { apiURL, user: loggedInUser },
      updateAppStore
    } = useContext(AppContext),
    [appUser, setAppUser] = useLocalStorage(userStorageKey, null),
    { decodedToken } = useJwt(loggedInUser?.accessToken),
    getRefreshToken = useCallback(async () => {
      try {
        const refreshTokenReq = await apiRequest(
          'POST',
          `${apiURL}/member/renew-access/token`,
          null,
          {
            refresh_token: loggedInUser.refreshToken
          }
        )
        if (refreshTokenReq.ok) {
          const data = await refreshTokenReq.json()
          if (data.API_STATUS) {
            const newUser = {
              ...loggedInUser,
              accessToken: data.accessToken
            }
            setAppUser(encrypt(newUser))
          } else {
            throw new Error('Bad Request')
          }
        } else {
          throw new Error('Unexpected Error')
        }
      } catch (error) {
        console.error(error.message)
      }
    }, [apiURL, loggedInUser, setAppUser])

  useDebounce(
    async () => {
      updateAppStore({
        type: RELOAD_USER,
        payload: { user: decrypt(appUser) }
      })
    },
    100,
    [appUser]
  )

  useEffect(() => {
    if (decodedToken) {
      const expireTime = moment
        .unix(decodedToken?.exp)
        .utc()
        .diff(moment(new Date()).utc(), 'seconds')
      setTimeout(() => {
        loggedInUser && getRefreshToken(expireTime)
      }, expireTime * 1000)
    }
  }, [decodedToken, getRefreshToken, loggedInUser])

  return (
    <Switch>
      <ProtectedRoute
        path={appRoot}
        component={ViewApp}
        roles={[
          UserRole.super_admin,
          UserRole.admin,
          UserRole.instructor,
          UserRole.learner
        ]}
      />
      <Route
        path={'/institute/:institute_handle'}
        render={props => <InstitutePublic {...props} />}
      />
      <Route path={'/auth'} render={props => <ViewAuth {...props} />} />
      <Route path={'/error'} exact render={props => <ViewError {...props} />} />
      <Route
        path={'/unauthorized'}
        exact
        render={props => <ViewUnauthorized {...props} />}
      />
      <Route path={'/'} exact render={props => <ViewHome {...props} />} />
      <Redirect to={'/error'} />
    </Switch>
  )
}

export default App
