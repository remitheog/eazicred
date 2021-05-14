import React from 'react';

import MessageAlert from '../MessageAlert';
import SideBar from '../SideBar';

const Profile = ({state, showMsg, field, handleChange, handleSubmit}) => {
    return (
        <div className="dashboard">
            <div className="container-lg">
                <SideBar/>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">Profile</h3>
                        <img src={"assets/login-image.png"} className="user-picture" alt="" />
                    </div>
                    <div className="main__middle">
                        <h2 className="h2-db">Profile</h2>
                        <p className="p2-db">Manage your Profile</p>
                    </div>
                    {showMsg && <MessageAlert/>}
                    <form className="main__form" onSubmit={handleSubmit}>
                        <div className="input-groups">
                            <div className="input-group">
                                <label htmlFor="firstname">First Name</label>
                                <input name="firstname" value={field.firstname} onChange={handleChange} id="firstname" type="text" placeholder="John" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input name="lastname" value={field.lastname} onChange={handleChange} id="lastname" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <button disabled={state.loading} type={"submit"} className="btn btn-blue">Update</button>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default Profile;