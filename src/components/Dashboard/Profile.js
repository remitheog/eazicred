import React from 'react';
import SideBar from './SideBar';

const Profile = () => {
    document.title = "Profile"
    return (
        <div className="dashboard">
            <div className="container-lg">
                <SideBar/>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">Profile</h3>
                        <img src="assets/login-image.png" className="user-picture" alt="" />
                    </div>
                    <div className="main__middle">
                        <h2 className="h2-db">Profile</h2>
                        <p className="p2-db">Manage your Profile</p>
                    </div>
                    <div className="success">
                        <div>
                            <p>Profile Updated Successfully</p>
                        </div>
                    </div>
                    <form className="main__form">
                        <div className="input-groups">
                            <div className="input-group">
                                <label htmlFor="firstname">First Name</label>
                                <input id="firstname" type="text" placeholder="John" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input id="lastname" type="text" placeholder="Doe" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input id="email" type="email" placeholder="example@eazycred.com" />
                            </div>
                        </div>
                        <button className="btn btn-blue">Update</button>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default Profile;