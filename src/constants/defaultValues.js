export const UserRole = {
  super_admin: 1,
  admin: 2,
  instructor: 3,
  learner: 4,
}

export const defaultLang = 'en'
export const defaultDirection = 'ltr'
export const languageOptions = [
  { id: 'ar', name: 'Arabic', direction: 'rtl' },
  { id: 'en', name: 'English', direction: 'ltr' },
  { id: 'hi', name: 'Hindi', direction: 'ltr' },
]

export const api = {
  URL: 'https://lmsi-api.herokuapp.com',
  path: '/api',
}

export const apiURL = `${api.URL}${api.path}`

export const appRoot = '/app'
export const isAuthGuardActive = true

export const currentUser = {
  id: 1,
  displayName: 'Sarah Kortney',
  username: 'sarah_kortney',
  imgURL: '',
  role: UserRole.Admin,
  accessToken: '',
  refreshToken: '',
}
