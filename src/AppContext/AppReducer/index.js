import * as AllActions from 'src/constants/actions'

const AppReducer = (appStore, AppAction) => {
  switch (AppAction.type) {
    case AllActions.LOAD_USER:
      return { ...appStore, user: AppAction.user }
    case AllActions.LOGIN_USER:
      console.log(AppAction.payload)
      return { ...appStore, isLoggedIn: true, user: AppAction.payload.user }
    default:
      return appStore
  }
}

export default AppReducer
