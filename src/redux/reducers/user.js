import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGOUT_REQUEST,
} from '../actions/types';
import { initialStates } from '../states';

export const userReducer = (state = initialStates.user, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.error
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                data: null,
            }
        default:
            return state
    }
}