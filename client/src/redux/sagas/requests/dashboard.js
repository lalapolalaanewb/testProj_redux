import axios from 'axios'
import { config, configPrivate } from '../../../utils/Header/Header'
import { getCookie } from '../../../utils/Cookie/Cookie'

/** get dashboard */
export const requestGetDashboard = () => { 
  return axios.post(
    '/api/v1/dashboard', 
    // configPrivate
    { uid: localStorage.getItem('uid') },
    config
    // {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${localStorage.getItem('uid')}`
    //   }
    // }
  )
}