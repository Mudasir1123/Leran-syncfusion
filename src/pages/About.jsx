import React, { useState } from 'react';
import { Tooltip } from '@syncfusion/react-popups';
import { Dialog } from '@syncfusion/react-popups';
import { Button } from '@syncfusion/react-buttons';
import './About.css';

const teamMembers = [
    {
        key: 'alex',
        name: 'Alex Johnson',
        role: 'CEO & Founder',
        avatarClass: 't1',
        short: 'Expert in enterprise resource planning and dashboard architecture with over 15 years of experience.',
        bio: 'Alex founded SyncPro with a vision to democratize real-time data intelligence for businesses of all sizes. With a background in enterprise ERP systems and 15+ years in the industry, he has led teams across Fortune 500 companies before starting SyncPro.',
        skills: ['Enterprise Architecture', 'Product Strategy', 'Data Analytics', 'Team Leadership'],
        email: 'alex@syncpro.com',
    },
    {
        key: 'sarah',
        name: 'Sarah Chen',
        role: 'Lead Architect',
        avatarClass: 't2',
        short: 'Specializes in high-scale React applications and data visualization using Syncfusion.',
        bio: 'Sarah is the technical backbone of SyncPro. She architected the entire frontend infrastructure using React and Syncfusion components, ensuring sub-100ms rendering for datasets exceeding 100k records. She is passionate about performance and accessibility.',
        skills: ['React & TypeScript', 'Syncfusion Components', 'Data Visualization', 'Performance Optimization'],
        email: 'sarah@syncpro.com',
    },
    {
        key: 'michael',
        name: 'Michael Ross',
        role: 'UX Designer',
        avatarClass: 't3',
        short: 'Passionate about creating clean, accessible, and professional interfaces users love.',
        bio: 'Michael leads all UX research and design at SyncPro. He uses a data-driven design approach — conducting user interviews and usability tests before every major release. His designs have consistently improved user retention by 30%+ across each version.',
        skills: ['UI/UX Research', 'Figma & Prototyping', 'Accessibility (WCAG)', 'Design Systems'],
        email: 'michael@syncpro.com',
    },
];

const About = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);

    const openMemberDialog = (member) => {
        setSelectedMember(member);
        setDialogVisible(true);
    };

    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About <span className="highlight">SyncPro</span></h1>
                <p>We are redefining the way businesses interact with their data.</p>
            </header>

            <section className="about-content">
                <div className="mission-section">
                    <h2>Our Mission</h2>
                    <p>
                        At SyncPro, our mission is to provide powerful, intuitive, and high-performance
                        dashboard solutions that help businesses make data-driven decisions.
                        We believe that clarity in data leads to excellence in execution.
                    </p>
                </div>

                {/* Team Cards with Tooltip + Dialog */}
                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <Tooltip
                            key={member.key}
                            content={<>Click to view {member.name}'s full profile</>}
                            position="TopCenter"
                        >
                            <div
                                className="e-card team-card team-card-clickable"
                                onClick={() => openMemberDialog(member)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && openMemberDialog(member)}
                            >
                                <div className="e-card-header">
                                    <div className={`e-card-header-image team-avatar ${member.avatarClass}`}></div>
                                    <div className="e-card-header-caption">
                                        <div className="e-card-header-title">{member.name}</div>
                                        <div className="e-card-sub-title">{member.role}</div>
                                    </div>
                                </div>
                                <div className="e-card-content">
                                    {member.short}
                                </div>
                                <div className="team-card-footer">
                                    <span className="team-view-profile">View Profile →</span>
                                </div>
                            </div>
                        </Tooltip>
                    ))}
                </div>

                {/* Stats Section with Tooltips */}
                <div className="stats-section">
                    <Tooltip content={<>Businesses & individuals actively using SyncPro</>} position="TopCenter">
                        <div className="stat-item">
                            <span className="stat-number">10k+</span>
                            <span className="stat-label">Active Users</span>
                        </div>
                    </Tooltip>

                    <Tooltip content={<>Platform availability measured over the last 12 months</>} position="TopCenter">
                        <div className="stat-item">
                            <span className="stat-number">99.9%</span>
                            <span className="stat-label">Uptime</span>
                        </div>
                    </Tooltip>

                    <Tooltip content={<>Our support team is available around the clock, every day</>} position="TopCenter">
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Support</span>
                        </div>
                    </Tooltip>
                </div>
            </section>

            {/* Team Member Detail Dialog */}
            {selectedMember && (
                <Dialog
                    header={`${selectedMember.name} — ${selectedMember.role}`}
                    open={dialogVisible}
                    onClose={() => setDialogVisible(false)}
                    style={{ maxWidth: '500px', width: '90vw' }}
                    footer={
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                            <Tooltip content={<>Send an email to {selectedMember.name}</>} position="TopCenter">
                                <a href={`mailto:${selectedMember.email}`}>
                                    <Button cssClass="e-outline">
                                        ✉️ Email
                                    </Button>
                                </a>
                            </Tooltip>
                            <Button cssClass="e-primary" onClick={() => setDialogVisible(false)}>
                                Close
                            </Button>
                        </div>
                    }
                >
                    <div className="dialog-member-body">
                        <div className={`dialog-member-avatar ${selectedMember.avatarClass}`}></div>
                        <p className="dialog-member-bio">{selectedMember.bio}</p>
                        <div className="dialog-member-skills">
                            <strong>Core Skills</strong>
                            <div className="skill-tags">
                                {selectedMember.skills.map((skill, i) => (
                                    <Tooltip key={i} content={<>Expert-level skill</>} position="TopCenter">
                                        <span className="skill-tag">{skill}</span>
                                    </Tooltip>
                                ))}
                            </div>
                        </div>
                        <p className="dialog-member-email">
                            📧 <a href={`mailto:${selectedMember.email}`}>{selectedMember.email}</a>
                        </p>
                    </div>
                </Dialog>
            )}
        </div>
    );
};

export default About;
