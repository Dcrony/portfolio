import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import useScrollToTop from '../hooks/useScrollToTop';

const MainLayout = ({ theme, toggleTheme }) => {
    useScrollToTop();

    return (
        <div className="app-layout">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main className="page-wrapper">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
