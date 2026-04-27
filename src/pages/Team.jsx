import React, { useContext } from 'react';
import { Button } from '@syncfusion/react-buttons';
import { Tooltip } from '@syncfusion/react-popups';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Team.css';

function Team() {
    const { isDarkMode, primaryColor } = useContext(ThemeContext);

    const teamMembers = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Lead Designer',
            bio: 'Expert in UI/UX design and brand strategy'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Senior Developer',
            bio: 'Full-stack developer with 8+ years experience'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Product Manager',
            bio: 'Passionate about creating innovative solutions'
        },
        {
            id: 4,
            name: 'David Park',
            role: 'DevOps Engineer',
            bio: 'Infrastructure and deployment specialist'
        },
        {
            id: 5,
            name: 'Lisa Anderson',
            role: 'QA Lead',
            bio: 'Quality assurance and testing expert'
        },
        {
            id: 6,
            name: 'James Wilson',
            role: 'Backend Developer',
            bio: 'Database design and API development'
        }
    ];

    return (
        <div className={`team-container ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 className="page-title">Our Team</h1>
            <p className="subtitle">Meet the talented people behind our success.</p>

            <div className="team-grid">
                {teamMembers.map((member) => (
                    <Tooltip key={member.id} content={member.bio} position="TopCenter">
                        <div className="team-card flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="member-avatar"></div>
                                    <h3>{member.name}</h3>
                                    <p className="role">{member.role}</p>
                                </div>
                                <div className="flip-card-back">
                                    <p className="bio">{member.bio}</p>
                                    <div className="member-actions">
                                        <Button className="e-small e-secondary">
                                            Connect
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
}

export default Team;
