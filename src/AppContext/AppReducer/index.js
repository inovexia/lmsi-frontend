import * as AllActions from 'src/constants/actions'

const AppReducer = (appStore, AppAction) => {
  switch (AppAction.type) {
    case AllActions.LOAD_USER:
      return { ...appStore, user: AppAction.payload.user }
    case AllActions.LOGIN_USER:
      return { ...appStore, user: AppAction.payload.user }
    case AllActions.LOGIN_FAILED:
      return {
        ...appStore,
        error: {
          code: AllActions.LOGIN_FAILED,
          message:
            '<strong>Login Failed</strong> Username or Password is incorrect!',
        },
      }
    default:
      return appStore
  }
}

export default AppReducer
