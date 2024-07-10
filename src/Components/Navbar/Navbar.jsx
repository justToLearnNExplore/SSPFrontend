import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import enquiry from '../Assets/enquiry.png';
import logo from '../Assets/logo.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const [authenticated, setAuthenticated] = useState(false);
    
    // Selector to get auth state from Redux store
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (auth && auth.authData) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, [auth]);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        toast.success('Logged out successfully');
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                    <p>SSP</p>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    {menuOpen ? (<FaTimes size={20} style={{ color: '#333' }} />)
                        :
                        (<FaBars size={20} style={{ color: '#333' }} />)}
                </div>
                <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
                    <li>
                        <NavLink
                            exact="true"
                            to="/"
                            activeclassname="active"
                            onClick={toggleMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/program"
                            activeclassname="active"
                            onClick={toggleMenu}
                        >
                            Our Programs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/games"
                            activeclassname="active"
                            onClick={toggleMenu}
                        >
                            Games
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            activeclassname="active"
                            onClick={toggleMenu}
                        >
                            About Us
                        </NavLink>
                    </li>
                    {authenticated ? (
                        <li>
                            <button className="logout-button" onClick={logout}>Logout</button>
                        </li>
                    ) : (
                        <li>
                            <NavLink
                                to="/login"
                                activeclassname="active"
                                onClick={toggleMenu}
                            >
                                <button className="login-button">Login</button>
                            </NavLink>
                        </li>
                    )}
                    <li>
                        <NavLink to="/contactus" onClick={toggleMenu} className="enq-link">
                            <div className="enq-container">
                                <img className="enq-img" src={enquiry} alt="enquiry" />
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
