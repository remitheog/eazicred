import {
  USER_DATA,
  USER_TOKEN,
} from '../components/constants/local';

export function isAuthenticated() {
    if(localStorage.getItem(USER_DATA) && localStorage.getItem(USER_TOKEN)){
        return true
    }
    return false
}