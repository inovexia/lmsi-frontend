import React, { createContext, useEffect, useReducer, useRef } from 'react'
import { isBrowser } from 'src/helpers/Utils'
import {
  UserRole,
  userProps,
  apiURL,
  appRoot,
  isAuthGuardActive,
} from 'src/constants/defaultValues'
import { LOAD_USER } from 'src/constants/actions'

import AppReducer from './AppReducer'

export const AppContext = createContext()

export const initialStoreState = {
  apiURL,
  appRoot,
  isAuthGuardActive,
  userProps,
  UserRole,
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
      const existingUser = isBrowser ? localStorage.getItem('app_user') : null,
        setUserInState = user => {
          updateAppStore({
            type: LOAD_USER,
            payload: { user },
          })
        }
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
        appStore,
        updateAppStore,
      }}
    >
      {children}
    </Provider>
  )
}
