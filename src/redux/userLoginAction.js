import LOGIN_USER from "./userLoginActionType";
  
export const userLoginAction = (user, dispatch) => {
console.log("here in user login action")
const a = window.location.href
console.log(a)
//console.log("here in user login dispatch")
return fetch('http://josh.localhost:3000/sessions/login', {
method: 'POST',
headers: {
Accept: 'application/cab-tab.com; version=1',
'Content-Type': 'application/json',
},
body: JSON.stringify(user),
})
.then((resp) => {
console.log(resp);
if(!resp.ok) throw new Error(resp.status);
else return resp.json();
})
.then((data) => {
console.log(data)
localStorage.setItem("token", data.data.auth_token)
dispatch(loginUser(data.user))
})
.catch((error) => {
console.log('error: ' + error);
});
}

//Action Creator
const loginUser = userObj => ({
type: LOGIN_USER,
payload: userObj
})