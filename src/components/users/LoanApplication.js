import React from 'react';

import {
  Link,
  useHistory,
} from 'react-router-dom';

import {
  DASHBOARD_CONSUMER_LOAN_APPLICATION_URL,
  DASHBOARD_SME_LOAN_APPLICATION_URL,
  DASHBOARD_URL,
} from '../../routes/paths';
import UserSideBar from './UserSideBar';

const LoanApplication = () => {
    document.title = "Loan Application"
    const handleMouseOver = e => {
        e.target.classList.add("active")
    }
    const handleMouseOut = e => {
        e.target.classList.remove("active")
    }
    const history = useHistory()
    return (
        <div className="dashboard">
            <div className="container-lg">
                <UserSideBar/>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">Loan Applications</h3>
                        <img src={"assets/login-image.png"} className="user-picture" alt="" />
                    </div>
                    <div className="main__middle">
                        <span onClick={() => history.push(DASHBOARD_URL)} style={{cursor: "pointer"}} className="go-back">&lt; Go Back</span>
                        <h2 className="h2-db">Apply For Loan</h2>
                        <p className="p2-db">Select a loan type from the options below to continue</p>
                    </div>

                    <div className="main__loan-overview">
                        <div className="loan-types">
                            <Link onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}
                                  to={DASHBOARD_CONSUMER_LOAN_APPLICATION_URL} className="loan-type consumer-loan">
                                <div>
                                    <h3 className="h3-db">Consumer Loans</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                </div>
                            </Link>
                            <Link onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}
                                  to={DASHBOARD_SME_LOAN_APPLICATION_URL} className="loan-type sme-loan">
                                <div>
                                    <h3 className="h3-db">SME Loans</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                </div>
                            </Link>
                        </div>
                        <button className="btn btn-blue">Start My Application</button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default LoanApplication;