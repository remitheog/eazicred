import axiosInstance from '../../helpers/axios';
import { PAYDAY_LOAN_ENDPOINT } from '../../routes/endpoints';
import {
  showMessage,
  showNotification,
} from './actions';
import {
  applyPaydayFailure,
  applyPaydayRequest,
  applyPaydaySuccess,
} from './dashboard/loan/payday';

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
export default applyPaydayLoan