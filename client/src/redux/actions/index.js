/** Import All Actions */
// Auth
import {
  setLoading as setLoadingAuth, setError as setErrorAuth,
  isLogin, isLogout, isAuthenticated
} from './Auth'
// Dashboard
import {
  setLoading as setLoadingDashboard, setError as setErrorDashboard,
  isDashboard
} from './Dashboard'

export {
  // Auth Actions
  setLoadingAuth, setErrorAuth,
  isLogin, isLogout, isAuthenticated,
  // Dashboard Actions
  setLoadingDashboard, setErrorDashboard,
  isDashboard,
}