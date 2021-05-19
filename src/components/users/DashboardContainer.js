import React from 'react';

import { Link } from 'react-router-dom';

import { DASHBOARD_URL } from '../../routes/paths';
import UserSideBar from './UserSideBar';

const DashboardContainer = ({children, page='Dashboard'}) => {

    const handleMenu = (e) => {
        const menuToggleDb = document.querySelector('.main__menu');
        const sidebar = document.querySelector('.sidebar');
        const sidebarLinks = document.querySelectorAll('.sidebar li a');

        menuToggleDb.classList.toggle('active');
        sidebar.classList.toggle('active');

        sidebarLinks.forEach(link => {
            link.addEventListener('click', function () {
                sidebar.classList.remove('active');
            });
        });
    }

    return (
        <div className="dashboard">
            <div className="container-lg">
                <UserSideBar/>
                <main className="main">
                    <div className="main__top">
                        <h3 className="h3-db">{page}</h3>
                        <button className="main__menu" onClick={handleMenu}>
                            <i className="fas fa-bars open"/>
                        </button>
                        <Link className="main__logo" to={DASHBOARD_URL}>EaziCred</Link>
                        <img alt="" src={"assets/login-image.png"}/>
                    </div>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default DashboardContainer;