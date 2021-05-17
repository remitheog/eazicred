import React, { useState } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { USER_TOKEN } from '../constants/local';
import { logoutRequest } from '../redux/actions/actions';
import {
  ABOUT_URL,
  DASHBOARD_URL,
  FAQS_URL,
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
  SUPPORT_URL,
} from '../routes/paths';

const Navbar = ({user, logout}) => {
    const [open, setOpen] = useState(false)
    return (
        <header>
            <nav className="nav">
                <div className="nav__inner">
                    <button onClick={() => setOpen(true)} className="nav__menu">
                        <i className="fas fa-bars open"/>
                    </button>

                    <button onClick={() => setOpen(false)} className="nav__menu">
                        <i className="fas fa-times close"/>
                    </button>

                    <Link to={HOME_URL} className="nav__logo">
                        <img src={"assets/eazicred-logo.svg"} alt="Eazicred logo"/>
                    </Link>

                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to={HOME_URL} className="nav__link">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to={ABOUT_URL} className="nav__link">About Us</Link>
                        </li>
                        <li className="nav__item">
                            <Link to={SUPPORT_URL} className="nav__link">Support</Link>
                        </li>
                        <li className="nav__item">
                            <Link to={FAQS_URL} className="nav__link">FAQs</Link>
                        </li>
                        {JSON.parse(localStorage.getItem(USER_TOKEN)) && (
                            <li className="nav__item">
                                <Link to={DASHBOARD_URL} className="nav__link">Dashboard</Link>
                            </li>
                        )}
                        {open && (
                            <li className="nav__btns--mobile">
                                <Link to={REGISTER_URL} className="btn btn-blue">Create Account</Link>
                                <Link to={LOGIN_URL}  className="btn btn-white">Log In</Link>
                            </li>
                        )}
                    </ul>
                    {!!JSON.parse(localStorage.getItem(USER_TOKEN)) ? (
                        <div className="nav__btns">
                            <button onClick={() => logout()} className="btn btn-blue">Logout</button>
                        </div>
                    ):(
                        <div className="nav__btns">
                            <Link to={REGISTER_URL} className="btn btn-blue">Create Account</Link>
                            <Link to={LOGIN_URL}  className="btn btn-white">Log In</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

const mapState = (state) => {
    return {
        user: state.auth.user
    }
}

const mapDispatch = (dispatch) => {
    return {
        logout: () => dispatch(logoutRequest()),
    }
}

export default connect(mapState, mapDispatch)(Navbar);