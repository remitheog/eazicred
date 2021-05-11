import React from 'react';

import MessageAlert from './MessageAlert';
import SideBar from './SideBar';

const Setting = ({field, handleChange, handleSubmit}) => {
    return (
        <div className="dashboard">
            <div className="container-lg">
                <SideBar/>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">Settings</h3>
                        <img src="assets/login-image.png" className="user-picture" alt="" />
                    </div>
                    <div className="main__middle">
                        <h2 className="h2-db">Account Settings</h2>
                        <p className="p2-db">Change basic setting in your account</p>
                    </div>
                    <MessageAlert/>
                    <form className="main__form" onSubmit={handleSubmit}>
                        <div className="input-groups">
                            <div className="input-group">
                                <label htmlFor={'oldpassword'}>Old Password</label>
                                <input onChange={handleChange} value={field.oldpassword} name="oldpassword" id={'oldpassword'} type="password" placeholder="**********"/>
                            </div>
                            <div className="input-group">
                                <label htmlFor={'newpassword'}>New Password</label>
                                <input onChange={handleChange} value={field.newpassword} name="newpassword" id={'newpassword'} type="password" placeholder="**********"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-blue">Update</button>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default Setting;