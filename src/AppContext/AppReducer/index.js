import * as AllActions from 'src/constants/actions'

const AppReducer = (appStore, AppAction) => {
  switch (AppAction.type) {
    case AllActions.LOAD_USER:
      return { ...appStore, user: AppAction.payload.user }
    case AllActions.LOGIN_USER:
      appStore.notifications.push(AppAction.payload.notification)
      return { ...appStore, user: AppAction.payload.user }
    case AllActions.LOGIN_FAILED:
      appStore.errors.push(AppAction.payload.error)
      return {
        ...appStore,
      }
    case AllActions.LOGOUT_USER:
      appStore.notifications.push(AppAction.payload.notification)
      return {
        ...appStore,
      }
    case AllActions.DISMISS_ERROR:
      appStore.errors.splice(AppAction.payload.index, 1)
      return {
        ...appStore,
      }
    case AllActions.DISMISS_NOTIFICATION:
      appStore.notifications.splice(AppAction.payload.index, 1)
      return {
        ...appStore,
      }
    case AllActions.REGISTER_USER_SUCCESS:
      appStore.notifications.push(AppAction.payload.notification)
      AppAction.payload.history.push(`/auth/sign-in`)
      return { ...appStore }
    case AllActions.REGISTER_USER_ERROR:
      appStore.errors.push(AppAction.payload.error)
      return { ...appStore }
    case AllActions.FORGOT_PASSWORD_SUCCESS:
      appStore.notifications.push(AppAction.payload.notification)
      return { ...appStore }
    case AllActions.FORGOT_PASSWORD_ERROR:
      appStore.errors.push(AppAction.payload.error)
      return { ...appStore }
    case AllActions.RESET_PASSWORD_SUCCESS:
      appStore.notifications.push(AppAction.payload.notification)
      AppAction.payload.history.replace(`/auth/sign-in`)
      return { ...appStore }
    case AllActions.RESET_PASSWORD_MISMATCH:
      appStore.notifications.push(AppAction.payload.notification)
      return { ...appStore }
    case AllActions.RESET_PASSWORD_ERROR:
      appStore.errors.push(AppAction.payload.error)
      return { ...appStore }
    case AllActions.UNEXPECTED_ERROR:
      appStore.errors.push(AppAction.payload.error)
      return { ...appStore }
    default:
      return appStore
  }
}

export default AppReducer
