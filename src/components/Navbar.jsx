import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@syncfusion/react-buttons';
import { Tooltip } from '@syncfusion/react-popups';
import './Navbar.css';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import Cart from './Cart';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cart } = useContext(CartContext);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [showCart, setShowCart] = useState(false);

    const navLinks = [
        { path: '/', label: 'Home', tooltip: 'Go to Home page' },
        { path: '/dashboard', label: 'Dashboard', tooltip: 'View order management dashboard', primary: true },
        { path: '/products', label: 'Products', tooltip: 'Browse our product catalog' },
        { path: '/services', label: 'Services', tooltip: 'Explore our professional services' },
        { path: '/about', label: 'About', tooltip: 'Learn about our team & mission' },
        { path: '/team', label: 'Team', tooltip: 'Meet our talented experts' },
        { path: '/contact', label: 'Contact', tooltip: 'Get in touch with us' },
        { path: '/components', label: 'Library', tooltip: 'Component Showcase' },
        { path: '/pricing', label: 'Pricing', tooltip: 'View our subscription plans' },
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
                    {/* Cart Icon */}
                    <Button className="cart-icon-btn" onClick={() => setShowCart((v) => !v)}>
                        <span role="img" aria-label="cart" style={{ fontSize: 24 }}>🛒</span>
                        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
                    </Button>
                    {/* Settings Icon */}
                    <Tooltip content="Open App Settings" position="BottomCenter">
                        <Button className="settings-icon-btn" onClick={() => navigate('/settings')}>
                            <span role="img" aria-label="settings" style={{ fontSize: 22 }}>⚙️</span>
                        </Button>
                    </Tooltip>
                    {/* Theme Toggle */}
                    <Button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle theme">
                        {isDarkMode ? (
                            <span role="img" aria-label="sun" style={{ fontSize: 22 }}>🌞</span>
                        ) : (
                            <span role="img" aria-label="moon" style={{ fontSize: 22 }}>🌙</span>
                        )}
                    </Button>
                </div>
            </div>
            {showCart && <Cart onClose={() => setShowCart(false)} />}
        </nav>
    );
};

export default Navbar;
