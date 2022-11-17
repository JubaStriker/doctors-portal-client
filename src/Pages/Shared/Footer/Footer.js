import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../Context/Theme/ThemeProvider';
import appointment from '../../../assets/images/appointment.png'
const Footer = () => {
    const { toggleTheme } = useContext(ThemeContext)

    let theme = "doctortheme"

    if (toggleTheme) {
        theme = "doctortheme";
    }
    else {
        theme = "dark";
    }
    return (
        <div data-theme={`${theme}`} style={{
            background: `url(${appointment})`
        }}>
            <footer className="p-10 text-neutral-content mt-24">
                <div className='footer'>
                    <div>
                        <span className="footer-title">Services</span>
                        <Link className="link link-hover">Design</Link>
                        <Link className="link link-hover">Marketing</Link>
                        <Link className="link link-hover">Advertisement</Link>
                        <Link className="link link-hover">Branding</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Jobs</Link>
                        <Link className="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </div>
                </div>
                <div className='text-center'>Copyright 2022 All Rights Reserved</div>
            </footer>
        </div >
    );
};

export default Footer;