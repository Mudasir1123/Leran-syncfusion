import React, { useState, useContext } from 'react';
import { Button, Checkbox, RadioButton } from '@syncfusion/react-buttons';
import { Link } from 'react-router-dom';
import { Tooltip, Dialog } from '@syncfusion/react-popups';
import { Grid, Columns, Column } from '@syncfusion/react-grid';
import { DropDownList } from '@syncfusion/react-dropdowns';
import { TextBox } from '@syncfusion/react-inputs';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Home.css';

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

const pricingPlans = [
    { name: 'Starter', price: '$9', period: '/mo', color: '#6366f1', features: ['Up to 500 orders', 'Basic filters', 'Email support', '1 user seat'] },
    { name: 'Pro', price: '$29', period: '/mo', color: '#06b6d4', features: ['Unlimited orders', 'Advanced analytics', 'Priority support', '5 user seats'], popular: true },
    { name: 'Enterprise', price: '$99', period: '/mo', color: '#f59e0b', features: ['Custom integrations', 'Dedicated account manager', 'SLA guarantee', 'Unlimited seats'] },
];

const activityData = [
    { event: 'New Order #10548', time: '2 min ago', status: 'Verified', region: 'France' },
    { event: 'Order #10291 Updated', time: '15 min ago', status: 'Pending', region: 'Brazil' },
    { event: 'Order #10333 Shipped', time: '1 hr ago', status: 'Verified', region: 'Germany' },
    { event: 'New Order #10402', time: '3 hr ago', status: 'Pending', region: 'USA' },
    { event: 'Order #10199 Returned', time: '5 hr ago', status: 'False', region: 'Spain' },
];

const Home = () => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(null);
    const [welcomeDialog, setWelcomeDialog] = useState(false);
    const [newsletterInput, setNewsletterInput] = useState('');
    const [notifyEnabled, setNotifyEnabled] = useState(true);
    const [notifyToggle, setNotifyToggle] = useState(true);
    const [selectedPlan, setSelectedPlan] = useState('Monthly');

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
                    <div className="hero-actions button-row">
                        <Link to="/dashboard">
                            <Tooltip content={<>Launch the Order Management Dashboard</>} position="BottomCenter">
                                <Button className="e-primary e-xlarge hero-btn">
                                    Get Started
                                </Button>
                            </Tooltip>
                        </Link>

                        <Tooltip content={<>Discover what makes SyncPro powerful</>} position="BottomCenter">
                            <Button
                                className="e-outline e-xlarge hero-btn-secondary"
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

            {/* Stats Strip */}
            <section className="stats-strip">
                {[
                    { icon: '📦', value: '120K+', label: 'Orders Processed' },
                    { icon: '🌍', value: '40+', label: 'Countries' },
                    { icon: '⚡', value: '<50ms', label: 'Avg. Load Time' },
                    { icon: '🔒', value: '99.99%', label: 'Uptime SLA' },
                ].map((s, i) => (
                    <div className="strip-stat" key={i}>
                        <span className="strip-icon">{s.icon}</span>
                        <span className="strip-value">{s.value}</span>
                        <span className="strip-label">{s.label}</span>
                    </div>
                ))}
            </section>

            {/* Features Section */}
            <section className="features-grid">
                <Tooltip content={<>Click to learn how Smart Search works</>} position="TopCenter">
                    <div
                        className="feature-card feature-card-clickable"
                        onClick={() => openFeatureDialog('search')}
                        role="button" tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openFeatureDialog('search')}
                    >
                        <span className="e-icons e-search feature-icon"></span>
                        <h3>Smart Search</h3>
                        <p>Instantly find any order with our powerful global filtering system.</p>
                        <span className="feature-learn-more">Click to learn more →</span>
                    </div>
                </Tooltip>

                <Tooltip content={<>Click to explore customization options</>} position="TopCenter">
                    <div
                        className="feature-card feature-card-clickable"
                        onClick={() => openFeatureDialog('customize')}
                        role="button" tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openFeatureDialog('customize')}
                    >
                        <span className="e-icons e-settings feature-icon"></span>
                        <h3>Fully Customizable</h3>
                        <p>Tailor your dashboard to fit your unique business requirements.</p>
                        <span className="feature-learn-more">Click to learn more →</span>
                    </div>
                </Tooltip>

                <Tooltip content={<>Click to see how tracking verification works</>} position="TopCenter">
                    <div
                        className="feature-card feature-card-clickable"
                        onClick={() => openFeatureDialog('tracking')}
                        role="button" tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openFeatureDialog('tracking')}
                    >
                        <span className="e-icons e-check feature-icon"></span>
                        <h3>Verified Tracking</h3>
                        <p>Ensure every order is processed and verified with real-time updates.</p>
                        <span className="feature-learn-more">Click to learn more →</span>
                    </div>
                </Tooltip>
            </section>

            {/* Buttons Showcase */}
            <section className="section-block">
                <h2 className="section-title">🎨 Button Styles</h2>
                <p className="section-sub">All the Syncfusion button variants in one place.</p>
                <div className="btn-showcase">
                    <Button className="e-primary">Primary</Button>
                    <Button className="e-success">Success</Button>
                    <Button className="e-warning">Warning</Button>
                    <Button className="e-danger">Danger</Button>
                    <Button className="e-info">Info</Button>
                    <Button className="e-outline e-primary">Outline Primary</Button>
                    <Button className="e-outline e-success">Outline Success</Button>
                    <Button className="e-flat e-primary">Flat Primary</Button>
                    <Button className="e-round e-primary e-icon-btn" iconCss="e-icons e-search" />
                    <Button className="e-primary" iconCss="e-icons e-download" iconPosition="Left">Download</Button>
                </div>

                <div className="toggle-row button-row" style={{ marginTop: '32px', background: 'var(--bg-secondary)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                    <div className="toggle-item" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <label className="native-toggle">
                            <input type="checkbox" checked={notifyEnabled} onChange={(e) => setNotifyEnabled(e.target.checked)} />
                            <span className="native-toggle-slider"></span>
                        </label>
                        <span style={{ fontWeight: 500 }}>Notifications {notifyEnabled ? 'Enabled' : 'Disabled'}</span>
                    </div>
                    <div className="toggle-item" style={{ borderLeft: '1px solid var(--border)', paddingLeft: '20px' }}>
                        <Checkbox id="home-cb-1" label="Remember Session" checked={true} />
                    </div>
                    <div className="toggle-item" style={{ borderLeft: '1px solid var(--border)', paddingLeft: '20px', display: 'flex', gap: '16px' }}>
                        <RadioButton id="home-rb-1" label="Free" name="plan" value="Free" />
                        <RadioButton id="home-rb-2" label="Pro" name="plan" value="Pro" checked={true} />
                    </div>
                </div>
            </section>

            {/* Billing Toggle + Pricing Cards */}
            <section className="section-block pricing-section">
                <h2 className="section-title">💳 Choose Your Plan</h2>
                <p className="section-sub">Simple, transparent pricing with no hidden fees.</p>

                <div className="billing-toggle">
                    <DropDownList
                        dataSource={['Monthly', 'Annually']}
                        value={selectedPlan}
                        onChange={(e) => setSelectedPlan(e.value)}
                        width="180px"
                        placeholder="Billing Cycle"
                    />
                </div>

                <div className="pricing-grid">
                    {pricingPlans.map((plan, i) => (
                        <div key={i} className={`pricing-card ${plan.popular ? 'popular' : ''}`} style={{ '--plan-color': plan.color }}>
                            {plan.popular && <div className="popular-badge">⭐ Most Popular</div>}
                            <h3 style={{ color: plan.color }}>{plan.name}</h3>
                            <div className="price-display">
                                <span className="price">{plan.price}</span>
                                <span className="period">{selectedPlan === 'Annually' ? '/yr' : plan.period}</span>
                            </div>
                            <ul className="plan-features">
                                {plan.features.map((f, j) => <li key={j}>✓ {f}</li>)}
                            </ul>
                            <Button className="e-primary plan-btn" style={{ background: plan.color, border: 'none' }}>
                                Get {plan.name}
                            </Button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recent Activity Grid */}
            <section className="section-block">
                <h2 className="section-title">📋 Live Activity Feed</h2>
                <p className="section-sub">Latest events from your order pipeline.</p>
                <Grid dataSource={activityData} allowPaging={false} gridLines="Horizontal">
                    <Columns>
                        <Column field="event" headerText="Event" width={220} />
                        <Column field="region" headerText="Region" width={130} />
                        <Column field="status" headerText="Status" width={130}
                            template={(props) => (
                                <span style={{
                                    padding: '3px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600,
                                    background: props.status === 'Verified' ? '#10b98120' : props.status === 'Pending' ? '#f59e0b20' : '#ef444420',
                                    color: props.status === 'Verified' ? '#10b981' : props.status === 'Pending' ? '#f59e0b' : '#ef4444',
                                }}>
                                    {props.status}
                                </span>
                            )}
                        />
                        <Column field="time" headerText="Time" width={130} />
                    </Columns>
                </Grid>
            </section>

            {/* Newsletter Section */}
            <section className="section-block newsletter-section">
                <div className="newsletter-inner">
                    <h2>📬 Stay in the Loop</h2>
                    <p>Get the latest SyncPro updates, tips, and announcements delivered to your inbox.</p>
                    <div className="newsletter-form">
                        <TextBox
                            placeholder="Enter your email address..."
                            value={newsletterInput}
                            onChange={(e) => setNewsletterInput(e.value)}
                            width="320px"
                        />
                        <Button className="e-primary newsletter-btn" iconCss="e-icons e-send">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </section>

            {/* Feature Detail Dialog */}
            <Dialog
                header={info.title}
                open={dialogVisible}
                onClose={() => setDialogVisible(false)}
                style={{ maxWidth: '480px', width: '90vw' }}
                footer={
                    <Button className="e-primary" onClick={() => setDialogVisible(false)}>
                        Got it!
                    </Button>
                }
            >
                <div className="dialog-feature-body">
                    <p className="dialog-feature-desc">{info.description}</p>
                    {info.highlights && (
                        <ul className="dialog-highlights">
                            {info.highlights.map((h, i) => (
                                <li key={i}><span className="highlight-dot">✦</span> {h}</li>
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
                        <Button className="e-outline" onClick={() => setWelcomeDialog(false)}>Close</Button>
                        <Link to="/dashboard" onClick={() => setWelcomeDialog(false)}>
                            <Button className="e-primary">Open Dashboard →</Button>
                        </Link>
                    </div>
                }
            >
                <div className="dialog-welcome-body">
                    <p><strong>SyncPro</strong> is a next-generation order management platform powered by Syncfusion React components. Here's what you get:</p>
                    <div className="welcome-feature-list">
                        {[
                            { icon: '📊', title: 'Real-Time Dashboard', desc: 'Monitor all orders live with instant data refresh and status badges.' },
                            { icon: '🔍', title: 'Global Smart Search', desc: 'Search across every field — name, address, country, charges — instantly.' },
                            { icon: '🌍', title: 'Country & Status Filters', desc: 'Drill down by country or verification status with one click.' },
                            { icon: '⚡', title: 'Blazing Fast Performance', desc: 'Handle thousands of records with Syncfusion\'s optimized grid engine.' },
                        ].map((f, i) => (
                            <div className="welcome-feature-item" key={i}>
                                <span className="welcome-icon">{f.icon}</span>
                                <div><strong>{f.title}</strong><p>{f.desc}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Home;
