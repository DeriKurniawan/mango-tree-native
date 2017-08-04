import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import AppReducer from './reducers'

const middleware = applyMiddleware(logger)
const store = createStore(AppReducer, middleware)

export default store
