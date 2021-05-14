import React from 'react';

import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

import About from './components/About';
import History from './components/Dashboard/History';
import LoanApplication from './components/Dashboard/LoanApplication';
import Faqs from './components/FAQs';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Privacy from './components/Privacy';
import ProtectedRoute from './components/ProtectedRoute';
import Support from './components/Support';
import Terms from './components/Terms';
import ConsumerContainer from './containers/dashboard/ConsumerContainer';
import DashboardContainer from './containers/dashboard/DashboardContainer';
import ProfileContainer from './containers/dashboard/ProfileContainer';
import SettingsContainer from './containers/dashboard/SettingsContainer';
import SMEContainer from './containers/dashboard/SMEContainer';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import {
  ABOUT_URL,
  DASHBOARD_CONSUMER_LOAN_APPLICATION_URL,
  DASHBOARD_HISTORY_URL,
  DASHBOARD_LOAN_APPLICATION_URL,
  DASHBOARD_PROFILE_URL,
  DASHBOARD_SETTING_URL,
  DASHBOARD_SME_LOAN_APPLICATION_URL,
  DASHBOARD_URL,
  FAQS_URL,
  HOME_URL,
  LOGIN_URL,
  PRIVACY_URL,
  REGISTER_URL,
  SUPPORT_URL,
  TERMS_URL,
} from './routes/paths';

function App() {
    const location = useLocation()
    const auth = [
        LOGIN_URL,
        REGISTER_URL,
        DASHBOARD_URL,
        DASHBOARD_PROFILE_URL,
        DASHBOARD_SETTING_URL,
        DASHBOARD_LOAN_APPLICATION_URL,
        DASHBOARD_SME_LOAN_APPLICATION_URL,
        DASHBOARD_CONSUMER_LOAN_APPLICATION_URL,
        DASHBOARD_HISTORY_URL
    ]
    return (
        <React.Fragment>

            {!auth.includes(location.pathname) && <Navbar/>}
            <Switch>
                <Route path={LOGIN_URL} component={LoginContainer}/>
                <Route path={REGISTER_URL} component={RegisterContainer}/>
                <Route path={ABOUT_URL} component={About}/>
                <Route exact path={HOME_URL} component={Home}/>
                <Route path={SUPPORT_URL} component={Support}/>
                <Route path={FAQS_URL} component={Faqs}/>
                <Route path={TERMS_URL} component={Terms}/>
                <Route path={PRIVACY_URL} component={Privacy}/>
                <ProtectedRoute exact path={DASHBOARD_URL} component={DashboardContainer}/>
                <ProtectedRoute path={DASHBOARD_PROFILE_URL} component={ProfileContainer}/>
                <ProtectedRoute path={DASHBOARD_SETTING_URL} component={SettingsContainer}/>
                <ProtectedRoute path={DASHBOARD_CONSUMER_LOAN_APPLICATION_URL} component={ConsumerContainer}/>
                <ProtectedRoute path={DASHBOARD_SME_LOAN_APPLICATION_URL} component={SMEContainer}/>
                <ProtectedRoute path={DASHBOARD_LOAN_APPLICATION_URL} component={LoanApplication}/>
                <ProtectedRoute path={DASHBOARD_HISTORY_URL} component={History}/>
            </Switch>
            {!auth.includes(location.pathname) && <Footer/>}
        </React.Fragment>
    );
}

export default App;
