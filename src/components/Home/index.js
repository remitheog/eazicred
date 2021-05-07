import React from 'react';

import OnPageSignUp from '../OnPageSignUp';
import BestChoice from './BestChoice';
import Eligibility from './Eligibility';
import HomeHeader from './HeaderHome';
import Loan from './Loan';
import LoanCalculator from './LoanCalculator';
import Stats from './Stats';
import Testimonial from './Testimonial';

const Home = () => {
    document.title = "EaziCred - Better Loan Offers"
    return (
        <React.Fragment>
            <HomeHeader/>
            <Stats/>
            <BestChoice/>
            <OnPageSignUp/>
            <Loan/>
            <Eligibility/>
            <Testimonial/>
            <LoanCalculator/>
        </React.Fragment>
    )
}
export default Home