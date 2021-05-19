/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Redirect,
  useHistory,
} from 'react-router-dom';

import Register from '../components/Register';
import { registerUser } from '../redux/actions/authThunks';
import { DASHBOARD_URL } from '../routes/paths';

const RegisterContainer = () => {
    document.title = "Eazicred - Create Account"
    const isAuthenticated = useSelector(state => state["auth"].isAuthenticated)
    const [field, setField] = React.useState({
        "email": "",
        "firstname": "",
        "lastname": "",
        "phone": "",
        "code": "",
        "password": ""
    })
    const error = useSelector(state => state["notify"].message)
    const dispatch = useDispatch()

    const handleChange = ({target}) => {
        setField({...field, [target.name]: target.value})
    }
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser(field, history))
    }
    if (isAuthenticated) {
        return <Redirect to={DASHBOARD_URL}/>
    } else {
        return (
            <Register error={error} handleChange={handleChange} handleSubmit={handleSubmit} field={field}/>
        );
    }

}

export default RegisterContainer;