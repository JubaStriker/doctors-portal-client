import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { ThemeContext } from '../../Context/Theme/ThemeProvider';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const { toggleTheme } = useContext(ThemeContext)
    let theme = "doctortheme"
    if (toggleTheme) {
        theme = "doctortheme";
    }
    else {
        theme = "dark";
    }


    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div data-theme={`${theme}`}>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My appointments</Link></li>

                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allUsers'>All users</Link></li>
                                <li><Link to='/dashboard/addDoctor'>Add A Doctor</Link></li>
                            </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;;