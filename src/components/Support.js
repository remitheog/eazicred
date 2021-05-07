import React from 'react';

import OnPageSignUp from './OnPageSignUp';
import SupportHeader from './SupportHeader';

const Support = () => {
    document.title = 'Eazicred - Support'
    return (
        <React.Fragment>
            <SupportHeader/>
            <OnPageSignUp/>
        </React.Fragment>
    );
}

export default Support;