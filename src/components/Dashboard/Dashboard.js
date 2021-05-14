import React from 'react';

import { DASHBOARD_URL } from '../../routes/paths';
import Login from '../Login';
import SideBar from '../SideBar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="container-lg">
                <SideBar/>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">Dashboard</h3>
                        <button className="main__menu">
                            <i className="fas fa-bars open"/>
                        </button>
                        <Login className="main__logo" to={DASHBOARD_URL}>EaziCred</Login>
                        <img alt="" src={"assets/login-image.png"}/>
                    </div>

                    <div className="main__middle">
                        <h2 className="h2-db">Welcome <span>Micheal</span></h2>
                        <p className="p2-db">Here's a quick summary of what's happening</p>
                    </div>

                    <div className="main__user-overview">
                        <div>
                            <p>Credit Balance</p>
                            <span>&#8358;12,293,300</span>
                        </div>
                        <div>
                            <p>Total Received</p>
                            <span>&#8358;6,299,300</span>
                        </div>
                        <div>
                            <p>Total Paid</p>
                            <span>&#8358;20,293,300</span>
                        </div>
                    </div>

                   {/*WHAT TO BE SHOWN IF A USER HAS LOANS HISTORY */}
                    <div className="main__loan-history">
                        <div className="main__loan-history--top">
                            <h3 className="h3-db">Loan History</h3>
                            <button className="view-history">View All</button>
                        </div>

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
                        </div>

                        {/*The modal popup after the view details button has been clicked */}
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

                    {/*WHAT TO BE SHOWN IF A USER HAS NO LOANS HISTORY*/}

                   {/*<div class="main__loan-nohistory">*/}
                   {/*     <div>*/}
                   {/*         <img src="../assets/EmptyInbox.svg" alt="empty box">*/}
                   {/*         <h3 class="h3-db">Loan History</h3>*/}
                   {/*         <p>You haven't taken any loans yet. <a href="">Apply for one now</a></p>*/}
                   {/*     </div>*/}
                   {/* </div>*/}
                </main>
            </div>
        </div>
    );
}

export default Dashboard;