import React from 'react';

import { Link } from 'react-router-dom';

import {
  ABOUT_URL,
  DASHBOARD_LOAN_APPLICATION_URL,
} from '../../routes/paths';

const BestChoice = () => {
    return (
        <section className="choice">
            <div className="container">
                <div className="choice__inner">
                    <div className="choice__text-box">
                        <h2 className="h-2">Why EaziCred Is The Best</h2>
                        <p className="p-2">Choice For You</p>

                        <p className="p">Life happens, emergencies happens. Eazicred is your trusted partner to fill in
                            those financial gaps till you get back on your feet. From the application process to the
                            disbursement of funds to repayment, we make it an EAZI experience for you</p>

                        <div>
                            <Link to={DASHBOARD_LOAN_APPLICATION_URL} className="btn btn-blue">Apply For A Loan</Link>
                            <Link to={ABOUT_URL} className="btn btn-dark">Learn More</Link>
                        </div>
                    </div>
                    <div className="choice__image-box">
                        <img src={"assets/choice-img.png"} alt="a guy who is surprised"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestChoice