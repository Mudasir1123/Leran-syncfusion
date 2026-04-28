import React, { useState } from 'react';
import { Button } from '@syncfusion/react-buttons';
import { Tooltip } from '@syncfusion/react-popups';
import { Link } from 'react-router-dom';
import '../styles/Pricing.css';

const pricingPlans = [
    {
        name: 'Starter',
        price: '$9',
        period: '/mo',
        description: 'Perfect for freelancers and small projects.',
        color: '#6366f1',
        features: [
            'Up to 500 orders',
            'Basic filtering',
            'Email support',
            '1 user seat',
            'Community access'
        ]
    },
    {
        name: 'Pro',
        price: '$29',
        period: '/mo',
        description: 'The standard for growing businesses.',
        color: '#06b6d4',
        popular: true,
        features: [
            'Unlimited orders',
            'Advanced analytics',
            'Priority email support',
            '5 user seats',
            'Custom branding',
            'API access'
        ]
    },
    {
        name: 'Enterprise',
        price: '$99',
        period: '/mo',
        description: 'Advanced features for large organizations.',
        color: '#f59e0b',
        features: [
            'Dedicated infrastructure',
            '24/7 Phone support',
            'Unlimited user seats',
            'SLA Guarantee',
            'Custom integrations',
            'Security audit logs'
        ]
    }
];

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('Monthly');

    return (
        <div className="pricing-page-container">
            <header className="pricing-header">
                <h1>Flexible <span className="highlight">Pricing</span> Plans</h1>
                <p>Choose the plan that best fits your business needs. Scale up or down anytime.</p>
                
                <div className="billing-switcher">
                    <span className={billingCycle === 'Monthly' ? 'active' : ''}>Monthly</span>
                    <label className="native-toggle">
                        <input 
                            type="checkbox" 
                            checked={billingCycle === 'Annually'} 
                            onChange={() => setBillingCycle(prev => prev === 'Monthly' ? 'Annually' : 'Monthly')} 
                        />
                        <span className="native-toggle-slider"></span>
                    </label>
                    <span className={billingCycle === 'Annually' ? 'active' : ''}>
                        Annually <span className="discount-tag">Save 20%</span>
                    </span>
                </div>
            </header>

            <div className="pricing-grid-detailed">
                {pricingPlans.map((plan, i) => (
                    <div key={i} className={`pricing-card-large ${plan.popular ? 'popular' : ''}`} style={{ '--plan-color': plan.color }}>
                        {plan.popular && <div className="popular-ribbon">Best Value</div>}
                        <div className="card-top">
                            <h2 style={{ color: plan.color }}>{plan.name}</h2>
                            <p className="plan-desc">{plan.description}</p>
                            <div className="price-box">
                                <span className="currency">$</span>
                                <span className="amount">{billingCycle === 'Annually' ? (parseInt(plan.price.slice(1)) * 10 * 0.8 / 10).toFixed(0) : plan.price.slice(1)}</span>
                                <span className="period">{plan.period}</span>
                            </div>
                        </div>
                        <ul className="plan-feature-list">
                            {plan.features.map((f, j) => (
                                <li key={j}>
                                    <span className="check-icon" style={{ color: plan.color }}>✓</span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <div className="card-bottom">
                            <Link to="/checkout" className="plan-link">
                                <Button className="e-primary e-xlarge plan-action-btn" style={{ background: plan.color, border: 'none' }}>
                                    Start with {plan.name}
                                </Button>
                            </Link>
                            <p className="no-card">No credit card required</p>
                        </div>
                    </div>
                ))}
            </div>

            <section className="faq-teaser">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h3>Can I change plans later?</h3>
                        <p>Yes, you can upgrade or downgrade your plan at any time from your dashboard settings.</p>
                    </div>
                    <div className="faq-item">
                        <h3>What payment methods do you accept?</h3>
                        <p>We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
                    </div>
                </div>
                <div style={{ marginTop: '40px' }}>
                    <Button className="e-outline">View All FAQs</Button>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
