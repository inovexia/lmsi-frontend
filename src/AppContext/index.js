import React, { useState, useEffect, useRef } from 'react'

import { isBrowser } from 'src/helpers/Utils'
import {
  UserRole,
  userProps,
  apiURL,
  appRoot,
  isAuthGuardActive,
} from 'src/constants/defaultValues'

export const AppContext = React.createContext()

export const AppStore = ({ children }) => {
  const { Provider } = AppContext,
    initialStoreState = {
      isLoggedIn: false,
      user: null,
    },
    [appStore, updateAppStore] = useState(initialStoreState),
    isRemoved = useRef(false)

  useEffect(() => {
    const initializeUser = async () => {
      // Check for an existing cart.

      const existingUser = isBrowser ? localStorage.getItem('app_user') : null,
        setUserInState = user => {
          updateAppStore(prevState => {
            return { ...prevState, user }
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
        loginUser: user => {
          isBrowser && localStorage.setItem('app_user', JSON.stringify(user))
          updateAppStore(prevState => {
            return { ...prevState, user: user }
          })
        },
      }}
    >
      {children}
    </Provider>
  )
}
