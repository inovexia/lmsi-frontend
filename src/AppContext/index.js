import React, { createContext, useEffect, useReducer, useRef } from 'react'

import {
  UserRole,
  userProps,
  apiURL,
  appRoot,
  isAuthGuardActive,
  userStorageKey,
} from 'src/constants/defaultValues'
import { decrypt } from 'src/helpers/Utils'
import { useLocalStorage } from 'src/hooks'
import { LOAD_USER } from 'src/constants/actions'

import AppReducer from './AppReducer'

export const AppContext = createContext()

export const initialStoreState = {
  apiURL,
  appRoot,
  isAuthGuardActive,
  userProps,
  UserRole,
  userStorageKey,
  pageHeading: `LMSi`,
  user: null,
  errors: [],
  notifications: [],
}

export const AppStore = ({ children }) => {
  const { Provider } = AppContext,
    [appStore, updateAppStore] = useReducer(AppReducer, initialStoreState),
    [appUser, setAppUser] = useLocalStorage(userStorageKey, null),
    isRemoved = useRef(false)

  useEffect(() => {
    const initializeUser = async () => {
      if (appUser) {
        try {
          if (!isRemoved.current) {
            updateAppStore({
              type: LOAD_USER,
              payload: { user: decrypt(appUser) },
            })
          }
        } catch (e) {
          console.log(e)
        }
      }
    }
    initializeUser()
  }, [appStore, appUser, setAppUser])

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
