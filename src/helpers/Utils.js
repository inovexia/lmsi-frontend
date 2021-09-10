import { useEffect, useState } from 'react'
import {
  UserRole,
  defaultDirection,
  defaultLang,
  languageOptions,
} from 'src/constants/defaultValues'

export const isBrowser = typeof window !== 'undefined'

export const IsTablet = () => {
  const [isTablet, setTablet] = useState(false)

  useEffect(() => {
    if (isBrowser) {
      setTablet(window.outerWidth < 992 ? true : false)
      window.addEventListener('resize', () => {
        setTablet(window.outerWidth < 992 ? true : false)
      })
    }
  }, [setTablet])

  return isTablet
}

export const ucFirst = input => {
  return input.charAt(0).toUpperCase() + input.slice(1)
}

export const doCapitalize = input => {
  return input
    .toLowerCase()
    .split(' ')
    .map(s => ucFirst(s))
    .join(' ')
}

export const formatDate = (date, patternStr) => {
  const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    dayOfWeekNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    twoDigitPad = num => {
      return num < 10 ? '0' + num : num
    },
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    miliseconds = date.getMilliseconds(),
    h = hour % 12,
    hh = twoDigitPad(h),
    HH = twoDigitPad(hour),
    mm = twoDigitPad(minute),
    ss = twoDigitPad(second),
    aaa = hour < 12 ? 'AM' : 'PM',
    EEEE = dayOfWeekNames[date.getDay()],
    EEE = EEEE.substr(0, 3),
    dd = twoDigitPad(day),
    M = month + 1,
    MM = twoDigitPad(M),
    MMMM = monthNames[month],
    MMM = MMMM.substr(0, 3),
    yyyy = year + '',
    yy = yyyy.substr(2, 2)

  if (!patternStr) {
    patternStr = 'M/d/yyyy'
  }
  // checks to see if month name will be used
  patternStr = patternStr
    .replace('hh', hh)
    .replace('h', h)
    .replace('HH', HH)
    .replace('H', hour)
    .replace('mm', mm)
    .replace('m', minute)
    .replace('ss', ss)
    .replace('s', second)
    .replace('S', miliseconds)
    .replace('dd', dd)
    .replace('d', day)
    .replace('EEEE', EEEE)
    .replace('EEE', EEE)
    .replace('yyyy', yyyy)
    .replace('yy', yy)
    .replace('aaa', aaa)
  if (patternStr.indexOf('MMM') > -1) {
    patternStr = patternStr.replace('MMMM', MMMM).replace('MMM', MMM)
  } else {
    patternStr = patternStr.replace('MM', MM).replace('M', M)
  }
  return patternStr
}

export const getDateWithFormat = () => {
  const today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1 // January is 0!

  const yyyy = today.getFullYear()
  if (dd < 10) {
    dd = `0${dd}`
  }
  if (mm < 10) {
    mm = `0${mm}`
  }
  return `${dd}/${mm}/${yyyy}`
}

export const getCurrentTime = () => {
  const now = new Date()
  return `${now.getHours()}:${now.getMinutes()}`
}

export const getDirection = () => {
  let direction = defaultDirection

  try {
    if (localStorage.getItem('direction')) {
      const localValue = localStorage.getItem('direction')
      if (localValue === 'rtl' || localValue === 'ltr') {
        direction = localValue
      }
    }
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : getDirection -> error', error)
    direction = defaultDirection
  }
  return {
    direction,
    isRtl: direction === 'rtl',
  }
}

export const setDirection = localValue => {
  let direction = 'ltr'
  if (localValue === 'rtl' || localValue === 'ltr') {
    direction = localValue
  }
  try {
    localStorage.setItem('direction', direction)
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : setDirection -> error', error)
  }
}

export const getCurrentLanguage = () => {
  let language = defaultLang
  try {
    language =
      localStorage.getItem('currentLanguage') &&
      languageOptions.filter(
        x => x.id === localStorage.getItem('currentLanguage')
      ).length > 0
        ? localStorage.getItem('currentLanguage')
        : defaultLang
  } catch (error) {
    console.log(
      '>>>>: src/helpers/Utils.js : getCurrentLanguage -> error',
      error
    )
    language = defaultLang
  }
  return language
}

export const setCurrentLanguage = locale => {
  try {
    localStorage.setItem('currentLanguage', locale)
  } catch (error) {
    console.log(
      '>>>>: src/helpers/Utils.js : setCurrentLanguage -> error',
      error
    )
  }
}

export const getCurrentUser = () => {
  let user = null
  try {
    user =
      localStorage.getItem('current_user') != null
        ? JSON.parse(localStorage.getItem('current_user'))
        : null
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js  : getCurrentUser -> error', error)
    user = null
  }
  return user
}

export const setCurrentUser = user => {
  try {
    if (user) {
      localStorage.setItem('current_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('current_user')
    }
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error)
  }
}

export const getRoleId = RoleKey => {
  return UserRole[RoleKey]
}
