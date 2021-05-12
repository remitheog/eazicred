import {
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from '../actions/types';
import { initialStates } from '../states';

export const profileReducer = (state = initialStates.profile, action) => {
    switch (action.type){
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: null
            }
        default:
            return state
    }
}