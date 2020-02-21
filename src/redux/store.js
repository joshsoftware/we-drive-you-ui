import { createStore } from 'redux'
import userLoginReducer from './userLoginReducer'

const store= createStore(userLoginReducer )

export default store;