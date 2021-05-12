import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Setting from '../../components/Dashboard/Setting';
import { changePassword } from '../../redux/actions/dashboard/settingThunk';

const SettingsContainer = () => {
    document.title = 'Manage your account settings'
    const [field, setField] = React.useState({
        "newpassword": "",
        "oldpassword": ""
    })
    const userID = useSelector(state => state.auth.data.user.id)
    const showMsg = useSelector(state => state.notify.message.show)
    const handleChange = ({target: {name, value}}) => {
        setField({...field, [name]:value})
    }
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(changePassword(field, userID))
    }

    return (
        <Setting showMsg={showMsg} field={field} handleChange={handleChange} handleSubmit={handleSubmit}/>
    );
}

export default SettingsContainer;