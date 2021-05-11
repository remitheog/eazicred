import React from 'react';

import { useSelector } from 'react-redux';
import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

import About from './components/About';
import ConsumerContainer
  from './components/containers/dashboard/ConsumerContainer';
import DashboardContainer
  from './components/containers/dashboard/DashboardContainer';
import SettingsContainer
  from './components/containers/dashboard/SettingsContainer';
import SMEContainer from './components/containers/dashboard/SMEContainer';
import LoginContainer from './components/containers/LoginContainer';
import RegisterContainer from './components/containers/RegisterContainer';
import History from './components/Dashboard/History';
import LoanApplication from './components/Dashboard/LoanApplication';
import LoanModal from './components/Dashboard/LoanModal';
import Profile from './components/Dashboard/Profile';
import Faqs from './components/FAQs';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Support from './components/Support';
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
  REGISTER_URL,
  SUPPORT_URL,
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
    const showNotification = useSelector(state => state.notify.show)
    return (
        <React.Fragment>
            {showNotification && <LoanModal/>}
            {!auth.includes(location.pathname) && <Navbar/>}
            <Switch>
                <Route path={LOGIN_URL} component={LoginContainer}/>
                <Route path={REGISTER_URL} component={RegisterContainer}/>
                <Route path={ABOUT_URL} component={About}/>
                <Route exact path={HOME_URL} component={Home}/>
                <Route path={SUPPORT_URL} component={Support}/>
                <Route path={FAQS_URL} component={Faqs}/>
                <ProtectedRoute exact path={DASHBOARD_URL} component={DashboardContainer}/>
                <ProtectedRoute path={DASHBOARD_PROFILE_URL} component={Profile}/>
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
