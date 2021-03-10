import { SET_ISLOGIN, SET_ISLOGOUT, SET_ISAUTH, SET_AUTH, SET_LOADING, SET_ERROR } from '../sagas/types'

const initialState = {
  authenticated: false,
  loading: false,
  error: false,
  message: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ISLOGIN:
      return {
        ...state,
        loading: true
      }
    case SET_ISLOGOUT:
      return {
        ...state,
        loading: true
      }
    case SET_ISAUTH:
      return {
        ...state,
        loading: true
      }
    case SET_AUTH:
      return {
        ...state,
        authenticated: action.payload
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