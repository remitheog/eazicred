import {
  USER_DATA,
  USER_TOKEN,
} from '../constants/local';

export function isAuthenticated() {
    return !!(localStorage.getItem(USER_DATA) && localStorage.getItem(USER_TOKEN));

}