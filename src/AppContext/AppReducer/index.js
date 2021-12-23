import * as AllActions from 'src/constants/actions'
import { decrypt } from 'src/helpers/Utils'

const AppReducer = (appStore, AppAction) => {
  const rootElement = document.querySelector('#root')

  switch (AppAction.type) {
    case AllActions.TITLE_UPDATE:
      return { ...appStore, pageHeading: AppAction.payload.pageHeading }
    case AllActions.LOAD_USER:
      rootElement.classList.add('logged-in')
      return { ...appStore, user: AppAction.payload.user }
    case AllActions.RELOAD_USER:
      rootElement.classList.add('logged-in')
      return { ...appStore, user: AppAction.payload.user }
    case AllActions.LOGIN_USER:
      appStore.notifications.push(AppAction.payload.notification)
      appStore.user = decrypt(AppAction.payload.user)
      AppAction.payload.history &&
        AppAction.payload.history.push(AppAction.payload.redirectTo)
      rootElement.classList.add('logged-in')
      return { ...appStore }
    case AllActions.LOGIN_FAILED:
      appStore.errors.push(AppAction.payload.error)
      return {
        ...appStore
      }
    case AllActions.LOGOUT_USER:
      appStore.notifications.push(AppAction.payload.notification)
      AppAction.payload.history &&
        AppAction.payload.history.push(AppAction.payload.pathname)
      rootElement.removeAttribute('class')
      return {
        ...appStore,
        user: null
      }
    case AllActions.DISMISS_ERROR:
      appStore.errors.splice(AppAction.payload.index, 1)
      return {
        ...appStore
      }
    case AllActions.DISMISS_NOTIFICATION:
      appStore.notifications.splice(AppAction.payload.index, 1)
      return {
        ...appStore
      }
    case AllActions.REGISTER_USER_SUCCESS:
      appStore.notifications.push(AppAction.payload.notification)
      AppAction.payload.history.push(`/auth/sign-in`)
      return { ...appStore }
    case AllActions.REGISTER_USER_ERROR:
      appStore.errors.push(AppAction.payload.error)
      return { ...appStore }
    case AllActions.REGISTER_USER_EXIST:
      appStore.errors.push(AppAction.payload.error)
      return { ...appStore }
    case AllActions.PASSWORD_COPY_TO_CLIPBOARD:
      appStore.notifications.push(AppAction.payload.notification)
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
    case AllActions.PROFILE_NAME_UPDATED:
      appStore.notifications.push(AppAction.payload.notification)
      appStore.user = decrypt(AppAction.payload.user)
      AppAction.payload.history &&
        AppAction.payload.history.push(AppAction.payload.redirectTo)
      return { ...appStore }
    case AllActions.PASSWORD_UPDATED:
      appStore.notifications.push(AppAction.payload.notification)
      return { ...appStore }
    case AllActions.PASSWORD_UPDATE_FAILED:
    case AllActions.PROFILE_UPDATE_FAILED:
      appStore.errors.push(AppAction.payload.error)
      return { ...appStore }
    case AllActions.ADDRESS_UPDATED:
      appStore.notifications.push(AppAction.payload.notification)
      return { ...appStore }
    case AllActions.ADDRESS_UPDATE_FAILED:
      appStore.errors.push(AppAction.payload.error)
      return { ...appStore }
    case AllActions.INSTITUTE_CREATED:
      appStore.notifications.push(AppAction.payload.notification)
      return { ...appStore }
    case AllActions.INSTITUTE_CREATION_FAILED:
      appStore.errors.push(AppAction.payload.error)
      return { ...appStore }
    case AllActions.SLOT_CREATED:
    case AllActions.SLOT_UPDATED:
    case AllActions.SLOT_DELETED:
      appStore.notifications.push(AppAction.payload.notification)
      return { ...appStore }
    default:
      return appStore
  }
}

export default AppReducer
