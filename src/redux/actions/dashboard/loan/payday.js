import {
  APPLY_PAYDAY_LOAN_FAILURE,
  APPLY_PAYDAY_LOAN_REQUEST,
  APPLY_PAYDAY_LOAN_SUCCESS,
} from '../../types';

export const applyPaydayRequest = () => {
    return {type: APPLY_PAYDAY_LOAN_REQUEST}
}

export const applyPaydaySuccess = (payload) => {
    return {type: APPLY_PAYDAY_LOAN_SUCCESS, payload}
}

export const applyPaydayFailure = (error) => {
    return {type: APPLY_PAYDAY_LOAN_FAILURE, error}
}
