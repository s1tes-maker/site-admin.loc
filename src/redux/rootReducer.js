import { combineReducers } from 'redux'
import getRequest from './getRequest/reducer'
import postRequest from './postRequest/reducer'

export default combineReducers({getRequest, postRequest})