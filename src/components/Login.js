import React from 'react';

import { Link } from 'react-router-dom';

import { REGISTER_URL } from '../routes/paths';
import MessageAlert from './MessageAlert';

const Login = ({field, handleChange, handleSubmit, error}) => {
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

export default Login