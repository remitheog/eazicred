import React from 'react';

import { Link } from 'react-router-dom';

import { SUPPORT_URL } from '../../routes/paths';

const HomeHeader = () => {
    return (
        <header>
            <div className="hero">
                <div className="hero__inner">
                    <div className="hero__text-box">
                        <h1 className="h-1">Loans For Everyone</h1>
                        <p className="p-1">Apply &amp; Get Credited</p>

                        <form>
                            <input type="text" className="email" placeholder="Type your e-mail"/>
                            <button className="btn btn-blue">Get Started</button>
                        </form>

                        <p>By clicking "Get Started" you confirming that you agree with our following <Link
                            to={SUPPORT_URL}>Terms
                            and Conditions</Link>
                        </p>
                    </div>
                    <div className="hero__image">
                        <img src={"assets/hero-image.png"} alt="a woman smiling"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader