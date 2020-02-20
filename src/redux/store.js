import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from "redux-saga";
import userLoginReducer from './userLoginReducer'

const sagaMiddleware = createSagaMiddleware();

const store= createStore(userLoginReducer,{}, applyMiddleware(sagaMiddleware) )

export default store;