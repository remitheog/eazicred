import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Profile from '../../components/Dashboard/Profile';
import { changeProfile } from '../../redux/actions/dashboard/profileThunk';

const ProfileContainer = () => {
    document.title = "Update your Easicred Profile"

    const currentUser = useSelector(state => state.user.data)

    const state = useSelector(state => state.profile)

    const [field, setField] = React.useState({
        firstname:currentUser.firstname,
        lastname:currentUser.lastname
    })

    const showMsg = useSelector(state => state.notify.message.show)

    const handleChange = (e) => {
        setField({...field, [e.target.name]:e.target.value})
    }
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(changeProfile(field))
    }

    return (
        <Profile state={state} showMsg={showMsg} field={field} handleChange={handleChange} handleSubmit={handleSubmit}/>
    );
}

export default ProfileContainer;