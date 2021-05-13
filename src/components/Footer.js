import React from 'react';

import { Link } from 'react-router-dom';

import {
  ABOUT_URL,
  FAQS_URL,
  HOME_URL,
  REGISTER_URL,
  SUPPORT_URL,
} from '../routes/paths';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__col--1">
                        <Link to={HOME_URL} className="footer__logo">EaziCred</Link>
                        <p>We understand that sometimes people need to get to the next stage of their lives, careers or
                            businesses but can have financial limits.</p>
                    </div>
                    <div className="footer__col--2">
                        <h6 className="footer__heading">Menu</h6>
                        <ul>
                            <li>
                                <Link to={REGISTER_URL} className="footer__link">Create Account</Link>
                            </li>
                            <li>
                                <Link to={SUPPORT_URL} className="footer__link">Support</Link>
                            </li>
                            <li>
                                <Link to={FAQS_URL} className="footer__link">FAQs</Link>
                            </li>
                            <li>
                                <Link to={ABOUT_URL} className="footer__link">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col--3">
                        <h6 className="footer__heading">Legal</h6>
                        <ul>
                            <li>
                                <Link to={SUPPORT_URL} className="footer__link">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to={SUPPORT_URL} className="footer__link">Terms Of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col--4">
                        <h6 className="footer__heading">Contacts</h6>
                        <p>Feel free get in touch with us via phone or send us a message</p>
                        <ul>
                            <li>
                                <a href="tel:+2349016888927" className="footer__link">+234 901 688 8927</a>
                            </li>
                            <li>
                                <a href="mailto:contact@eazicred.com" className="footer__link">contact@eazicred.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

