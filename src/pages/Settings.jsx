import React, { useContext, useState } from 'react';
import { Button, Checkbox, RadioButton } from '@syncfusion/react-buttons';
import { TextBox } from '@syncfusion/react-inputs';
import { DropDownList } from '@syncfusion/react-dropdowns';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Settings.css';

const Settings = () => {
    const { isDarkMode, toggleTheme, primaryColor, setColor } = useContext(ThemeContext);
    const [profileName, setProfileName] = useState('SyncPro Admin');
    const [email, setEmail] = useState('admin@syncpro.com');
    const [saveDialog, setSaveDialog] = useState(false);

    const handleSave = () => {
        // Logic to save settings
        alert('Settings saved successfully!');
    };

    return (
        <div className="settings-container">
            <header className="settings-header">
                <h1>App <span className="highlight">Settings</span></h1>
                <p>Customize your experience and manage your account preferences.</p>
            </header>

            <div className="settings-grid">
                {/* Profile Section */}
                <section className="settings-section">
                    <h2>👤 User Profile</h2>
                    <div className="settings-card">
                        <div className="setting-item">
                            <label>Full Name</label>
                            <TextBox 
                                value={profileName} 
                                onChange={(e) => setProfileName(e.value)} 
                                placeholder="Your Name" 
                            />
                        </div>
                        <div className="setting-item">
                            <label>Email Address</label>
                            <TextBox 
                                value={email} 
                                onChange={(e) => setEmail(e.value)} 
                                placeholder="Email" 
                            />
                        </div>
                    </div>
                </section>

                {/* Appearance Section */}
                <section className="settings-section">
                    <h2>🎨 Appearance</h2>
                    <div className="settings-card">
                        <div className="setting-item flex-row">
                            <div>
                                <label>Dark Mode</label>
                                <p className="setting-desc">Switch between light and dark themes.</p>
                            </div>
                            <label className="native-toggle">
                                <input 
                                    type="checkbox" 
                                    checked={isDarkMode} 
                                    onChange={toggleTheme} 
                                />
                                <span className="native-toggle-slider"></span>
                            </label>
                        </div>

                        <div className="setting-item">
                            <label>Primary Brand Color</label>
                            <div className="color-selector">
                                {['blue', 'dark', 'grey'].map((c) => (
                                    <div 
                                        key={c}
                                        className={`color-circle ${c} ${primaryColor === c ? 'active' : ''}`}
                                        onClick={() => setColor(c)}
                                        title={c.charAt(0).toUpperCase() + c.slice(1)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notifications Section */}
                <section className="settings-section">
                    <h2>🔔 Notifications</h2>
                    <div className="settings-card">
                        <div className="setting-item">
                            <Checkbox label="Email notifications for new orders" checked={true} />
                        </div>
                        <div className="setting-item">
                            <Checkbox label="Weekly performance reports" checked={true} />
                        </div>
                        <div className="setting-item">
                            <Checkbox label="Security alerts and login notifications" checked={true} />
                        </div>
                    </div>
                </section>

                {/* System Section */}
                <section className="settings-section">
                    <h2>⚙️ System</h2>
                    <div className="settings-card">
                        <div className="setting-item">
                            <label>Default Currency</label>
                            <DropDownList 
                                dataSource={['USD ($)', 'EUR (€)', 'GBP (£)', 'JPY (¥)']} 
                                value="USD ($)" 
                                width="100%" 
                            />
                        </div>
                        <div className="setting-item">
                            <label>Timezone</label>
                            <DropDownList 
                                dataSource={['UTC (Coordinated Universal Time)', 'PST (Pacific Standard Time)', 'EST (Eastern Standard Time)']} 
                                value="UTC (Coordinated Universal Time)" 
                                width="100%" 
                            />
                        </div>
                    </div>
                </section>
            </div>

            <div className="settings-actions">
                <Button className="e-outline" onClick={() => window.location.reload()}>Discard Changes</Button>
                <Button className="e-primary" onClick={handleSave}>Save Settings</Button>
            </div>
        </div>
    );
};

export default Settings;
