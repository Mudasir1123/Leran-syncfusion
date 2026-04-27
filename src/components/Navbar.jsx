import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@syncfusion/react-buttons';
import { Tooltip } from '@syncfusion/react-popups';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { path: '/', label: 'Home', tooltip: 'Go to Home page' },
        { path: '/dashboard', label: 'Dashboard', tooltip: 'View order management dashboard', primary: true },
        { path: '/products', label: 'Products', tooltip: 'Browse our product catalog' },
        { path: '/services', label: 'Services', tooltip: 'Explore our professional services' },
        { path: '/about', label: 'About', tooltip: 'Learn about our team & mission' },
        { path: '/team', label: 'Team', tooltip: 'Meet our talented experts' },
        { path: '/contact', label: 'Contact', tooltip: 'Get in touch with us' },
        { path: '/components', label: 'Library', tooltip: 'Component Showcase' },
    ];

    return (
        <nav className="custom-navbar glass-panel">
            <div className="navbar-content">
                <Link to="/" className="navbar-brand">
                    <span className="e-icons e-syncfusion-logo brand-icon"></span>
                    <span className="brand-name">SyncPro</span>
                </Link>
                
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <Tooltip key={link.path} content={<>{link.tooltip}</>} position="BottomCenter">
                            <Button 
                                className={`e-flat ${link.primary ? 'e-primary nav-btn-primary' : 'nav-btn'} ${location.pathname === link.path ? 'active-link' : ''}`}
                                onClick={() => navigate(link.path)}
                            >
                                {link.label}
                            </Button>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
