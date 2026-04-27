import React, { useContext } from 'react';
import { Button } from '@syncfusion/react-buttons';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Services.css';

function Services() {
    const { isDarkMode, primaryColor } = useContext(ThemeContext);

    const services = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Build responsive and modern web applications using React and Syncfusion components.',
            features: ['React', 'TypeScript', 'Responsive Design']
        },
        {
            id: 2,
            title: 'UI Components',
            description: 'Access a comprehensive library of pre-built UI components for rapid development.',
            features: ['Buttons', 'Dialogs', 'Grids', 'Charts']
        },
        {
            id: 3,
            title: 'Data Visualization',
            description: 'Create stunning data visualizations with interactive charts and grids.',
            features: ['Charts', 'Grids', 'Maps', 'Gauges']
        },
        {
            id: 4,
            title: 'User Interface',
            description: 'Design beautiful and intuitive user interfaces with our design system.',
            features: ['Themes', 'Icons', 'Animations', 'Layouts']
        }
    ];

    return (
        <div className={`services-container ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 className="page-title">Our Services</h1>
            <p className="subtitle">Explore our comprehensive range of services designed to help you build amazing applications.</p>

            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.id} className={`service-card slide-up`}>
                        <div className="card-header">
                            <h2>{service.title}</h2>
                        </div>
                        <div className="card-body">
                            <p className="description">{service.description}</p>
                            <div className="features">
                                <h3>Features:</h3>
                                <ul>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Button className={`e-primary btn-${primaryColor}`}>
                                Learn More
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
