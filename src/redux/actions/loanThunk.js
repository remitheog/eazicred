import axiosInstance from '../../helpers/axios';
import { tokenConfig } from '../../helpers/utilities';
import {
  PAYDAY_LOAN_ENDPOINT,
  SME_LOAN_ENDPOINT,
} from '../../routes/endpoints';
import {
  showMessage,
  showNotification,
} from './actions';
import {
  applyPaydayFailure,
  applyPaydayRequest,
  applyPaydaySuccess,
} from './dashboard/loan/payday';
import {
  applySmeFailure,
  applySmeRequest,
  applySmeSuccess,
} from './dashboard/loan/sme';

export const applyPaydayLoan = data => dispatch => {
    dispatch(applyPaydayRequest())
    axiosInstance.post(PAYDAY_LOAN_ENDPOINT, {...data})
        .then(res => {
            dispatch(applyPaydaySuccess(res.data))
            dispatch(showNotification())
        })
        .catch(err => {
            dispatch(applyPaydayFailure(err))
            dispatch(showMessage({message: "Please all fields are required", type: 'error'}))
        })
}

export const applySmeLoan = data => (dispatch, getState) => {
    dispatch(applySmeRequest())
    axiosInstance.post(SME_LOAN_ENDPOINT, {...data}, tokenConfig(getState))
        .then(res => {
            dispatch(applySmeSuccess(res.data))
            dispatch(showNotification())
        })
        .catch((err) => {
            dispatch(applySmeFailure(err))
            dispatch(showMessage({message: "Please all fields are required", type: 'error'}))
        })
}
