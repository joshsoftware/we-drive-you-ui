// userLoginReducer.js
//import LOGIN_USER from "./userLoginActionType"
const initialState = {
User: {}
}

export default function reducer(state = initialState, action) {
switch (action.type) {
case 'LOGIN_USER':
return {...state, User: action.payload}
default:
return state;
}
}