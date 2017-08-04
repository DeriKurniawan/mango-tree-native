import { combineReducers } from 'redux'

import MangoReducer from './MangoReducer'
import UserReducer from './userReducer'
import HarvestReducer from './harvestReducer'

const AppReducer = combineReducers({
  MangoReducer,
  UserReducer,
  HarvestReducer
})

export default AppReducer;