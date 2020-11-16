import { combineReducers } from 'redux'
import { UserData } from './userData'
import { GData } from './globalData'

export default combineReducers({
  UserData, GData
})