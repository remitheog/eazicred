import React from 'react';

import { Link } from 'react-router-dom';

import {
  ABOUT_URL,
  FAQS_URL,
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
  SUPPORT_URL,
} from '../routes/paths';

const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <div className="nav__inner">
                    <button className="nav__menu">
                        <i className="fas fa-bars open"></i>
                        <i className="fas fa-times close"></i>
                    </button>

                    <Link to={HOME_URL} className="nav__logo">
                        <img src="assets/eazicred-logo.svg" alt="eazycred logo"/>
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
                        <li className="nav__btns--mobile">
                            <Link to={REGISTER_URL} className="btn btn-blue">Create Account</Link>
                            <Link to={LOGIN_URL}  className="btn btn-white">Log In</Link>
                        </li>
                    </ul>

                    <div className="nav__btns">
                        <Link to={REGISTER_URL} className="btn btn-blue">Create Account</Link>
                        <Link to={LOGIN_URL}  className="btn btn-white">Log In</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar