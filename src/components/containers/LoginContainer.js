import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loginUser } from '../../redux/actions/authThunks';
import { DASHBOARD_URL } from '../../routes/paths';
import Login from '../Login';

const LoginContainer = () => {
    const history = useHistory()
    const isAuth = useSelector(state => state.auth.isAuthenticated)
    React.useEffect(() => {
        if(isAuth){
            history.push(DASHBOARD_URL)
        }
    }, [])
    document.title = "Eazicred - Login to eazycred"
    const dispatch = useDispatch()
    const [field, setField] = React.useState({"email": "", "password": ""})
    const handleChange = ({target: {value, name}}) => setField({...field, [name]:value})
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(field, history))
    }

    return (
        <Login handleSubmit={handleSubmit} handleChange={handleChange} field={field}/>
    );
}

export default LoginContainer;