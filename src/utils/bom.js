/**
 * provide cookie & localStorage support
 */
import Cookie from 'js-cookie'
import Localforage from 'lockr'

const env = process.env.NODE_ENV || 'development'
const cookieOptions = { path: '/', domain: (env === 'development') ? 'localhost' : '.xingshulin.com' }
export const cookie = {
  get(key, options = {}) {
    return Cookie.get(key, { ...cookieOptions, ...options })
  },
  set(key, value, options = {}) {
    return Cookie.set(key, value, { ...cookieOptions, ...options })
  },
  remove(key, options = {}) {
    return Cookie.remove(key, { ...cookieOptions, ...options })
  },
}

export const localStorage = {
  ...Localforage,
  remove: Localforage.rm.bind(Localforage),
}

export const sessionStorage = {
  get: window.sessionStorage.getItem.bind(window.sessionStorage),
  set: window.sessionStorage.setItem.bind(window.sessionStorage),
  remove: window.sessionStorage.removeItem.bind(window.sessionStorage),
}
