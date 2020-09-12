import {createStore, combineReducers} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'

let resucers = combineReducers({
  profileReducer,
  dialogsReducer
})
let store = createStore(resucers)

export default store