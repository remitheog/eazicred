import {
  APPLY_PAYDAY_LOAN_FAILURE,
  APPLY_PAYDAY_LOAN_REQUEST,
  APPLY_PAYDAY_LOAN_SUCCESS,
  FETCH_USER_PAYDAY_LOAN_FAILURE,
  FETCH_USER_PAYDAY_LOAN_REQUEST,
  FETCH_USER_PAYDAY_LOAN_SUCCESS,
  FETCH_USER_SELECTED_PAYDAY_LOAN_FAILURE,
  FETCH_USER_SELECTED_PAYDAY_LOAN_REQUEST,
  FETCH_USER_SELECTED_PAYDAY_LOAN_SUCCESS,
} from '../../types';

export const fetchUserSelectedPaydayLoansRequest = () => {
    return {type: FETCH_USER_SELECTED_PAYDAY_LOAN_REQUEST}
}

export const fetchUserSelectedPaydayLoansSuccess = (payload) => {
    return {type: FETCH_USER_SELECTED_PAYDAY_LOAN_SUCCESS, payload}
}

export const fetchUserSelectedPaydayLoansFailure = (error) => {
    return {type: FETCH_USER_SELECTED_PAYDAY_LOAN_FAILURE, error}
}


export const fetchUserPaydayLoansRequest = () => {
    return {type: FETCH_USER_PAYDAY_LOAN_REQUEST}
}

export const fetchUserPaydayLoansSuccess = (payload) => {
    return {type: FETCH_USER_PAYDAY_LOAN_SUCCESS, payload}
}

export const fetchUserPaydayLoansFailure = (error) => {
    return {type: FETCH_USER_PAYDAY_LOAN_FAILURE, error}
}


export const applyPaydayRequest = () => {
    return {type: APPLY_PAYDAY_LOAN_REQUEST}
}

export const applyPaydaySuccess = (payload) => {
    return {type: APPLY_PAYDAY_LOAN_SUCCESS, payload}
}

export const applyPaydayFailure = (error) => {
    return {type: APPLY_PAYDAY_LOAN_FAILURE, error}
}
