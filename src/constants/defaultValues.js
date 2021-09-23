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
