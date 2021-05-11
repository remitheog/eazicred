import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { notifyReducer } from './notify';
import { paydayLoanReducer } from './payday';
import { smeLoanReducer } from './sme';
import { userReducer } from './user';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    sme: smeLoanReducer,
    payday: paydayLoanReducer,
    notify: notifyReducer
})
export default rootReducer