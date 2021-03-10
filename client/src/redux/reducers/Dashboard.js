import { SET_ERROR, SET_LOADING, SET_ISDASHBOARD, SET_DASHBOARD } from '../sagas/types'

const initialState = {
  user: {
    id: '',
    name: '',
    email: ''
  },
  loading: false,
  error: false,
  message: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ISDASHBOARD:
      return {
        ...state,
        loading: true
      }
    case SET_DASHBOARD:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          email: action.payload.email,
          name: action.payload.name
        }
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.status,
        message: action.payload.message
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}


export default reducer