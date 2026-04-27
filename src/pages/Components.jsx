import React, { useContext, useRef, useState } from 'react';
import { Button, ChipList, Chip } from '@syncfusion/react-buttons';
import { Dialog, Tooltip } from '@syncfusion/react-popups';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Components.css';

function Components() {
    const { isDarkMode, primaryColor } = useContext(ThemeContext);
    const [dialogVisible, setDialogVisible] = useState(false);

    const openDialog = () => setDialogVisible(true);
    const closeDialog = () => setDialogVisible(false);

    return (
        <div className={`components-container ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 className="page-title">Components Showcase</h1>

            {/* Button Types Section */}
            <section className="component-section fade-in">
                <h2>Button Types</h2>
                <div className="button-grid">
                    <div className="button-group">
                        <Button
                            className={`e-primary btn-${primaryColor}`}
                            onClick={() => console.log('clicked')}
                        >
                            Primary Button
                        </Button>
                        <p className="label">Primary</p>
                    </div>

                    <div className="button-group">
                        <Button className="e-secondary">
                            Secondary Button
                        </Button>
                        <p className="label">Secondary</p>
                    </div>

                    <div className="button-group">
                        <Button className="e-success">
                            Success Button
                        </Button>
                        <p className="label">Success</p>
                    </div>

                    <div className="button-group">
                        <Button className="e-danger">
                            Danger Button
                        </Button>
                        <p className="label">Danger</p>
                    </div>

                    <div className="button-group">
                        <Button className="e-warning">
                            Warning Button
                        </Button>
                        <p className="label">Warning</p>
                    </div>

                    <div className="button-group">
                        <Button className="e-info">
                            Info Button
                        </Button>
                        <p className="label">Info</p>
                    </div>

                    <div className="button-group">
                        <Button className="e-outline">
                            Outline Button
                        </Button>
                        <p className="label">Outline</p>
                    </div>

                    <div className="button-group">
                        <Button className="e-round">
                            Rounded
                        </Button>
                        <p className="label">Rounded</p>
                    </div>

                    <div className="button-group">
                        <Button className="e-small">
                            Small Button
                        </Button>
                        <p className="label">Small</p>
                    </div>

                    <div className="button-group">
                        <Button className="e-large" disabled={true}>
                            Disabled
                        </Button>
                        <p className="label">Disabled</p>
                    </div>
                </div>
            </section>

            {/* Chip Component Section */}
            <section className="component-section fade-in" style={{ animationDelay: '0.1s' }}>
                <h2>Chips</h2>
                <div className="chips-container">
                    <div className="chips-group">
                        <h3>Basic Chips</h3>
                        <ChipList>
                            <Chip text="React" iconCss="e-icon-plus" />
                            <Chip text="TypeScript" iconCss="e-icon-star" />
                            <Chip text="Syncfusion" iconCss="e-icon-check" />
                            <Chip text="Design" iconCss="e-icon-palette" />
                        </ChipList>
                    </div>

                    <div className="chips-group">
                        <h3>Action Chips</h3>
                        <ChipList selection="Single">
                            <Chip text="JavaScript" />
                            <Chip text="Python" />
                            <Chip text="Java" />
                            <Chip text="C#" />
                        </ChipList>
                    </div>

                    <div className="chips-group">
                        <h3>Filter Chips</h3>
                        <ChipList selection="Multiple">
                            <Chip text="Frontend" />
                            <Chip text="Backend" />
                            <Chip text="Database" />
                            <Chip text="DevOps" />
                        </ChipList>
                    </div>
                </div>
            </section>

            {/* Dialog Section */}
            <section className="component-section fade-in" style={{ animationDelay: '0.2s' }}>
                <h2>Dialog</h2>
                <Button
                    className="e-primary"
                    onClick={openDialog}
                >
                    Open Dialog
                </Button>

                <Dialog
                    header="Welcome to Syncfusion Components"
                    open={dialogVisible}
                    onClose={closeDialog}
                    showCloseIcon={true}
                    footer={
                        <Button className="e-outline" onClick={closeDialog}>Close</Button>
                    }
                    style={{ maxWidth: '500px', width: '90vw' }}
                >
                    <div className="dialog-content">
                        <p>
                            This dialog showcases the Dialog component from Syncfusion.
                            It provides a modal overlay for displaying important information,
                            forms, and user confirmations.
                        </p>
                        <p>
                            The Dialog component is highly customizable and supports various
                            features like dragging, resizing, and multiple buttons.
                        </p>
                        <div className="feature-list">
                            <h4>Features:</h4>
                            <ul>
                                <li>Modal and non-modal dialogs</li>
                                <li>Custom headers and footers</li>
                                <li>Animation support</li>
                                <li>Responsive design</li>
                            </ul>
                        </div>
                    </div>
                </Dialog>
            </section>

            {/* Tooltip Section */}
            <section className="component-section fade-in" style={{ animationDelay: '0.3s' }}>
                <h2>Tooltips</h2>
                <div className="tooltip-grid">
                    <Tooltip content="This is a tooltip on the top">
                        <button className="tooltip-target">Hover Top</button>
                    </Tooltip>

                    <Tooltip content="This is a tooltip on the right" position="RightCenter">
                        <button className="tooltip-target">Hover Right</button>
                    </Tooltip>

                    <Tooltip content="This is a tooltip on the bottom" position="BottomCenter">
                        <button className="tooltip-target">Hover Bottom</button>
                    </Tooltip>

                    <Tooltip content="This is a tooltip on the left" position="LeftCenter">
                        <button className="tooltip-target">Hover Left</button>
                    </Tooltip>

                    <Tooltip content="Sticky tooltip - Click to open" opensOn="Click">
                        <button className="tooltip-target">Sticky Tooltip</button>
                    </Tooltip>

                    <Tooltip content="Animated tooltip with smooth transition">
                        <button className="tooltip-target">Animated</button>
                    </Tooltip>
                </div>
            </section>
        </div>
    );
}

export default Components;
