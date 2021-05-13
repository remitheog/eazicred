import React from 'react';

import SideBar from './SideBar';

const History = () => {
        return (
            <div className="dashboard">
                <div className="container-lg">
                    <SideBar/>
                    <main className="main">
                        <div className="main__top">
                            <h3 className="h3-db">History</h3>
                            <img src={"assets/login-image.png"} className="user-picture" alt="user thumbnail" />
                        </div>
                        <div className="main__middle">
                            <h2 className="h2-db">Transaction History</h2>
                            <p className="p2-db">Here's a summary of all your transactions</p>
                        </div>
                        <div className="main__loan-history history">
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

export default History;