import axiosInstance from '../../helpers/axios';
import { tokenConfig } from '../../helpers/utilities';
import {
  FETCH_SELECTED_PAYDAYLOAN_ENDPOINT,
  PAYDAY_LOAN_ENDPOINT,
  SME_LOAN_ENDPOINT,
  USER_PAYDAY_LOANS_ENDPOINT,
} from '../../routes/endpoints';
import {
  showMessage,
  showNotification,
} from './actions';
import {
  applyPaydayFailure,
  applyPaydayRequest,
  applyPaydaySuccess,
  fetchUserPaydayLoansFailure,
  fetchUserPaydayLoansRequest,
  fetchUserPaydayLoansSuccess,
  fetchUserSelectedPaydayLoansRequest,
  fetchUserSelectedPaydayLoansSuccess,
} from './dashboard/loan/payday';
import {
  applySmeFailure,
  applySmeRequest,
  applySmeSuccess,
  fetchUserSelectedSmeLoansRequest,
  fetchUserSelectedSmeLoansSuccess,
} from './dashboard/loan/sme';

export const fetchSelectedPaydayLoan = loanId => (dispatch, getState) => {
    if(loanId){
        dispatch(fetchUserSelectedPaydayLoansRequest())
        axiosInstance.get(`${FETCH_SELECTED_PAYDAYLOAN_ENDPOINT}${loanId}`, tokenConfig(getState))
            .then(res => {
                dispatch(fetchUserSelectedPaydayLoansSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const fetchSelectedSmeLoan = loanId => (dispatch, getState) => {
    if(loanId){
        dispatch(fetchUserSelectedSmeLoansRequest())
        axiosInstance.get(`${'FETCH_SELECTED_PAYDAYLOAN_ENDPOINT'}${loanId}`, tokenConfig(getState))
            .then(res => {
                dispatch(fetchUserSelectedSmeLoansSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const fetchUserPaydayLoans = () => (dispatch, getState) => {
    dispatch(fetchUserPaydayLoansRequest())
    axiosInstance.get(USER_PAYDAY_LOANS_ENDPOINT, tokenConfig(getState))
        .then(res => {
            dispatch(fetchUserPaydayLoansSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchUserPaydayLoansFailure(err))
        })
}


export const fetchUserSmeLoans = () => (dispatch, getState) => {
    dispatch(applyPaydayRequest())
    axiosInstance.get('PAYDAY_LOAN_ENDPOINT', tokenConfig(getState))
        .then(res => {
            dispatch(applyPaydaySuccess(res.data))
            dispatch(showNotification())
        })
        .catch(err => {
            dispatch(applyPaydayFailure(err))
            dispatch(showMessage({message: "Please all fields are required", type: 'error'}))
        })
}


export const applyPaydayLoan = data => (dispatch, getState) => {
    dispatch(applyPaydayRequest())
    const formData = new FormData()

    for ( let key in data ) {
        formData.append(key, data[key]);
    }

    console.log(formData)

    axiosInstance.post(PAYDAY_LOAN_ENDPOINT, formData, tokenConfig(getState, "multipart/form-data"))
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
