import React, { useState } from 'react';
import { TextBox } from '@syncfusion/react-inputs';
import { Button } from '@syncfusion/react-buttons';
import { DropDownList } from '@syncfusion/react-dropdowns';
import { Tooltip } from '@syncfusion/react-popups';
import { Dialog } from '@syncfusion/react-popups';
import './Contact.css';

const Contact = () => {
    const subjects = ['General Inquiry', 'Technical Support', 'Billing', 'Partnership'];
    const [successDialog, setSuccessDialog] = useState(false);
    const [confirmDialog, setConfirmDialog] = useState(false);

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
                                <div>
                                    <h3>Location</h3>
                                    <p>123 Tech Avenue, Silicon Valley, CA</p>
                                </div>
                            </div>
                        </Tooltip>

                        <Tooltip content={<>Click to send us an email directly</>} position="RightCenter">
                            <div className="info-item">
                                <span className="e-icons e-comment-show info-icon"></span>
                                <div>
                                    <h3>Email</h3>
                                    <a href="mailto:support@syncpro.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <p>support@syncpro.com</p>
                                    </a>
                                </div>
                            </div>
                        </Tooltip>

                        <Tooltip content={<>Call us anytime — we respond within minutes</>} position="RightCenter">
                            <div className="info-item">
                                <span className="e-icons e-phone info-icon"></span>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+1 (555) 000-1234</p>
                                </div>
                            </div>
                        </Tooltip>
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

                        <div className="form-group">
                            <label>Subject</label>
                            <Tooltip content={<>Select the topic that best describes your inquiry</>} position="TopCenter" opensOn="Focus">
                                <DropDownList dataSource={subjects} placeholder="Select a subject" />
                            </Tooltip>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <Tooltip content={<>Tell us how we can help — be as detailed as you like</>} position="TopCenter" opensOn="Focus">
                                <TextBox multiline={true} placeholder="How can we help you?" rows={5} />
                            </Tooltip>
                        </div>

                        <Tooltip content={<>Review your message before sending</>} position="TopCenter">
                            <Button isPrimary={true} cssClass="e-block submit-btn" type="submit">
                                Send Message
                            </Button>
                        </Tooltip>
                    </form>
                </div>
            </div>

            {/* Confirmation Dialog — before sending */}
            <Dialog
                header="📤 Confirm Your Message"
                open={confirmDialog}
                onClose={() => setConfirmDialog(false)}
                style={{ maxWidth: '420px', width: '90vw' }}
                footer={
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                        <Button cssClass="e-outline" onClick={() => setConfirmDialog(false)}>
                            Go Back
                        </Button>
                        <Tooltip content={<>Your message will be sent to our team</>} position="TopCenter">
                            <Button cssClass="e-primary" onClick={handleConfirmSend}>
                                Yes, Send It!
                            </Button>
                        </Tooltip>
                    </div>
                }
            >
                <div className="dialog-confirm-body">
                    <div className="confirm-icon">✉️</div>
                    <p>
                        You're about to send your message to the <strong>SyncPro support team</strong>.
                        Our team typically responds within <strong>2–4 business hours</strong>.
                    </p>
                    <p>Are you ready to submit?</p>
                </div>
            </Dialog>

            {/* Success Dialog — after sending */}
            <Dialog
                header="🎉 Message Sent Successfully!"
                open={successDialog}
                onClose={() => setSuccessDialog(false)}
                style={{ maxWidth: '420px', width: '90vw' }}
                footer={
                    <Button cssClass="e-primary" onClick={() => setSuccessDialog(false)}>
                        Awesome, Thanks!
                    </Button>
                }
            >
                <div className="dialog-success-body">
                    <div className="success-checkmark">✅</div>
                    <p>
                        Your message has been received by our team. We'll get back to you at your
                        provided email address within <strong>2–4 business hours</strong>.
                    </p>
                    <div className="success-details">
                        <div className="success-detail-item">
                            <span>📧</span> Confirmation sent to your inbox
                        </div>
                        <div className="success-detail-item">
                            <span>🕐</span> Estimated response: 2–4 hours
                        </div>
                        <div className="success-detail-item">
                            <span>📞</span> Urgent? Call +1 (555) 000-1234
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Contact;
