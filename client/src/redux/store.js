import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import AllReducers from './reducers'
import { watcherSage } from './sagas/rootSaga'

/** Middleware */
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

/** Redux Store */
const store = createStore(
  AllReducers,
  {},
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(watcherSage)

export default store