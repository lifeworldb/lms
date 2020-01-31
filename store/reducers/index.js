import { combineReducers } from 'redux'
import diplomaNavReducer from './diplomaNavReducer'
import userReducer from './userReducer'

export default combineReducers({
    diplomaNavReducer,
    userReducer
})