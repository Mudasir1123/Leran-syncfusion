import React, { useState, useMemo } from 'react';
import { Grid, Columns, Column, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { DropDownList } from '@syncfusion/react-dropdowns';
import { TextBox } from '@syncfusion/react-inputs';
import { Button } from '@syncfusion/react-buttons';
import { orderDetails } from './orderDetails';
import './App.css';
import './orderDetails.css';

// Syncfusion Styles
import '@syncfusion/react-grid/styles/material.css';
import '@syncfusion/react-dropdowns/styles/material.css';
import '@syncfusion/react-inputs/styles/material.css';
import '@syncfusion/react-buttons/styles/material.css';

const statusTemplate = (props) => {
    // Check all possible locations for the Verified status
    const val = props.Verified ?? props.verified ?? props.data?.Verified ?? props.data?.verified;
    const isVerified = val === true || String(val).toLowerCase() === 'true';
    
    return (
        <span className={`status-badge ${isVerified ? 'status-true' : 'status-false'}`}>
            {isVerified ? 'TRUE' : 'FALSE'}
        </span>
    );
};

export default function App() {
    const [filteredData, setFilteredData] = useState(orderDetails);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');

    // Get unique countries for dropdown
    const countries = useMemo(() => {
        const uniqueCountries = [...new Set(orderDetails.map(item => item.ShipCountry))];
        return ['All', ...uniqueCountries.sort()];
    }, []);

    const handleSearch = () => {
        let updatedData = orderDetails;

        // Filter by Country (dropdown)
        if (selectedCountry !== 'All') {
            updatedData = updatedData.filter(item => item.ShipCountry === selectedCountry);
        }

        // Filter by Status (dropdown)
        if (selectedStatus !== 'All') {
            const isVerified = selectedStatus === 'Verified';
            updatedData = updatedData.filter(item => item.Verified === isVerified);
        }

        // Global search by all fields (ID, Customer ID, Name, Ship Name, Country, City, Charges, Verified)
        if (searchTerm.trim() !== '') {
            const term = searchTerm.toLowerCase();
            updatedData = updatedData.filter(item => 
                item.OrderID.toString().includes(term) || 
                item.CustomerID.toLowerCase().includes(term) ||
                item.CustomerName.toLowerCase().includes(term) ||
                item.ShipName.toLowerCase().includes(term) ||
                item.ShipCountry.toLowerCase().includes(term) ||
                item.ShipAddress.toLowerCase().includes(term) ||
                (item.ShipCity && item.ShipCity.toLowerCase().includes(term)) ||
                item.Freight.toString().includes(term) ||
                (term === 'true' && item.Verified === true) ||
                (term === 'false' && item.Verified === false)
            );
        }

        setFilteredData(updatedData);
    };

    return (
        <div className="grid-container">
            <div className="grid-header">
                <h1>Order Dashboard</h1>
                <p>Manage and monitor your customer orders in real-time</p>
            </div>

            <div className="controls-container">
                <div className="control-group">
                    <label>Filter by Country</label>
                    <DropDownList 
                        dataSource={countries} 
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.value)}
                        placeholder="Select Country"
                        width="180px"
                    />
                </div>

                <div className="control-group">
                    <label>Filter by Status</label>
                    <DropDownList 
                        dataSource={['All', 'Verified', 'Not Verified']} 
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.value)}
                        placeholder="Select Status"
                        width="160px"
                    />
                </div>
                
                <div className="control-group">
                    <label>Search Orders</label>
                    <div className="search-wrapper">
                        <TextBox 
                            placeholder="Search by ID, Name, City..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.value)}
                            width="250px"
                        />
                        <Button 
                            color="Primary" 
                            onClick={handleSearch}
                            icon={<span className="e-icons e-search"></span>}
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </div>

            <Grid dataSource={filteredData} height={600} allowPaging={true} pageSettings={{ pageSize: 10 }}>
                <Columns>
                    <Column field="OrderID" headerText="ID" width={100} textAlign={TextAlign.Left} customAttributes={{ className: 'col-id' }} />
                    <Column field="CustomerID" headerText="Customer ID" width={120} customAttributes={{ className: 'col-cust-id' }} />
                    <Column field="CustomerName" headerText="Name" width={150} customAttributes={{ className: 'col-name' }} />
                    <Column field="ShipName" headerText="Ship Name" width={180} clipMode={ClipMode.EllipsisWithTooltip} customAttributes={{ className: 'col-ship' }} />
                    <Column field="ShipCountry" headerText="Country" width={130} customAttributes={{ className: 'col-country' }} />
                    <Column field="ShipAddress" headerText="Address" width={200} clipMode={ClipMode.EllipsisWithTooltip} customAttributes={{ className: 'col-address' }} />
                    <Column field="Freight" headerText="Charges" width={120} textAlign={TextAlign.Right} format="C2" customAttributes={{ className: 'col-charges' }} />
                    <Column field="Verified" headerText="Verified" width={100} textAlign={TextAlign.Center} template={statusTemplate} customAttributes={{ className: 'col-verified' }} />
                </Columns>
            </Grid>
        </div>
    );
};