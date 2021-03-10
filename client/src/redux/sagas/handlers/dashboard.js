import { setCookie, removeCookie } from '../../../utils/Cookie/Cookie'
import { call, put } from 'redux-saga/effects'
import { requestGetDashboard } from '../requests/dashboard'
import { SET_LOADING, SET_ERROR, SET_DASHBOARD } from '../types'

export function* handleGetDashboard(action) {
  try {
    const response = yield call(requestGetDashboard)
    const result = response.data.data
    console.log(response); console.log(result)
    // dispatch set dashboard
    yield put({ type: SET_DASHBOARD, payload: { id: result.id, email: result.email, name: result.name } })
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