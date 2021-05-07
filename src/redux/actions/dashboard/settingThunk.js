import axios from 'axios';

import { CHANGE_PASSWORD_ENDPOINT } from '../../../routes/endpoints';
import {
  updateProfileFailure,
  updateSettingRequest,
  updateSettingSuccess,
} from '../actions';
import axiosInstance from "../../../helpers/axios";

export const changePassword = (data, userID) => dispatch => {
    dispatch(updateSettingRequest())
    axiosInstance.post(`${CHANGE_PASSWORD_ENDPOINT}${userID}`, {...data})
        .then(res => {
            console.log(res)
            dispatch(updateSettingSuccess())
        })
        .catch(err => {
            console.log(err)
            dispatch(updateProfileFailure())
        })
}