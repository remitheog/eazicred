import React from 'react';

import { Link } from 'react-router-dom';

import { DASHBOARD_URL } from '../../routes/paths';
import UserSideBar from './UserSideBar';

const History = () => {
    document.title = "EaziCred - Loan History"
    return (
        <div className="dashboard">
            <div className="container-lg">
                <UserSideBar/>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">History</h3>
                        <button className="main__menu">
                            <i className="fas fa-bars open"/>
                        </button>
                        <Link to={DASHBOARD_URL} className="main__logo">EaziCred</Link>
                        <img src={"assets/login-image.png"} className="user-picture" alt=""/>
                    </div>

                    <div className="main__middle">
                        <h2 className="h2-db">Transaction History</h2>
                        <p className="p2-db">Here's a summary of all your transactions</p>
                    </div>

                    <div className="main__loan-history history-tab">
                        <div className="main__loan-history--box">
                            <div className="loan__row loan__heading">
                                <span>Date</span>
                                <span>Transaction ID</span>
                                <span>Transaction Type</span>
                                <span>Amount</span>
                                <span>Action</span>
                            </div>
                            <div className="loan__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Loan Repayment</span>
                                <span>₦12,293,300</span>
                                <button className="view-details">View Details</button>
                            </div>
                            <div className="loan__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Loan Repayment</span>
                                <span>₦12,293,300</span>
                                <button className="view-details">View Details</button>
                            </div>
                            <div className="loan__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Loan Repayment</span>
                                <span>₦12,293,300</span>
                                <button className="view-details">View Details</button>
                            </div>
                            <div className="loan__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Loan Repayment</span>
                                <span>₦12,293,300</span>
                                <button className="view-details">View Details</button>
                            </div>
                            <div className="loan__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Loan Repayment</span>
                                <span>₦12,293,300</span>
                                <button className="view-details">View Details</button>
                            </div>
                            <div className="loan__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Loan Repayment</span>
                                <span>₦12,293,300</span>
                                <button className="view-details">View Details</button>
                            </div>
                            <div className="loan__row">
                                <span>December 1<br/>2021</span>
                                <span>#527839</span>
                                <span>Loan Repayment</span>
                                <span>₦12,293,300</span>
                                <button className="view-details">View Details</button>
                            </div>
                        </div>
                        {/*The modal popup after the view details button has been clicked*/}
                        <div className="modal-overlay">
                            <div className="modal">
                                <div className="modal__top">
                                    <h3>Loan Details</h3>
                                    <button className="close">x</button>
                                </div>
                                <div className="modal__middle">
                                    <div>
                                        <h5>Loan ID</h5>
                                        <span>111123454946</span>
                                    </div>
                                    <div>
                                        <h5>Duration</h5>
                                        <span>6 Months</span>
                                    </div>
                                    <div>
                                        <h5>Loan Status</h5>
                                        <span>Overdue</span>
                                    </div>
                                    <div>
                                        <h5>Over Due Date</h5>
                                        <span>16th June 2021</span>
                                    </div>
                                </div>
                                <div className="modal__bottom">
                                    <div>
                                        <span>Amount</span>
                                        <span>₦12,293,300</span>
                                    </div>
                                    <div>
                                        <span>Interest</span>
                                        <span>₦1,000,000</span>
                                    </div>
                                    <div>
                                        <span>Total</span>
                                        <span>₦13,293,300</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default History;