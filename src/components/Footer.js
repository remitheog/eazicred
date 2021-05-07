import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__col--1">
                        <a href className="footer__logo">EaziCred</a>
                        <p>We understand that sometimes people need to get to the next stage of their lives, careers or businesses but can have financial limits.</p>
                    </div>
                    <div className="footer__col--2">
                        <h6 className="footer__heading">Menu</h6>
                        <ul>
                            <li>
                                <a href="account.html" className="footer__link">Create Account</a>
                            </li>
                            <li>
                                <a href="support.html" className="footer__link">Contact Us</a>
                            </li>
                            <li>
                                <a href="support.html" className="footer__link">Support</a>
                            </li>
                            <li>
                                <a href="faqs.html" className="footer__link">FAQs</a>
                            </li>
                            <li>
                                <a href className="footer__link">Index Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col--3">
                        <h6 className="footer__heading">Legal</h6>
                        <ul>
                            <li>
                                <a href className="footer__link">Privacy Policy</a>
                            </li>
                            <li>
                                <a href className="footer__link">Terms Of Service</a>
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

