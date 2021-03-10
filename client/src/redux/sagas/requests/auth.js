import axios from 'axios'
import { config, configPrivate } from '../../../utils/Header/Header'
import { getCookie } from '../../../utils/Cookie/Cookie'

/** login */
export const requestPostLogin = (email, password) => { 
  return axios.post(
    '/api/v1/auth', 
    { uid: '', email, password }, 
    config
  )
}

/** logout */
export const requestPostLogout = () => {
  // get uid cookie
  // let uid = getCookie('uid')
  let uid = localStorage.getItem('uid')

  return axios.post(
    '/api/v1/auth/logout', 
    // { uid: uid }, 
    // configPrivate
    { uid: uid },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${uid}`
      }
    }
  )
}

/** isAunthenticated */
export const requestClientAuth = () => {
  // get uid cookie
  return getCookie('uid')
}