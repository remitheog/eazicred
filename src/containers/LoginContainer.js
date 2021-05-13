import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Redirect } from 'react-router-dom';

import Login from '../components/Login';
import { loginUser } from '../redux/actions/authThunks';
import { DASHBOARD_URL } from '../routes/paths';

const LoginContainer = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const error = useSelector(state => state.notify.message)
    React.useEffect(() => {
    }, [])
    document.title = "Eazicred - Login to eazycred"
    const dispatch = useDispatch()
    const [field, setField] = React.useState({"email": "", "password": ""})
    const handleChange = ({target: {value, name}}) => setField({...field, [name]:value})
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(field))
    }

    if(isAuthenticated){
        return <Redirect to={DASHBOARD_URL}/>
    }else{
        return <Login error={error} handleSubmit={handleSubmit} handleChange={handleChange} field={field}/>
    }
}

export default LoginContainer;