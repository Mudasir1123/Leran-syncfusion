import React, { useState } from 'react';
import { TextBox, NumericTextBox } from '@syncfusion/react-inputs';
import { Button, RadioButton } from '@syncfusion/react-buttons';
import { DropDownList } from '@syncfusion/react-dropdowns';
import { Tooltip } from '@syncfusion/react-popups';
import { Dialog } from '@syncfusion/react-popups';
import { Grid, Columns, Column } from '@syncfusion/react-grid';
import './Contact.css';

const faqData = [
    { question: 'How fast is the SyncPro dashboard?', answer: 'SyncPro renders up to 100,000 rows in under 50ms using Syncfusion\'s virtualized grid engine.' },
    { question: 'Is there a free trial?', answer: 'Yes! You get a full 30-day free trial with access to all Pro features — no credit card required.' },
    { question: 'Can I export order data?', answer: 'Absolutely. You can export to CSV, Excel, and PDF from the dashboard at any time.' },
    { question: 'What countries are supported?', answer: 'SyncPro supports shipping data from 40+ countries with full localization and currency formatting.' },
];

const supportChannels = [
    { icon: '💬', title: 'Live Chat', desc: 'Available Mon–Fri, 9am–6pm EST. Average response: < 3 min.', color: '#6366f1', btn: 'Start Chat' },
    { icon: '📧', title: 'Email Support', desc: 'Send detailed issues to support@syncpro.com. Response < 4 hrs.', color: '#10b981', btn: 'Send Email' },
    { icon: '📞', title: 'Phone Support', desc: 'Enterprise customers: +1 (555) 000-1234. Available 24/7.', color: '#f59e0b', btn: 'Call Now' },
    { icon: '📖', title: 'Documentation', desc: 'Explore our full API docs, guides, and video tutorials.', color: '#06b6d4', btn: 'Read Docs' },
];

const Contact = () => {
    const subjects = ['General Inquiry', 'Technical Support', 'Billing', 'Partnership', 'Feature Request'];
    const [successDialog, setSuccessDialog] = useState(false);
    const [confirmDialog, setConfirmDialog] = useState(false);
    const [faqOpen, setFaqOpen] = useState(null);
    const [urgency, setUrgency] = useState('Normal');
    const [darkMode, setDarkMode] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmDialog(true);
    };

    const handleConfirmSend = () => {
        setConfirmDialog(false);
        setSuccessDialog(true);
    };

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                {/* Left: Contact Info */}
                <div className="contact-info">
                    <h1>Get in <span className="highlight">Touch</span></h1>
                    <p>Have a question or need support? Our team is here to help you succeed.</p>

                    <div className="info-items">
                        <Tooltip content={<>Visit us at our Silicon Valley headquarters</>} position="RightCenter">
                            <div className="info-item">
                                <span className="e-icons e-location info-icon"></span>
                                <div><h3>Location</h3><p>123 Tech Avenue, Silicon Valley, CA</p></div>
                            </div>
                        </Tooltip>
                        <Tooltip content={<>Click to send us an email directly</>} position="RightCenter">
                            <div className="info-item">
                                <span className="e-icons e-comment-show info-icon"></span>
                                <div><h3>Email</h3>
                                    <a href="mailto:support@syncpro.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <p>support@syncpro.com</p>
                                    </a>
                                </div>
                            </div>
                        </Tooltip>
                        <Tooltip content={<>Call us anytime — we respond within minutes</>} position="RightCenter">
                            <div className="info-item">
                                <span className="e-icons e-phone info-icon"></span>
                                <div><h3>Phone</h3><p>+1 (555) 000-1234</p></div>
                            </div>
                        </Tooltip>
                    </div>

                    {/* Urgency Selector */}
                    <div className="urgency-section">
                        <p style={{ fontWeight: 600, marginBottom: '10px' }}>⚡ Request Priority</p>
                        <div className="urgency-options">
                            {['Normal', 'High', 'Critical'].map((u) => (
                                <RadioButton
                                    key={u}
                                    id={`urgency-${u}`}
                                    label={u}
                                    name="urgency"
                                    value={u}
                                    checked={urgency === u}
                                    onChange={() => setUrgency(u)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Dark mode toggle — just a UI demo */}
                    <div className="toggle-demo" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                        <label className="native-toggle">
                            <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
                            <span className="native-toggle-slider"></span>
                        </label>
                        <span style={{ marginLeft: '10px', fontSize: '0.85rem', opacity: 0.8 }}>
                            {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
                        </span>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <Tooltip content={<>Enter your first and last name</>} position="TopCenter" opensOn="Focus">
                                    <TextBox placeholder="John Doe" floatLabelType="Never" />
                                </Tooltip>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <Tooltip content={<>We'll reply to this email address</>} position="TopCenter" opensOn="Focus">
                                    <TextBox placeholder="john@example.com" floatLabelType="Never" />
                                </Tooltip>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Subject</label>
                                <Tooltip content={<>Select the topic that best describes your inquiry</>} position="TopCenter" opensOn="Focus">
                                    <DropDownList dataSource={subjects} placeholder="Select a subject" />
                                </Tooltip>
                            </div>
                            <div className="form-group">
                                <label>Company (Optional)</label>
                                <TextBox placeholder="Your company name" floatLabelType="Never" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Phone Number (Optional)</label>
                            <NumericTextBox placeholder="e.g. 5551234567" format="##########" />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <Tooltip content={<>Tell us how we can help — be as detailed as you like</>} position="TopCenter" opensOn="Focus">
                                <TextBox multiline={true} placeholder="How can we help you?" rows={5} />
                            </Tooltip>
                        </div>

                        <div className="form-actions">
                            <Tooltip content={<>Clear the form</>} position="TopCenter">
                                <Button cssClass="e-outline" type="reset">🗑️ Clear</Button>
                            </Tooltip>
                            <Tooltip content={<>Review your message before sending</>} position="TopCenter">
                                <Button isPrimary={true} cssClass="e-block submit-btn" type="submit">
                                    📤 Send Message
                                </Button>
                            </Tooltip>
                        </div>
                    </form>
                </div>
            </div>

            {/* Support Channels */}
            <section className="support-channels-section">
                <h2 className="section-title">🛟 How to Reach Us</h2>
                <div className="support-channels-grid">
                    {supportChannels.map((ch, i) => (
                        <div className="support-card" key={i} style={{ '--ch-color': ch.color }}>
                            <div className="support-icon" style={{ color: ch.color }}>{ch.icon}</div>
                            <h3 style={{ color: ch.color }}>{ch.title}</h3>
                            <p>{ch.desc}</p>
                            <Button cssClass="e-outline support-ch-btn" style={{ borderColor: ch.color, color: ch.color }}>
                                {ch.btn}
                            </Button>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section with Grid */}
            <section className="faq-section">
                <h2 className="section-title">❓ Frequently Asked Questions</h2>
                <Grid
                    dataSource={faqData}
                    allowPaging={false}
                    gridLines="Horizontal"
                    rowSelected={(args) => setFaqOpen(args.data)}
                >
                    <Columns>
                        <Column field="question" headerText="Question" width={400}
                            template={(p) => <span style={{ fontWeight: 600, color: '#6366f1' }}>{p.question}</span>}
                        />
                        <Column field="answer" headerText="Answer" />
                    </Columns>
                </Grid>
                {faqOpen && (
                    <div className="faq-selected-answer">
                        <strong>💡 {faqOpen.question}</strong>
                        <p>{faqOpen.answer}</p>
                    </div>
                )}
            </section>

            {/* Confirmation Dialog */}
            <Dialog
                header="📤 Confirm Your Message"
                open={confirmDialog}
                onClose={() => setConfirmDialog(false)}
                style={{ maxWidth: '420px', width: '90vw' }}
                footer={
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                        <Button cssClass="e-outline" onClick={() => setConfirmDialog(false)}>Go Back</Button>
                        <Tooltip content={<>Your message will be sent to our team</>} position="TopCenter">
                            <Button cssClass="e-primary" onClick={handleConfirmSend}>Yes, Send It!</Button>
                        </Tooltip>
                    </div>
                }
            >
                <div className="dialog-confirm-body">
                    <div className="confirm-icon">✉️</div>
                    <p>You're about to send your message to the <strong>SyncPro support team</strong>. Our team typically responds within <strong>2–4 business hours</strong>.</p>
                    <p>Priority: <strong style={{ color: urgency === 'Critical' ? '#ef4444' : urgency === 'High' ? '#f59e0b' : '#10b981' }}>{urgency}</strong></p>
                </div>
            </Dialog>

            {/* Success Dialog */}
            <Dialog
                header="🎉 Message Sent Successfully!"
                open={successDialog}
                onClose={() => setSuccessDialog(false)}
                style={{ maxWidth: '420px', width: '90vw' }}
                footer={<Button cssClass="e-primary" onClick={() => setSuccessDialog(false)}>Awesome, Thanks!</Button>}
            >
                <div className="dialog-success-body">
                    <div className="success-checkmark">✅</div>
                    <p>Your message has been received by our team. We'll get back to you at your provided email address within <strong>2–4 business hours</strong>.</p>
                    <div className="success-details">
                        <div className="success-detail-item"><span>📧</span> Confirmation sent to your inbox</div>
                        <div className="success-detail-item"><span>🕐</span> Estimated response: 2–4 hours</div>
                        <div className="success-detail-item"><span>📞</span> Urgent? Call +1 (555) 000-1234</div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Contact;
