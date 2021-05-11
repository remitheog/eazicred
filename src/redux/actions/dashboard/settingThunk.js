import axiosInstance from '../../../helpers/axios';
import { CHANGE_PASSWORD_ENDPOINT } from '../../../routes/endpoints';
import {
  showMessage,
  updateSettingRequest,
  updateSettingSuccess,
} from '../actions';

export const changePassword = (data, userID) => dispatch => {
    dispatch(updateSettingRequest())
    axiosInstance.post(`${CHANGE_PASSWORD_ENDPOINT}${userID}`, {...data})
        .then(res => {
            console.log(res)
            dispatch(updateSettingSuccess())
            dispatch(showMessage({message: "Password Changed successfully", type: 'success'}))
        })
        .catch(err => {
            console.log(err)
            dispatch(showMessage({message: "Password Changed successfully", type: 'error'}))
        })
}