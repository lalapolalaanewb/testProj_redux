import { setCookie, removeCookie } from '../../../utils/Cookie/Cookie'
import { call, put } from 'redux-saga/effects'
import { requestClientAuth, requestPostLogin, requestPostLogout } from '../requests/auth'
import { SET_AUTH, SET_LOADING, SET_ERROR } from '../types'

export function* handlePostLogin(action) {
  try {
    const response = yield call(requestPostLogin, { email: action.payload.email, password: action.payload.password })
    const result = response.data.data
    console.log(response);  // console.log(result)
    // set uid cookie to res.data.data.uid & options of expires to res.data.data.sato & options of path to /pfv4-admin
    setCookie('uid', result.uid, { path: '/', expires: new Date(result.sato) })
    // for page refresh
    setCookie('onRefresh', '', { path: '/' })
    console.log('cookie done set')
    localStorage.setItem('uid', result.uid)
    // dispatch setAuthenticated
    yield put({ type: SET_AUTH, payload: true })
  } catch(error) {
    // console.log(error); console.log(error.response)
    const result = error.response.data
    const payload = {
      status: true,
      message: result.error
    }

    // dispatch setError
    yield put({ type: SET_ERROR, payload: payload })
  }

  // loading to false
  yield put({ type: SET_LOADING, payload: false })
}

export function* handlePostLogout(action) {
  try {
    const response = yield call(requestPostLogout)
    const result = response.data

    if(result.success) {
      // remove cookie
      removeCookie('uid', { path: '/' })
      removeCookie('onRefresh', { path: '/' })
    }

    // dispatch setAuthenticated
    yield put({ type: SET_AUTH, payload: false })
  } catch(error) {
    console.log(error)
    const result = error.response.data
    const payload = {
      status: true,
      message: result.error
    }

    // dispatch setError
    yield put({ type: SET_ERROR, payload: payload })
  }

  // loading to false
  yield put({ type: SET_LOADING, payload: false })
}

export function* handleClientAuth() {
  const response = yield call(requestClientAuth)
  const result = response

  if(result) {
    // dispatch setAuthenticated
    yield put({ type: SET_AUTH, payload: true })
    
    // return true
  } else {
    // dispatch setAuthenticated
    yield put({ type: SET_AUTH, payload: false })

    // return false
  }

  // loading to false
  yield put({ type: SET_LOADING, payload: false })
}