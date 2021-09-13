import * as allActions from 'src/constants/actions'

const AppReducer = (appStore, AppAction) => {
  switch (AppAction.type) {
    case allActions.LOAD_USER:
    case allActions.LOGIN_USER:
      return { ...appStore, user: AppAction.user }
    default:
      return appStore
  }
}

export default AppReducer
