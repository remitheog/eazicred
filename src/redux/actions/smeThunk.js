import axiosInstance from '../../helpers/axios';
import { SME_LOAN_ENDPOINT } from '../../routes/endpoints';
import {
  showMessage,
  showNotification,
} from './actions';
import {
  applySmeFailure,
  applySmeRequest,
  applySmeSuccess,
} from './dashboard/loan/sme';

export const applySmeLoan = data => (dispatch) => {
    dispatch(applySmeRequest())
    axiosInstance.post(SME_LOAN_ENDPOINT, {...data})
        .then(res => {
            dispatch(applySmeSuccess(res.data))
            dispatch(showNotification())
        })
        .catch((err) => {
            dispatch(applySmeFailure(err))
            dispatch(showMessage({message: "Please all fields are required", type: 'error'}))
        })
}
export default applySmeLoan