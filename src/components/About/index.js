import React from 'react';

import OnPageSignUp from '../OnPageSignUp';
import AboutHeader from './AboutHeader';
import Info from './Info';
import TeamGallery from './TeamGallery';

const About = () => {
    document.title = "EaziCred - About Us"
    return (
        <React.Fragment>
            <AboutHeader/>
            <Info/>
            <TeamGallery/>
            <OnPageSignUp/>
        </React.Fragment>
    )
}
export default About