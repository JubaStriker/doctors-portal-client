import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../Context/Theme/ThemeProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const { toggleTheme } = useContext(ThemeContext)

    let theme = "doctortheme"

    if (toggleTheme) {
        theme = "doctortheme";
    }
    else {
        theme = "dark";
    }
    return (
        <div data-theme={`${theme}`}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;