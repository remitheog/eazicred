import React from 'react';

import SideBar from './SideBar';

const LoanApplication = () => {
    return (
        <div className="dashboard">
            <div className="container-lg">
                <SideBar/>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">Loan Applications</h3>
                        <img src="assets/login-image.png" className="user-picture" alt="" />
                    </div>
                    <div className="main__middle">
                        <span className="go-back">&lt; Go Back</span>
                        <h2 className="h2-db">Apply For Loan</h2>
                        <p className="p2-db">Select a loan type from the options below to continue</p>
                    </div>
                    <div className="main__loan-overview">
                        <div className="loan-types">
                            <a href className="consumer-loan active">
                                <div>
                                    <h3 className="h3-db">Consumer Loans</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </a>
                            <a href className="sme-loan">
                                <div>
                                    <h3 className="h3-db">SME Loans</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </a>
                        </div>
                        <button className="btn btn-blue">Start My Application</button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default LoanApplication;