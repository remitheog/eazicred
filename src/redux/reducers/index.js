import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { notifyReducer } from './notify';
import { paydayLoanReducer } from './payday';
import { profileReducer } from './profile';
import { settingReducer } from './setting';
import { smeLoanReducer } from './sme';

const rootReducer = combineReducers({
    auth: authReducer,
    sme: smeLoanReducer,
    payday: paydayLoanReducer,
    setting: settingReducer,
    profile: profileReducer,
    notify: notifyReducer
})
export default rootReducer