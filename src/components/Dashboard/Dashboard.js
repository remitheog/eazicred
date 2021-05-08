import React from 'react';

import SideBar from './SideBar';

const Dashboard = ({user}) => {
    return (
        <div className="dashboard">
            <div className="container-lg">
                <SideBar/>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">Dashboard</h3>
                        <img src="assets/login-image.png" className="user-picture" alt="" />
                    </div>
                    <div className="main__middle">
                        <h2 className="h2-db">Welcome <span className="account_name">{`${user.firstname} ${user.lastname}`}</span></h2>
                        <p className="p2-db">Here's a quick summary of what's happening</p>
                    </div>
                    <div className="main__user-overview">
                        <div>
                            <p>Credit Balance</p>
                            <span>₦0.00</span>
                        </div>
                        <div>
                            <p>Total Received</p>
                            <span>₦0.00</span>
                        </div>
                        <div>
                            <p>Total Paid</p>
                            <span>₦0.00</span>
                        </div>
                    </div>
                    <div className="main__loan-nohistory">
                        <div>
                            <img src="assets/EmptyInbox.svg" alt="empty box" />
                            <h3 className="h3-db">Loan History</h3>
                            <p>You haven't taken any loans yet. <a href>Apply for one now</a></p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;