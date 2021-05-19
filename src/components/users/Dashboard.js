import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import Loader from '../../Common/Loader';
import { getUser } from '../../redux/actions/authThunks';
import { fetchAllUserLoans } from '../../redux/actions/loanThunk';
import { DASHBOARD_HISTORY_URL } from '../../routes/paths';
import DashboardContainer from './DashboardContainer';
import EmptyLoanHistory from './EmptyLoanHistory';
import LoansList from './LoansList';

const Dashboard = ({user, fetchAllLoans, auth, loadUser, history, loans}) => {
    document.title = `Eazicred Dashboard`

    useEffect(() => {
        loadUser()
        fetchAllLoans()
    }, []);

    const loanData = [...loans.smeLoans, ...loans.paydayLoans]

    const isLoading = () => {
        return auth.loading && loans.loading
    }
    return isLoading() ? <Loader/> : (
        <DashboardContainer>
            <div className="main__middle">
                <h2 className="h2-db">
                    <span style={{textTransform: "capitalize"}}>{`Welcome ${user.firstname}`}</span>
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
                    loanData.length > 0 ? (
                        <LoansList loanData={loanData}/>
                    ) : (
                        <EmptyLoanHistory/>
                    )
                }
            </div>
        </DashboardContainer>
    )
}

const mapState = (state) => {
    return {
        user: state.auth.user,
        auth: state.auth,
        loans: state.userLoans,
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadUser: () => dispatch(getUser()),
        fetchAllLoans: () => dispatch(fetchAllUserLoans()),
    }
}

export default connect(mapState, mapDispatch)(Dashboard);