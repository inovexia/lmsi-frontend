import * as AllActions from 'src/constants/actions'

const AppReducer = (appStore, AppAction) => {
  switch (AppAction.type) {
    case AllActions.LOAD_USER:
      return { ...appStore, isLoggedIn: true, user: AppAction.user }
    case AllActions.LOGIN_USER:
      return { ...appStore, isLoggedIn: true, user: AppAction.payload.user }
    default:
      return appStore
  }
}

export default AppReducer
