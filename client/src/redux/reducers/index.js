import { combineReducers } from 'redux'

/** import All Reducers */
// Auth
import auth from './Auth' 
// Dashboard
import dashboard from './Dashboard'

/** Combine All Reducers */
export default combineReducers({
  auth: auth,
  dashboard: dashboard
})