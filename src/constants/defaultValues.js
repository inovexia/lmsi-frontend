export const UserRole = {
  super_admin: 1,
  admin: 2,
  instructor: 3,
  learner: 4
}

export const googleClientId =
  '218481800741-ip10j4u1m9hvn72get386gniutpqjd8o.apps.googleusercontent.com'

export const fbClientId = '207201774949002'

export const defaultLang = 'en'
export const defaultDirection = 'ltr'
export const languageOptions = [
  { id: 'ar', name: 'Arabic', direction: 'rtl' },
  { id: 'en', name: 'English', direction: 'ltr' },
  { id: 'hi', name: 'Hindi', direction: 'ltr' }
]

export const encryptionSalt = 'QcoF9wH50&2VR5HNWzePz&Dkc@K7D2'

export const api = {
  URL: 'https://lmsi-api.herokuapp.com',
  path: '/api'
}

export const appColor = '#049478'

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
  refreshToken: String
}

export const navMenus = {
  instructor: [
    {
      label: `Dashboard`,
      link: `/app/instructor/dashboard`,
      icon: `layout-grid`
    },
    {
      label: `Institute`,
      link: `/app/instructor/institute`
    },

    {
      label: `Slots`,
      link: `/app/instructor/slots`
    },
    { label: `Messages`, link: `#` },
    {
      label: `Users`,
      link: `/app/instructor/users`
    }
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
    { label: `Live Class`, link: `/app/dashboard` }
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
  admin: []
}

export const getNavMenu = [
  { label: `Dashboard`, link: `/app/dashboard`, icon: `layout-grid` },
  { label: `Courses`, link: `/app/courses`, icon: `book-open` },
  { label: `Slots`, link: `/app/slots`, icon: `calendar` },
  { label: `Exam`, link: `/app/exams`, icon: `calendar` },
  { label: `Results`, link: `/app/results`, icon: `calendar` },
  { label: `Students`, link: `/app/students`, icon: `users` },
  { label: `Message`, link: `/app/message`, icon: `calendar` },
  { label: `Notice Board`, link: `/app/notice`, icon: `blackboard` },
  { label: `Live Class`, link: `/app/live-class`, icon: `calendar` }
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
        { label: `Edit`, link: `/app/instructor/institute/edit` }
      ]
    },
    {
      label: `Profile`,
      link: `#`,
      subMenu: [
        { label: `View`, link: `/app/instructor/profile` },
        { label: `Edit`, link: `/app/instructor/profile/edit` }
      ]
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
          link: `/app/instructor/slots/my-appointment`
        }
      ]
    },
    {
      label: `Users`,
      link: `#`,
      subMenu: [
        { label: `List`, link: `/app/instructor/users` },
        { label: `Invite`, link: `/app/instructor/users/invite` }
      ]
    }
  ],
  learner: [
    { label: `Dashboard`, link: `/app/learner/dashboard` },
    {
      label: `Profile`,
      link: `#`,
      subMenu: [
        { label: `View`, link: `/app/learner/profile` },
        { label: `Edit`, link: `/app/learner/profile/edit` }
      ]
    },
    {
      label: `Courses`,
      link: `#`,
      subMenu: [
        { label: `List`, link: `/app/learner/courses` },
        { label: `Slots`, link: `/app/learner/courses/slots` }
      ]
    }
  ],
  admin: []
}

export const inviteBody =
  'hii folk we are like to invite our lmsi platform , checks out thuousand of courses & slots for your learning future'

export const countriesList = {
  AFG: '93',
  ALB: '355',
  DZA: '213',
  ASM: '1684',
  AND: '376',
  AGO: '244',
  AIA: '1264',
  ATA: '672',
  ATG: '1268',
  ARG: '54',
  ARM: '374',
  ABW: '297',
  AUS: '61',
  AUT: '43',
  AZE: '994',
  BHS: '1242',
  BHR: '973',
  BGD: '880',
  BRB: '1246',
  BLR: '375',
  BEL: '32',
  BLZ: '501',
  BEN: '229',
  BMU: '1441',
  BTN: '975',
  BOL: '591',
  BIH: '387',
  BWA: '267',
  BVT: '_55',
  BRA: '55',
  IOT: '1284',
  BRN: '673',
  BGR: '359',
  BFA: '226',
  BDI: '257',
  KHM: '855',
  CMR: '237',
  CAN: '1',
  CPV: '238',
  CYM: '1345',
  CAF: '236',
  TCD: '235',
  CHL: '56',
  CHN: '86',
  CXR: '618',
  CCK: '61',
  COL: '57',
  COM: '269',
  COG: '242',
  COD: '243',
  COK: '682',
  CRI: '506',
  HRV: '385',
  CUB: '53',
  CYP: '357',
  CZE: '420',
  DNK: '45',
  DJI: '253',
  DMA: '1767',
  DOM: '1',
  ECU: '593',
  EGY: '20',
  SLV: '503',
  GNQ: '240',
  ERI: '291',
  EST: '372',
  ETH: '251',
  FLK: '500',
  FRO: '298',
  FJI: '679',
  FIN: '358',
  FRA: '33',
  GUF: '594',
  PYF: '689',
  GAB: '241',
  GMB: '220',
  GEO: '995',
  DEU: '49',
  GHA: '233',
  GIB: '350',
  GRC: '30',
  GRL: '299',
  GRD: '1473',
  GLP: '590',
  GUM: '1671',
  GTM: '502',
  GIN: '224',
  GNB: '245',
  GUY: '592',
  HTI: '509',
  HMD: '61',
  VAT: '3',
  HND: '504',
  HKG: '852',
  HUN: '36',
  ISL: '354',
  IND: '91',
  IDN: '62',
  IRN: '98',
  IRQ: '964',
  IRL: '353',
  ISR: '972',
  ITA: '39',
  CIV: '225',
  JAM: '1876',
  JPN: '81',
  JOR: '962',
  KAZ: '7',
  KEN: '254',
  KIR: '686',
  PRK: '850',
  KOR: '82',
  KWT: '965',
  KGZ: '7',
  LAO: '856',
  LVA: '371',
  LBN: '961',
  LSO: '266',
  LBR: '231',
  LBY: '218',
  LIE: '423',
  LTU: '370',
  LUX: '352',
  MAC: '853',
  MKD: '389',
  MDG: '261',
  MWI: '265',
  MYS: '60',
  MDV: '960',
  MLI: '223',
  MLT: '356',
  MHL: '692',
  MTQ: '596',
  MRT: '222',
  MUS: '230',
  MYT: '262',
  MEX: '52',
  FSM: '691',
  MDA: '373',
  MCO: '377',
  MNG: '976',
  MSR: '1664',
  MAR: '212',
  MOZ: '258',
  MMR: '95',
  NAM: '264',
  NRU: '674',
  NPL: '977',
  NLD: '31',
  ANT: '599',
  NCL: '687',
  NZL: '64',
  NIC: '505',
  NER: '227',
  NGA: '234',
  NIU: '683',
  NFK: '672',
  MNP: '1670',
  NOR: '47',
  OMN: '968',
  PAK: '92',
  PLW: '680',
  PSE: '970',
  PAN: '507',
  PNG: '675',
  PRY: '595',
  PER: '51',
  PHL: '63',
  PCN: '870',
  POL: '48',
  PRT: '351',
  PRI: '1',
  QAT: '974',
  REU: '262',
  ROM: '40',
  RUS: '7',
  RWA: '250',
  SHN: '290',
  KNA: '1869',
  LCA: '1758',
  SPM: '508',
  VCT: '1758',
  WSM: '685',
  SMR: '378',
  STP: '239',
  SAU: '966',
  SEN: '221',
  SRB: '381',
  SYC: '248',
  SLE: '232',
  SGP: '65',
  SVK: '421',
  SVN: '386',
  SLB: '677',
  SOM: '252',
  ZAF: '27',
  SGS: '44',
  ESP: '34',
  LKA: '94',
  SDN: '249',
  SUR: '597',
  SJM: '47',
  SWZ: '268',
  SWE: '46',
  CHE: '41',
  SYR: '963',
  TWN: '886',
  TJK: '992',
  TZA: '255',
  THA: '66',
  TLS: '670',
  TGO: '228',
  TKL: '690',
  TON: '676',
  TTO: '1868',
  TUN: '216',
  TUR: '90',
  TKM: '993',
  TCA: '1649',
  TUV: '688',
  UGA: '256',
  UKR: '380',
  ARE: '971',
  GBR: '44',
  USA: '1',
  UMI: '1340',
  URY: '598',
  UZB: '998',
  VUT: '678',
  VEN: '58',
  VNM: '84',
  VGB: '1284',
  VIR: '1340',
  WLF: '681',
  YEM: '260',
  ZMB: '260',
  ZWE: '263'
}
