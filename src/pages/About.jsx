import React, { useState, useContext } from 'react';
import { Tooltip, Dialog } from '@syncfusion/react-popups';
import { Button, Checkbox } from '@syncfusion/react-buttons';
import { Grid, Columns, Column } from '@syncfusion/react-grid';
import { DropDownList } from '@syncfusion/react-dropdowns';
import { TextBox } from '@syncfusion/react-inputs';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/About.css';

const teamMembers = [
    {
        key: 'alex', name: 'Alex Johnson', role: 'CEO & Founder', avatarClass: 't1',
        short: 'Expert in enterprise resource planning and dashboard architecture with over 15 years of experience.',
        bio: 'Alex founded SyncPro with a vision to democratize real-time data intelligence for businesses of all sizes. With a background in enterprise ERP systems and 15+ years in the industry, he has led teams across Fortune 500 companies before starting SyncPro.',
        skills: ['Enterprise Architecture', 'Product Strategy', 'Data Analytics', 'Team Leadership'],
        email: 'alex@syncpro.com',
    },
    {
        key: 'sarah', name: 'Sarah Chen', role: 'Lead Architect', avatarClass: 't2',
        short: 'Specializes in high-scale React applications and data visualization using Syncfusion.',
        bio: 'Sarah is the technical backbone of SyncPro. She architected the entire frontend infrastructure using React and Syncfusion components, ensuring sub-100ms rendering for datasets exceeding 100k records. She is passionate about performance and accessibility.',
        skills: ['React & TypeScript', 'Syncfusion Components', 'Data Visualization', 'Performance Optimization'],
        email: 'sarah@syncpro.com',
    },
    {
        key: 'michael', name: 'Michael Ross', role: 'UX Designer', avatarClass: 't3',
        short: 'Passionate about creating clean, accessible, and professional interfaces users love.',
        bio: 'Michael leads all UX research and design at SyncPro. He uses a data-driven design approach — conducting user interviews and usability tests before every major release. His designs have consistently improved user retention by 30%+ across each version.',
        skills: ['UI/UX Research', 'Figma & Prototyping', 'Accessibility (WCAG)', 'Design Systems'],
        email: 'michael@syncpro.com',
    },
];

const milestones = [
    { year: '2019', title: 'Founded', desc: 'SyncPro was born in a Silicon Valley garage with a mission to simplify order management.', color: '#6366f1' },
    { year: '2020', title: 'First 1,000 Users', desc: 'We hit our first major milestone and launched our real-time dashboard beta.', color: '#06b6d4' },
    { year: '2022', title: 'Series A Funding', desc: 'Raised $5M to scale infrastructure, expand the team, and add enterprise features.', color: '#10b981' },
    { year: '2024', title: '10K+ Businesses', desc: 'Now powering order management for over 10,000 businesses across 40+ countries.', color: '#f59e0b' },
];

const techStackData = [
    { tech: 'React 19', type: 'Frontend', usage: 'Core UI Framework', status: 'Active' },
    { tech: 'Syncfusion', type: 'Components', usage: 'Grid, Charts, Inputs', status: 'Active' },
    { tech: 'Vite 8', type: 'Build Tool', usage: 'Blazing fast dev server', status: 'Active' },
    { tech: 'React Router 7', type: 'Navigation', usage: 'SPA Routing', status: 'Active' },
    { tech: 'TypeScript', type: 'Language', usage: 'Type Safety', status: 'Active' },
];

const values = [
    { icon: '🚀', title: 'Speed', desc: 'Sub-50ms render times with Syncfusion\'s virtual grid engine.', color: '#6366f1' },
    { icon: '🔒', title: 'Security', desc: 'Enterprise-grade encryption and role-based access controls.', color: '#10b981' },
    { icon: '🌐', title: 'Global', desc: 'Multi-region support across 40+ countries and 12 languages.', color: '#06b6d4' },
    { icon: '🤝', title: 'Support', desc: '24/7 dedicated support team with < 2hr average response time.', color: '#f59e0b' },
];

const About = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedDept, setSelectedDept] = useState('All');

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

            {/* Our Values Grid */}
            <section className="about-section">
                <h2 className="section-title">🌟 Our Core Values</h2>
                <div className="values-grid">
                    {values.map((v, i) => (
                        <div className="value-card" key={i} style={{ '--val-color': v.color }}>
                            <div className="value-icon" style={{ color: v.color }}>{v.icon}</div>
                            <h3 style={{ color: v.color }}>{v.title}</h3>
                            <p>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission */}
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
                                role="button" tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && openMemberDialog(member)}
                            >
                                <div className="e-card-header">
                                    <div className={`e-card-header-image team-avatar ${member.avatarClass}`}></div>
                                    <div className="e-card-header-caption">
                                        <div className="e-card-header-title">{member.name}</div>
                                        <div className="e-card-sub-title">{member.role}</div>
                                    </div>
                                </div>
                                <div className="e-card-content">{member.short}</div>
                                <div className="team-card-footer">
                                    <span className="team-view-profile">View Profile →</span>
                                </div>
                            </div>
                        </Tooltip>
                    ))}
                </div>

                {/* Stats Section */}
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

            {/* Timeline Section */}
            <section className="about-section">
                <h2 className="section-title">🗓️ Our Journey</h2>
                <div className="timeline">
                    {milestones.map((m, i) => (
                        <div className="timeline-item" key={i} style={{ '--tm-color': m.color }}>
                            <div className="timeline-dot" style={{ background: m.color }}></div>
                            <div className="timeline-year" style={{ color: m.color }}>{m.year}</div>
                            <div className="timeline-content">
                                <h3>{m.title}</h3>
                                <p>{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack Grid */}
            <section className="about-section">
                <h2 className="section-title">🛠️ Technology Stack</h2>
                <p className="section-sub">The battle-tested technologies powering SyncPro.</p>
                <div className="tech-filter-row">
                    <DropDownList
                        dataSource={['All', 'Frontend', 'Components', 'Build Tool', 'Navigation', 'Language']}
                        value={selectedDept}
                        onChange={(e) => setSelectedDept(e.value)}
                        width="200px"
                        placeholder="Filter by Type"
                    />
                </div>
                <Grid
                    dataSource={selectedDept === 'All' ? techStackData : techStackData.filter(t => t.type === selectedDept)}
                    allowPaging={false}
                    gridLines="Horizontal"
                >
                    <Columns>
                        <Column field="tech" headerText="Technology" width={160}
                            template={(p) => <strong style={{ color: '#6366f1' }}>{p.tech}</strong>}
                        />
                        <Column field="type" headerText="Category" width={160}
                            template={(p) => (
                                <span style={{
                                    padding: '2px 10px', borderRadius: '20px', fontSize: '0.75rem',
                                    background: 'rgba(6, 182, 212, 0.25)', color: '#06b6d4', fontWeight: 600,
                                    border: '1px solid rgba(6, 182, 212, 0.4)'
                                }}>{p.type}</span>
                            )}
                        />
                        <Column field="usage" headerText="Usage" width={220} />
                        <Column field="status" headerText="Status" width={120}
                            template={() => (
                                <span style={{
                                    padding: '2px 10px', borderRadius: '20px', fontSize: '0.75rem',
                                    background: 'rgba(16, 185, 129, 0.25)', color: '#10b981', fontWeight: 600,
                                    border: '1px solid rgba(16, 185, 129, 0.4)'
                                }}>● Active</span>
                            )}
                        />
                    </Columns>
                </Grid>
            </section>

            {/* CTA Banner */}
            <div className="about-cta">
                <h2>Ready to supercharge your workflow?</h2>
                <p>Join 10,000+ businesses already using SyncPro to manage their orders smarter.</p>
                <div className="button-row" style={{ justifyContent: 'center', marginTop: '24px' }}>
                    <Button className="e-primary e-large">Start Free Trial</Button>
                    <Button className="e-outline e-large">Schedule Demo</Button>
                </div>
            </div>

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
                                    <Button className="e-outline">✉️ Email</Button>
                                </a>
                            </Tooltip>
                            <Button className="e-primary" onClick={() => setDialogVisible(false)}>Close</Button>
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
