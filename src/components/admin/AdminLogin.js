import React from 'react';

const AdminLogin = () => {
    return (
        <div className="container-lg">
            <div className="account">
                <div className="account__details">
                    <div className="account__inner">
                        <h2 className="h-2">Admin Log In</h2>
                        <p>Enter your credentials to continue</p>
                        <form className="form">
                            <div className="input-group">
                                <label htmlFor="">Email Address</label>
                                <input type="email" placeholder="johndoe@eazycred.com" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder="***********" required/>
                            </div>
                            <p className="text-align-right">Forgot Password?</p>
                            <input type="submit" value="Log In" className="btn btn-blue"/>
                        </form>
                    </div>
                </div>
                <div className="account__image login__image"/>
            </div>
        </div>
    );
}

export default AdminLogin;