import axiosInstance from '../../../helpers/axios';
import { CHANGE_USER_ENDPOINT } from '../../../routes/endpoints';
import {
  showMessage,
  updateProfileFailure,
  updateProfileRequest,
} from '../actions';
import { getUserSuccess } from './userActions';

export const changeProfile = (data) => dispatch => {
    dispatch(updateProfileRequest())
    axiosInstance.put(CHANGE_USER_ENDPOINT, {...data})
        .then(res => {
            console.log(res)
            dispatch(getUserSuccess(res.data.data))
            dispatch(showMessage({message: res.data.successMessage, type: 'success'}))
        })
        .catch(err => {
            dispatch(updateProfileFailure(err))
            dispatch(showMessage({message: "Error profile could not be updated check and try again later", type: 'error'}))
        })
}