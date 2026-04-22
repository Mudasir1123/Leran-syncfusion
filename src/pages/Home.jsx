import React, { useState } from 'react';
import { Button } from '@syncfusion/react-buttons';
import { Link } from 'react-router-dom';
import { Tooltip } from '@syncfusion/react-popups';
import { Dialog } from '@syncfusion/react-popups';
import './Home.css';

const featureDetails = {
    search: {
        title: '🔍 Smart Search',
        description: 'Our intelligent global search scans across all order fields simultaneously — Order ID, Customer Name, Ship Address, Country, Freight charges and verification status. Results appear instantly as you type with real-time filtering.',
        highlights: ['Real-time filtering', 'Multi-field search', 'Case-insensitive matching', 'Supports partial queries'],
    },
    customize: {
        title: '⚙️ Fully Customizable',
        description: 'Every aspect of SyncPro is built to adapt to your business. Filter by country, order status, date ranges, and more. Export data, configure column visibility, and adjust layouts to suit your team\'s workflow.',
        highlights: ['Configurable columns', 'Smart filters', 'Multiple export formats', 'Responsive layouts'],
    },
    tracking: {
        title: '✅ Verified Tracking',
        description: 'Every order flows through our real-time verification pipeline. Track verification status with color-coded badges, receive instant updates, and ensure your team always has accurate, up-to-date information.',
        highlights: ['Live verification badges', 'Status filtering', 'Audit trail support', 'Real-time sync'],
    },
};

const Home = () => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(null);
    const [welcomeDialog, setWelcomeDialog] = useState(false);

    const openFeatureDialog = (feature) => {
        setActiveFeature(featureDetails[feature]);
        setDialogVisible(true);
    };

    const info = activeFeature || {};

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Empower Your Business with <span className="highlight">SyncPro</span>
                    </h1>
                    <p className="hero-subtitle">
                        The ultimate dashboard solution for real-time order tracking,
                        advanced data analytics, and seamless customer management.
                    </p>
                    <div className="hero-actions">
                        <Link to="/dashboard">
                            <Tooltip content={<>Launch the Order Management Dashboard</>} position="BottomCenter">
                                <Button cssClass="e-primary e-xlarge hero-btn">
                                    Get Started
                                </Button>
                            </Tooltip>
                        </Link>

                        <Tooltip content={<>Discover what makes SyncPro powerful</>} position="BottomCenter">
                            <Button
                                cssClass="e-outline e-xlarge hero-btn-secondary"
                                onClick={() => setWelcomeDialog(true)}
                            >
                                Learn More
                            </Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="hero-visual">
                    <Tooltip content={<>Total revenue across all verified orders</>} position="TopCenter">
                        <div className="floating-card c1">
                            <span className="e-icons e-chart"></span>
                            <div className="card-info">
                                <span className="card-label">Revenue</span>
                                <span className="card-value">$42,500</span>
                            </div>
                        </div>
                    </Tooltip>

                    <Tooltip content={<>New customers this month</>} position="TopCenter">
                        <div className="floating-card c2">
                            <span className="e-icons e-people"></span>
                            <div className="card-info">
                                <span className="card-label">Customers</span>
                                <span className="card-value">+1,204</span>
                            </div>
                        </div>
                    </Tooltip>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-grid">
                <Tooltip
                    content={<>Click to learn how Smart Search works</>}
                    position="TopCenter"
                >
                    <div
                        className="feature-card feature-card-clickable"
                        onClick={() => openFeatureDialog('search')}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openFeatureDialog('search')}
                    >
                        <span className="e-icons e-search feature-icon"></span>
                        <h3>Smart Search</h3>
                        <p>Instantly find any order with our powerful global filtering system.</p>
                        <span className="feature-learn-more">Click to learn more →</span>
                    </div>
                </Tooltip>

                <Tooltip
                    content={<>Click to explore customization options</>}
                    position="TopCenter"
                >
                    <div
                        className="feature-card feature-card-clickable"
                        onClick={() => openFeatureDialog('customize')}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openFeatureDialog('customize')}
                    >
                        <span className="e-icons e-settings feature-icon"></span>
                        <h3>Fully Customizable</h3>
                        <p>Tailor your dashboard to fit your unique business requirements.</p>
                        <span className="feature-learn-more">Click to learn more →</span>
                    </div>
                </Tooltip>

                <Tooltip
                    content={<>Click to see how tracking verification works</>}
                    position="TopCenter"
                >
                    <div
                        className="feature-card feature-card-clickable"
                        onClick={() => openFeatureDialog('tracking')}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openFeatureDialog('tracking')}
                    >
                        <span className="e-icons e-check feature-icon"></span>
                        <h3>Verified Tracking</h3>
                        <p>Ensure every order is processed and verified with real-time updates.</p>
                        <span className="feature-learn-more">Click to learn more →</span>
                    </div>
                </Tooltip>
            </section>

            {/* Feature Detail Dialog */}
            <Dialog
                header={info.title}
                open={dialogVisible}
                onClose={() => setDialogVisible(false)}
                style={{ maxWidth: '480px', width: '90vw' }}
                footer={
                    <Button
                        cssClass="e-primary"
                        onClick={() => setDialogVisible(false)}
                    >
                        Got it!
                    </Button>
                }
            >
                <div className="dialog-feature-body">
                    <p className="dialog-feature-desc">{info.description}</p>
                    {info.highlights && (
                        <ul className="dialog-highlights">
                            {info.highlights.map((h, i) => (
                                <li key={i}>
                                    <span className="highlight-dot">✦</span> {h}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </Dialog>

            {/* Welcome / Learn More Dialog */}
            <Dialog
                header="Welcome to SyncPro 🚀"
                open={welcomeDialog}
                onClose={() => setWelcomeDialog(false)}
                style={{ maxWidth: '520px', width: '90vw' }}
                footer={
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                        <Button cssClass="e-outline" onClick={() => setWelcomeDialog(false)}>
                            Close
                        </Button>
                        <Link to="/dashboard" onClick={() => setWelcomeDialog(false)}>
                            <Button cssClass="e-primary">Open Dashboard →</Button>
                        </Link>
                    </div>
                }
            >
                <div className="dialog-welcome-body">
                    <p>
                        <strong>SyncPro</strong> is a next-generation order management platform powered by
                        Syncfusion React components. Here's what you get:
                    </p>
                    <div className="welcome-feature-list">
                        <div className="welcome-feature-item">
                            <span className="welcome-icon">📊</span>
                            <div>
                                <strong>Real-Time Dashboard</strong>
                                <p>Monitor all orders live with instant data refresh and status badges.</p>
                            </div>
                        </div>
                        <div className="welcome-feature-item">
                            <span className="welcome-icon">🔍</span>
                            <div>
                                <strong>Global Smart Search</strong>
                                <p>Search across every field — name, address, country, charges — instantly.</p>
                            </div>
                        </div>
                        <div className="welcome-feature-item">
                            <span className="welcome-icon">🌍</span>
                            <div>
                                <strong>Country & Status Filters</strong>
                                <p>Drill down by country or verification status with one click.</p>
                            </div>
                        </div>
                        <div className="welcome-feature-item">
                            <span className="welcome-icon">⚡</span>
                            <div>
                                <strong>Blazing Fast Performance</strong>
                                <p>Handle thousands of records with Syncfusion's optimized grid engine.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Home;
