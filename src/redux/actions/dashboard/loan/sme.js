import {
  APPLY_SME_LOAN_FAILURE,
  APPLY_SME_LOAN_REQUEST,
  APPLY_SME_LOAN_SUCCESS,
} from '../../types';

export const applySmeRequest = () => {
    return {type: APPLY_SME_LOAN_REQUEST}
}

export const applySmeSuccess = (payload) => {
    return {type: APPLY_SME_LOAN_SUCCESS, payload}
}

export const applySmeFailure = (error) => {
    return {type: APPLY_SME_LOAN_FAILURE, error}
}