import {
  APPLY_SME_LOAN_FAILURE,
  APPLY_SME_LOAN_REQUEST,
  APPLY_SME_LOAN_SUCCESS,
  FETCH_USER_SELECTED_SME_LOAN_FAILURE,
  FETCH_USER_SELECTED_SME_LOAN_REQUEST,
  FETCH_USER_SELECTED_SME_LOAN_SUCCESS,
} from '../../types';

export const fetchUserSelectedSmeLoansRequest = () => {
    return {type: FETCH_USER_SELECTED_SME_LOAN_REQUEST}
}

export const fetchUserSelectedSmeLoansSuccess = (payload) => {
    return {type: FETCH_USER_SELECTED_SME_LOAN_SUCCESS, payload}
}

export const fetchUserSelectedSmeLoansFailure = (error) => {
    return {type: FETCH_USER_SELECTED_SME_LOAN_FAILURE, error}
}


export const applySmeRequest = () => {
    return {type: APPLY_SME_LOAN_REQUEST}
}

export const applySmeSuccess = (payload) => {
    return {type: APPLY_SME_LOAN_SUCCESS, payload}
}

export const applySmeFailure = (error) => {
    return {type: APPLY_SME_LOAN_FAILURE, error}
}