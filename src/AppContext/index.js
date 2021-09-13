import React, { createContext, useEffect, useReducer, useRef } from 'react'
import { isBrowser } from 'src/helpers/Utils'
import {
  UserRole,
  userProps,
  apiURL,
  appRoot,
  isAuthGuardActive,
} from 'src/constants/defaultValues'
import { LOAD_USER, LOGIN_USER } from 'src/constants/actions'

import AppReducer from './AppReducer'

export const AppContext = createContext()

export const initialStoreState = {
  isLoggedIn: false,
  user: null,
  error: null,
  notification: null,
}

export const AppStore = ({ children }) => {
  const { Provider } = AppContext,
    [appStore, updateAppStore] = useReducer(AppReducer, initialStoreState),
    isRemoved = useRef(false)

  useEffect(() => {
    const initializeUser = async () => {
      // Check for an existing cart.
      const existingUser = isBrowser ? localStorage.getItem('app_user') : null,
        setUserInState = user => {
          updateAppStore({
            type: LOAD_USER,
            user,
          })
        }
      // const createNewCheckout = () => appStore.client.checkout.create(),
      //   fetchCheckout = id => appStore.client.checkout.fetch(id)
      if (existingUser) {
        try {
          if (!isRemoved.current) {
            setUserInState(JSON.parse(existingUser))
            return
          }
        } catch (e) {
          console.log(e)
        }
      }
    }
    initializeUser()
  }, [appStore])

  useEffect(() => () => {
    isRemoved.current = true
  })

  return (
    <Provider
      value={{
        apiURL,
        appRoot,
        isAuthGuardActive,
        userProps,
        UserRole,
        isLoggedIn: appStore.isLoggedIn,
        user: appStore.user,
        updateAppStore,
        loginUser: user => {
          isBrowser && localStorage.setItem('app_user', JSON.stringify(user))
          updateAppStore({
            type: LOGIN_USER,
            user,
          })
        },
      }}
    >
      {children}
    </Provider>
  )
}
