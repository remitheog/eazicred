/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useHistory } from 'react-router-dom';

import Register from '../components/Register';
import { registerUser } from '../redux/actions/authThunks';
import { DASHBOARD_URL } from '../routes/paths';

const RegisterContainer = () => {
    document.title = "Eazicred - Create Account"
    const history = useHistory()
    const [field, setField] = React.useState({
        "email": "",
        "firstname": "",
        "lastname": "",
        "phone": "",
        "code": "",
        "password": ""
    })
    const dispatch = useDispatch()
    const handleChange = ({target}) => setField({...field, [target.name]:target.value})
    const isAuth = useSelector(state => state.auth.isAuthenticated)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser(field, history))
    }
    React.useEffect(() => {
        if(isAuth){
            history.push(DASHBOARD_URL)
        }
    }, [])
    return (
        <Register handleChange={handleChange} handleSubmit={handleSubmit} field={field}/>
    );
}

export default RegisterContainer;