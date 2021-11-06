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

export const encryptionSalt = 'QcoF9wH50&2VR5HNWzePz&Dkc@K7D2'

export const api = {
  URL: 'https://lmsi-api.herokuapp.com',
  path: '/api',
}

export const apiURL = `${api.URL}${api.path}`

export const appRoot = '/app'
export const isAuthGuardActive = true

export const userStorageKey = 'appUser'

export const userProps = {
  first_name: String,
  last_name: String,
  member_id: Number,
  serial_id: String,
  role_id: Number,
  is_email_verified: Boolean,
  email: String,
  checksum: String,
  accessToken: String,
  refreshToken: String,
}

export const navMenus = {
  instructor: [
    {
      label: `Dashboard`,
      link: `/app/instructor/dashboard`,
      icon: `layout-grid`,
    },
    {
      label: `Institute`,
      link: `/app/instructor/institute`,
    },

    {
      label: `Slots`,
      link: `/app/instructor/slots`,
    },
    { label: `Messages`, link: `#` },
    {
      label: `Users`,
      link: `/app/instructor/users`,
    },
  ],
  learner: [
    { label: `Dashboard`, link: `/app/dashboard`, icon: `layout-grid` },
    { label: `Courses`, link: `/app/dashboard` },
    { label: `Slots`, link: `/app/dashboard` },
    { label: `Exam`, link: `/app/dashboard` },
    { label: `Results`, link: `/app/dashboard` },
    { label: `Students`, link: `/app/dashboard` },
    { label: `Message`, link: `/app/dashboard` },
    { label: `Notice Board`, link: `/app/dashboard` },
    { label: `Live Class`, link: `/app/dashboard` },
    // {
    //   label: `Profile`,
    //   link: `#`,
    //   subMenu: [
    //     { label: `View`, link: `/app/learner/profile` },
    //     { label: `Edit`, link: `/app/learner/profile/edit` },
    //   ],
    // },
    // {
    //   label: `Courses`,
    //   link: `#`,
    //   subMenu: [
    //     { label: `List`, link: `/app/learner/courses` },
    //     { label: `Slots`, link: `/app/learner/courses/slots` },
    //   ],
    // },
  ],
  admin: [],
}

export const getNavMenu = [
  { label: `Dashboard`, link: `/app/dashboard`, icon: `layout-grid` },
  { label: `Courses`, link: `/app/dashboard`, icon: `book-open` },
  { label: `Slots`, link: `/app/slots`, icon: `calendar` },
  { label: `Exam`, link: `/app/dashboard`, icon: `calendar` },
  { label: `Results`, link: `/app/dashboard`, icon: `calendar` },
  { label: `Students`, link: `/app/students`, icon: `users` },
  { label: `Message`, link: `/app/dashboard`, icon: `calendar` },
  { label: `Notice Board`, link: `/app/dashboard`, icon: `blackboard` },
  { label: `Live Class`, link: `/app/dashboard`, icon: `calendar` },
]

export const navMenusOld = {
  instructor: [
    { label: `Dashboard`, link: `/app/instructor/dashboard` },
    {
      label: `Institute`,
      link: `#`,
      subMenu: [
        { label: `Info`, link: `/app/instructor/institute` },
        { label: `Create`, link: `/app/instructor/institute/create` },
        { label: `Edit`, link: `/app/instructor/institute/edit` },
      ],
    },
    {
      label: `Profile`,
      link: `#`,
      subMenu: [
        { label: `View`, link: `/app/instructor/profile` },
        { label: `Edit`, link: `/app/instructor/profile/edit` },
      ],
    },
    {
      label: `Slots`,
      link: `#`,
      subMenu: [
        { label: `List`, link: `/app/instructor/slots` },
        { label: `Create`, link: `/app/instructor/slots/create` },
        { label: `Edit`, link: `/app/instructor/slots/edit` },
        {
          label: `My Appointment`,
          link: `/app/instructor/slots/my-appointment`,
        },
      ],
    },
    {
      label: `Users`,
      link: `#`,
      subMenu: [
        { label: `List`, link: `/app/instructor/users` },
        { label: `Invite`, link: `/app/instructor/users/invite` },
      ],
    },
  ],
  learner: [
    { label: `Dashboard`, link: `/app/learner/dashboard` },
    {
      label: `Profile`,
      link: `#`,
      subMenu: [
        { label: `View`, link: `/app/learner/profile` },
        { label: `Edit`, link: `/app/learner/profile/edit` },
      ],
    },
    {
      label: `Courses`,
      link: `#`,
      subMenu: [
        { label: `List`, link: `/app/learner/courses` },
        { label: `Slots`, link: `/app/learner/courses/slots` },
      ],
    },
  ],
  admin: [],
}
