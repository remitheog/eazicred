import React from 'react';

import { useDispatch } from 'react-redux';
import {
  NavLink,
  useHistory,
} from 'react-router-dom';

import { logoutRequest } from '../../redux/actions/actions';
import {
  DASHBOARD_HISTORY_URL,
  DASHBOARD_LOAN_APPLICATION_URL,
  DASHBOARD_PROFILE_URL,
  DASHBOARD_SETTING_URL,
  DASHBOARD_URL,
  HOME_URL,
} from '../../routes/paths';

const SideBar = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogOut = () => {
        if(window.confirm("Are you sure you want want to logout of this session?")){
            dispatch(logoutRequest())
            history.push(HOME_URL)
        }
    }
    return (
        <aside className="sidebar">
            <a href className="logo-db">EaziCred</a>
            <h4 className="h4-db">Main</h4>
            <ul className="sidebar-list">
                <li>
                    <NavLink exact activeClassName="active" to={DASHBOARD_URL}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={DASHBOARD_LOAN_APPLICATION_URL}>Loan Applications</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={DASHBOARD_HISTORY_URL}>History</NavLink>
                </li>
            </ul>
            <h4 className="h4-db">Account Management</h4>
            <ul className="sidebar-list">
                <li>
                    <NavLink activeClassName="active" to={DASHBOARD_SETTING_URL}>Settings</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active"  to={DASHBOARD_PROFILE_URL}>Profile</NavLink>
                </li>
            </ul>
            <div>
                <button className="logout-btn" onClick={handleLogOut}>Log Out</button>
            </div>
        </aside>
    );
}

export default SideBar;