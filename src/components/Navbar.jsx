import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@syncfusion/react-buttons';
import { Tooltip } from '@syncfusion/react-popups';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="custom-navbar">
            <div className="navbar-content">
                <div className="navbar-brand">
                    <span className="e-icons e-syncfusion-logo brand-icon"></span>
                    <span className="brand-name">SyncPro</span>
                </div>
                <div className="e-appbar-spacer"></div>
                <div className="navbar-links">
                    <Tooltip content={<>Go to Home page</>} position="BottomCenter">
                        <Link to="/">
                            <Button cssClass={`e-flat ${location.pathname === '/' ? 'active-link' : ''}`}>
                                Home
                            </Button>
                        </Link>
                    </Tooltip>

                    <Tooltip content={<>Learn about our team & mission</>} position="BottomCenter">
                        <Link to="/about">
                            <Button cssClass={`e-flat ${location.pathname === '/about' ? 'active-link' : ''}`}>
                                About
                            </Button>
                        </Link>
                    </Tooltip>

                    <Tooltip content={<>Send us a message</>} position="BottomCenter">
                        <Link to="/contact">
                            <Button cssClass={`e-flat ${location.pathname === '/contact' ? 'active-link' : ''}`}>
                                Contact
                            </Button>
                        </Link>
                    </Tooltip>

                    <Tooltip content={<>View order management dashboard</>} position="BottomCenter">
                        <Link to="/dashboard">
                            <Button cssClass={`e-flat e-primary dashboard-btn ${location.pathname === '/dashboard' ? 'active-link' : ''}`}>
                                Dashboard
                            </Button>
                        </Link>
                    </Tooltip>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
