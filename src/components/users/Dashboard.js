import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import Loader from '../../Common/Loader';
import { getUser } from '../../redux/actions/authThunks';
import DashboardContainer from './DashboardContainer';
import LoansList from './LoansList';

const Dashboard = ({user, auth, loadUser, history}) => {
    document.title = `Eazicred Dashboard`

    useEffect(() => {
        loadUser()
    }, []);



    const isLoading = () => {
        return auth.loading
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
            <LoansList/>
        </DashboardContainer>
    )
}

const mapState = (state) => {
    return {
        user: state.auth.user,
        auth: state.auth,
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadUser: () => dispatch(getUser()),
    }
}

export default connect(mapState, mapDispatch)(Dashboard);