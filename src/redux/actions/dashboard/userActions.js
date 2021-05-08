import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from '../types';

export const getUserRequest = () => {
    return {type: GET_USER_REQUEST}
}

export const getUserSuccess = (payload) => {
    return {type: GET_USER_SUCCESS, payload}
}

export const getUserFailure = error => {
    return {type: GET_USER_FAILURE, error}
}