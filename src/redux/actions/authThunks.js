import {
  USER_DATA,
  USER_TOKEN,
} from '../../components/constants/local';
import axiosInstance from '../../helpers/axios';
import {
  LOGIN_ENDPOINT,
  REGISTER_ENDPOINT,
} from '../../routes/endpoints';
import {
  DASHBOARD_URL,
  LOGIN_URL,
  REGISTER_URL,
} from '../../routes/paths';
import {
  loginFailed,
  loginRequest,
  loginSuccess,
  registerFailed,
  registerRequest,
  registerSuccess,
} from './actions';

export const loginUser = (data, historyCB) => (dispatch) => {
    dispatch(loginRequest())
    axiosInstance.post(LOGIN_ENDPOINT, {...data})
        .then(res => {
            dispatch(loginSuccess(res.data.data))
            localStorage.setItem(USER_TOKEN, JSON.stringify(res.data.data.token))
            localStorage.setItem(USER_DATA, JSON.stringify(res.data.data.user))
            historyCB.push(DASHBOARD_URL)
        })
        .catch(err => {
            dispatch(loginFailed(err))
            historyCB.push(LOGIN_URL)
        })
}


export const registerUser = (data, historyCB) => dispatch => {
    dispatch(registerRequest())
    axiosInstance.post(REGISTER_ENDPOINT, {...data})
        .then(res => {
            dispatch(registerSuccess(res.data.data))
            historyCB.push(LOGIN_URL)
        })
        .catch(err => {
            dispatch(registerFailed(err))
            historyCB.push(REGISTER_URL)
        })
}