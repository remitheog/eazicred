import React from 'react';

import SideBar from './SideBar';

const Home2 = () => {
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
                        <h2 className="h2-db">Welcome <span>Micheal</span></h2>
                        <p className="p2-db">Here's a quick summary of what's happening</p>
                    </div>
                    <div className="main__user-overview">
                        <div>
                            <p>Credit Balance</p>
                            <span>₦230,000</span>
                        </div>
                        <div>
                            <p>Total Received</p>
                            <span>₦12,293,300</span>
                        </div>
                        <div>
                            <p>Total Paid</p>
                            <span>₦12,200,000</span>
                        </div>
                    </div>
                    <div className="main__loan-history">
                        <div className="top">
                            <h3 className="h3-db">Loan History</h3>
                            <button className="view-history">View All</button>
                        </div>
                        <div className="middle">
                            <div className="middle-row middle-heading">
                                <span>Date</span>
                                <span>Transaction ID</span>
                                <span>Transaction Type</span>
                                <span>Amount</span>
                                <span>Action</span>
                            </div>
                            <div className="middle-row middle-history">
                                <span>December 1<br />2021</span>
                                <span>#527839</span>
                                <span>Loan Repayment</span>
                                <span>₦12,293,300</span>
                                <button className="view-details">View Details</button>
                            </div>
                            <div className="middle-row middle-history">
                                <span>December 1<br />2021</span>
                                <span>#527839</span>
                                <span>Loan Repayment</span>
                                <span>₦12,293,300</span>
                                <button className="view-details">View Details</button>
                            </div>
                            <div className="middle-row middle-history">
                                <span>December 1<br />2021</span>
                                <span>#527839</span>
                                <span>Loan Repayment</span>
                                <span>₦12,293,300</span>
                                <button className="view-details">View Details</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home2;