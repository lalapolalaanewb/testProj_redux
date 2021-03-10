import { SET_ISDASHBOARD, SET_LOADING, SET_ERROR } from '../sagas/types'

// Set Loading
export const setLoading = (status) => ({ 
  type: SET_LOADING, 
  payload: status 
})

// Set Error
export const setError = (error) => ({ 
  type: SET_ERROR, 
  payload: { error: error.status, message: error.message } 
})

// Dashboard
export const isDashboard = () => ({
  type: SET_ISDASHBOARD
})