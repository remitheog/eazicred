import axiosInstance from '../../../helpers/axios';
import { tokenConfig } from '../../../helpers/utilities';
import { CHANGE_USER_ENDPOINT } from '../../../routes/endpoints';
import {
  getUserSuccess,
  showMessage,
  updateProfileFailure,
  updateProfileRequest,
} from '../actions';

export const changeProfile = (data) => (dispatch, getState) => {
    dispatch(updateProfileRequest())
    axiosInstance.put(CHANGE_USER_ENDPOINT, {...data}, tokenConfig(getState))
        .then(res => {
            dispatch(getUserSuccess(res.data.data))
            dispatch(showMessage({message: res.data.successMessage, type: 'success'}))
        })
        .catch(err => {
            dispatch(updateProfileFailure(err))
            dispatch(showMessage({message: "Error profile could not be updated check and try again later", type: 'error'}))
        })
}