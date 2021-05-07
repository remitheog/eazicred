import {
  USER_DATA,
  USER_TOKEN,
} from '../../components/constants/local';
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../actions/types';
import { initialStates } from '../states';

export const authReducer = (state = initialStates.auth, action) => {
    switch (action.type){
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true, isAuthenticated: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
            }
        case REGISTER_FAILED:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                error: action.error
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                isAuthenticated: false,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                data: action.payload,
                error: null
            }
        case LOGIN_FAILED:
        case LOGOUT_REQUEST:
            localStorage.removeItem(USER_TOKEN)
            localStorage.removeItem(USER_DATA)
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                data: null ,
                error: action.error
            }

        default:
            return state
    }
}