import {createStore, combineReducers} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer'

let resucers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer
})
let store = createStore(resucers)

export default store