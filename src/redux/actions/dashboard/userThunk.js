import axiosInstance from '../../../helpers/axios';
import { GET_USER_ENDPOINT } from '../../../routes/endpoints';
import {
  getUserFailure,
  getUserRequest,
  getUserSuccess,
} from './userActions';

export const getUser = (userID) => dispatch => {
    dispatch(getUserRequest())
    axiosInstance.get(`${GET_USER_ENDPOINT}${userID}`)
        .then(res => {
            dispatch(getUserSuccess(res.data.data))
        })
        .catch(err => {
            dispatch(getUserFailure(err))
        })
}