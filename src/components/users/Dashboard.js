import React, {
  useEffect,
  useState,
} from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../Common/Loader';
import { getUser } from '../../redux/actions/authThunks';
import {
  fetchUserPaydayLoans,
  fetchUserSmeLoans,
} from '../../redux/actions/loanThunk';
import {
  DASHBOARD_HISTORY_URL,
  DASHBOARD_URL,
} from '../../routes/paths';
import EmptyLoanHistory from './EmptyLoanHistory';
import LoanDetailsModal from './LoanDetailsModal';
import UserSideBar from './UserSideBar';

function formatDate(date) {
    return new Date(date).toDateString()
}

const Dashboard = ({user, auth, loadUser, history, fetchSmeLoans, fetchPaydayLoans, smeLoans, paydayLoans}) => {
    document.title = `Eazicred Dashboard`
    const [open, setOpen] = useState(false)
    const [selectedLoan, setSelectedLoan] = useState(null)

    useEffect(() => {
        loadUser()
    }, []);

    const showLoanDetails = id => {
        setSelectedLoan(id)
        setOpen(true)
    }

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
                            {user.SMEloans < 30 && (
                                <button onClick={() => history.push(DASHBOARD_HISTORY_URL)}
                                        className="view-history">View All</button>)}
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
                                        {user.SMEloans.map(loan => (
                                            <div className="loan__row">
                                                <span>{formatDate(loan.created_at)}</span>
                                                <span>#{loan.id}</span>
                                                <span>SME Loan</span>
                                                <span>₦12,293,300</span>
                                                <button onClick={() => showLoanDetails(loan)}
                                                        className="view-details">View Details
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    {open && <LoanDetailsModal selectedLoan={selectedLoan} setOpen={setOpen}/>}
                                </div>
                            ) : (
                                <EmptyLoanHistory/>
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
        auth: state.auth,
        smeLoans: state.userLoans.smeLoans,
        paydayLoans: state.userLoans.paydayLoans
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadUser: () => dispatch(getUser()),
        fetchSmeLoans: () => dispatch(fetchUserSmeLoans()),
        fetchPaydayLoans: () => dispatch(fetchUserPaydayLoans()),
    }
}

export default connect(mapState, mapDispatch)(Dashboard);