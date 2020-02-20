import LOGIN_USER from './userLoginActionType';
import sub from '../components/subdomain';

// Action Creator
const loginUser = (userObj) => ({
  type: LOGIN_USER,
  payload: userObj,
});

const userLoginAction = (user, dispatch) => fetch(`${sub()}.localhost:3000/sessions/login`, {
  method: 'POST',
  headers: {
    Accept: 'application/cab-tab.com; version=1',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
  .then((resp) => {
    console.log(resp);
    if (!resp.ok) throw new Error(resp.status);
    else return resp.json();
  })
  .then((data) => {
    console.log(data);
    localStorage.setItem('user_id', data.data.current_user.data.id)
    localStorage.setItem('token', data.data.auth_token);
    // localStorage.setItem('role', data.data.current_user.);
    dispatch(loginUser(data.user));
  })
  .catch((error) => {
    console.log(`error: ${error}`);

  });

export default userLoginAction;
