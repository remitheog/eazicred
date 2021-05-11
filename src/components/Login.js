import React from 'react';

import { Link } from 'react-router-dom';

import { REGISTER_URL } from '../routes/paths';

const Login = ({field, handleChange, handleSubmit}) => {
    return (
        <div className="container-lg">
            <div className="account">
                <div className="account__details">
                    <div className="account__inner">
                        <form className="form" onSubmit={handleSubmit}>
                            <h2 className="h-2">Welcome Back</h2>
                            <p>Enter your credentials to continue</p>
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
                                <p><small className="msg"></small></p>
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
                                <p><small className="pswrd_err"></small></p>
                            </div>
                            <p className="text-align-right">Forgot Password?</p>
                            <input type="submit" value="Login" className="btn btn-blue" id="blue"/>
                            <p>Don't Have An Account?
                                <Link to={REGISTER_URL} className="primary-color">Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="account__image">
                    <img src="assets/login-image.png" alt="a photo of a lady watching far away and smiling"/>
                </div>
            </div>
        </div>
    )
}

export default Login