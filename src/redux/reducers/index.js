import { combineReducers } from 'redux'
import { peopleReducer } from './People'
import { detailReducer } from './Detail'
import { globalReducer } from './Global'

const reducer = combineReducers({
  peopleReducer,
  detailReducer,
  globalReducer
})

export default reducer