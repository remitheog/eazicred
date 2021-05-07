import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { changePassword } from '../../../redux/actions/dashboard/settingThunk';
import Setting from '../../Dashboard/Setting';

const SettingsContainer = () => {
    document.title = 'Manage your account settings'
    const [field, setField] = React.useState({oldPassword: "", newPassword: "", confirmPassword: ""})
    const userID = useSelector(state => state.auth.data.user.id)
    const handleChange = ({target: {name, value}}) => {
        setField({...field, [name]:value})
    }
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(changePassword(field, userID))
    }

    return (
        <Setting field={field} handleChange={handleChange} handleSubmit={handleSubmit}/>
    );
}

export default SettingsContainer;