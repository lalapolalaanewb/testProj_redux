import { SET_ISLOGIN, SET_ISLOGOUT, SET_ISAUTH, SET_LOADING, SET_ERROR } from '../sagas/types'

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

// User Login
export const isLogin = (email, password) => ({
  type: SET_ISLOGIN,
  payload: {
    email, password
  }
})

// User Logout
export const isLogout = () => ({
  type: SET_ISLOGOUT
})

// Check user isAuthenticated
export const isAuthenticated = () => ({
  type: SET_ISAUTH
})