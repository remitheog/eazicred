import axiosInstance from '../../helpers/axios';
import {
  showError,
  tokenConfig,
} from '../../helpers/utilities';
import {
  GET_USER_ENDPOINT,
  LOGIN_ENDPOINT,
  REGISTER_ENDPOINT,
} from '../../routes/endpoints';
import {
  getUserFailure,
  getUserRequest,
  getUserSuccess,
  loginFailed,
  loginRequest,
  loginSuccess,
  registerFailed,
  registerRequest,
  registerSuccess,
  showMessage,
} from './actions';

export const getUser = () => (dispatch, getState) => {
    dispatch(getUserRequest())
    const id = getState().auth.user.id
    axiosInstance.get(`${GET_USER_ENDPOINT}${id}`, tokenConfig(getState))
        .then(res => {
            dispatch(getUserSuccess(res.data.data))
        })
        .catch(err => {
            dispatch(getUserFailure(err))
        })
}

export const loginUser = (data) => (dispatch, getState) => {
    dispatch(loginRequest())
    const auth = getState().auth
    axiosInstance.post(LOGIN_ENDPOINT, {...data}, tokenConfig(getState))
        .then(res => {
            dispatch(loginSuccess(res.data.data))
        })
        .catch(err => {
            dispatch(loginFailed(showError(err, "Please check and try again")))
            dispatch(showMessage({message: showError(err, auth.error), type: 'error'}))
        })
}

export const registerUser = (data) => (dispatch, getState) => {
    dispatch(registerRequest())
    const auth = getState().auth
    axiosInstance.post(REGISTER_ENDPOINT, {...data}, tokenConfig(getState))
        .then(res => {
            dispatch(registerSuccess(res.data.data))
        })
        .catch(err => {
            dispatch(registerFailed(showError(err, "Please check and try again")))
            dispatch(showMessage({message: showError(err, auth.error), type: 'error'}))
        })
}