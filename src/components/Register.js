import React from 'react';

import { Link } from 'react-router-dom';

import { LOGIN_URL } from '../routes/paths';

const Register = ({handleChange, field, handleSubmit}) => {
    return (
        <div className="container-lg">
            <div className="account">
                <div className="account__details">
                    <form className="account" onSubmit={handleSubmit}>
                        <div className="account__inner">
                            <h2 className="h-2">Create Account</h2>
                            <p>Access SME and Consumer Loans On The Go</p>
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    onChange={handleChange}
                                    name='email'
                                    value={field.email}
                                    id="email"
                                    type="email"
                                    placeholder="johndoe@eazycred.com"
                                    className="email"
                                    required
                                />
                                <p><small className="msg">email error</small></p>
                            </div>
                            <div className="input-groups">
                                <div className="input-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input
                                        onChange={handleChange}
                                        name='firstname'
                                        value={field.firstname}
                                        id="firstname"
                                        type="text"
                                        placeholder="John"
                                        className="first_name"
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input
                                        onChange={handleChange}
                                        name='lastname'
                                        value={field.lastname}
                                        id="lastname"
                                        type="text"
                                        placeholder="Doe"
                                        className="last_name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    onChange={handleChange}
                                    name='password'
                                    value={field.password}
                                    id="password"
                                    type="password"
                                    placeholder="***********"
                                    className="password"
                                    required
                                />
                                <p><small className="pswrd_err">password error</small></p>
                            </div>
                            <div className="input-group">
                                <label htmlFor="code">Referral Code</label>
                                <input
                                    onChange={handleChange}
                                    name='code'
                                    value={field.code}
                                    id="code"
                                    type="text"
                                    className="phone"
                                />
                            </div>
                            <p className="blue">Enter the referral code of the person who referred you to join EaziCred.
                                Don't have a code - <a href="" className="primary-color">Request one from us</a></p>
                            <input type="submit" value="Create Account" id='submit' className="btn btn-primary"/>
                            <p>Already Have An Account? <Link to={LOGIN_URL} className="primary-color">Log In</Link></p>
                        </div>
                    </form>
                    <div className="form"/>
                </div>
                <div className=" account__image">
                    <img src="assets/account-image.png" alt="a photo of a man and woman laughing"/>
                </div>
            </div>
        </div>
    )
}

export default Register