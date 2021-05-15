import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../Common/Loader';
import { getUser } from '../../redux/actions/authThunks';
import {
  DASHBOARD_HISTORY_URL,
  DASHBOARD_LOAN_APPLICATION_URL,
  DASHBOARD_URL,
} from '../../routes/paths';
import UserSideBar from './UserSideBar';

const Dashboard = ({user, auth, loadUser, history}) => {
    document.title = `Eazicred Dashboard`
    useEffect(() => {
        loadUser()
    }, [loadUser]);

    return auth.loading ? <Loader/> : (
        <div className="dashboard">
            <div className="container-lg">
                <UserSideBar/>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">Dashboard</h3>
                        <button className="main__menu">
                            <i className="fas fa-bars open"/>
                        </button>
                        <Link className="main__logo" to={DASHBOARD_URL}>EaziCred</Link>
                        <img alt="" src={"assets/login-image.png"}/>
                    </div>

                    <div className="main__middle">
                        <h2 className="h2-db">Welcome
                            <span style={{textTransform: "capitalize"}}>{` ${user.firstname}`}</span>
                        </h2>
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
                    <div className="main__loan-history">
                        <div className="main__loan-history--top">
                            <h3 className="h3-db">Loan History</h3>
                            {user.SMEloans && (
                                <button onClick={() => history.push(DASHBOARD_HISTORY_URL)}
                                        className="view-history">View All</button>
                            )}
                        </div>
                        {
                            user.SMEloans ? (
                                <div>
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
                                    </div>
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
                            ) : (
                                <div className="main__loan-nohistory">
                                    <div>
                                        <img src={"assets/EmptyInbox.svg"} alt="empty box"/>
                                        <h3 className="h3-db">Loan History</h3>
                                        <p>You haven't taken any loans yet. <Link to={DASHBOARD_LOAN_APPLICATION_URL}>
                                            Apply for one now</Link></p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </main>
            </div>
        </div>
    )
}

const mapState = (state) => {
    return {
        user: state.auth.user,
        auth: state.auth
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadUser: () => dispatch(getUser)
    }
}

export default connect(mapState, mapDispatch)(Dashboard);