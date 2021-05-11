import axiosInstance from '../../helpers/axios';
import { SME_LOAN_ENDPOINT } from '../../routes/endpoints';
import { showNotification } from './actions';
import {
  applySmeFailure,
  applySmeRequest,
  applySmeSuccess,
} from './dashboard/loan/sme';

export const applySmeLoan = data => dispatch => {
    dispatch(applySmeRequest())
    axiosInstance.post(SME_LOAN_ENDPOINT, {...data})
        .then(res => {
            dispatch(applySmeSuccess(res.data))
            dispatch(showNotification())
        })
        .catch(err => {
            dispatch(applySmeFailure(err))
            console.log(err)
        })
}
export default applySmeLoan