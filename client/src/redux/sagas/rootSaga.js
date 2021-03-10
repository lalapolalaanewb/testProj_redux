import { 
  SET_ISLOGIN, SET_ISLOGOUT, SET_ISAUTH,
  SET_ISDASHBOARD, 
} from './types'
import { takeLatest } from 'redux-saga/effects'
import { handleClientAuth, handlePostLogin, handlePostLogout } from './handlers/auth'
import { handleGetDashboard } from './handlers/dashboard'

export function* watcherSage() {
  // auth
  yield takeLatest(SET_ISLOGIN, handlePostLogin)
  yield takeLatest(SET_ISLOGOUT, handlePostLogout)
  yield takeLatest(SET_ISAUTH, handleClientAuth)
  // dashboard
  yield takeLatest(SET_ISDASHBOARD, handleGetDashboard)
}