import React from 'react';

import { connect } from 'react-redux';
import {
  Link,
  Redirect,
} from 'react-router-dom';

import MessageAlert from '../Common/MessageAlert';
import { loginUser } from '../redux/actions/authThunks';
import {
  DASHBOARD_URL,
  REGISTER_URL,
} from '../routes/paths';

const Login = ({isAuthenticated, login, error}) => {
    document.title = "Eazicred - Login to eazicred"
    const [field, setField] = React.useState({"email": "", "password": ""})

    const handleChange = (e) => {
        setField({...field, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(field)
    }
    if(isAuthenticated){
        return <Redirect to={DASHBOARD_URL}/>
    }
    return (
        <div className="container-lg">
            <div className="account">
                <div className="account__details">
                    <div className="account__inner">
                        <h2 className="h-2">Welcome Back</h2>
                        <p>Enter your credentials to continue</p>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    value={field.email}
                                    name="email"
                                    id="email" type="email"
                                    placeholder="example@eazycred.com"
                                    onChange={handleChange}
                                    className="email"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    name="password"
                                    value={field.password}
                                    id="password"
                                    type="password"
                                    placeholder="***********"
                                    onChange={handleChange}
                                    className="password"
                                />
                            </div>
                            {!error.show && <input type="submit" value="Login" className="btn btn-blue"/>}
                            {error.show && <MessageAlert><input type="button" value={error.message} disabled
                                                                className="alert alert-red"/></MessageAlert>}
                            <p>Don't Have An Account? <Link to={REGISTER_URL} className="primary-color"> Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="account__image login__image"/>
            </div>
        </div>
    )
}


const mapState = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.notify.message,
    }
}

const mapDispatch = (dispatch) => {
    return {
        login: (data) => dispatch(loginUser(data))
    }
}

export default connect(mapState, mapDispatch)(Login);