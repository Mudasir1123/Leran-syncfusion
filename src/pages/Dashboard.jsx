import React, { useState, useMemo, useContext } from 'react';
import { Grid, Columns, Column, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { DropDownList } from '@syncfusion/react-dropdowns';
import { TextBox } from '@syncfusion/react-inputs';
import { Button } from '@syncfusion/react-buttons';
import { Tooltip, Dialog } from '@syncfusion/react-popups';
import { 
    Chart, 
    ChartSeriesCollection, 
    ChartSeries, 
    ChartPrimaryXAxis, 
    ChartPrimaryYAxis, 
    ChartTooltip, 
    ChartLegend,
    ChartMarker
} from '@syncfusion/react-charts';
import { ThemeContext } from '../context/ThemeContext';
import { orderDetails } from '../orderDetails';
import '../orderDetails.css';

const statusTemplate = (props) => {
    const val = props.Verified ?? props.verified ?? props.data?.Verified ?? props.data?.verified;
    const isVerified = val === true || String(val).toLowerCase() === 'true';

    return (
        <span className={`status-badge ${isVerified ? 'status-true' : 'status-false'}`}>
            {isVerified ? 'TRUE' : 'FALSE'}
        </span>
    );
};

export default function Dashboard() {
    const { isDarkMode } = useContext(ThemeContext);
    const [filteredData, setFilteredData] = useState(orderDetails);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [resetDialog, setResetDialog] = useState(false);
    const [infoDialog, setInfoDialog] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const countries = useMemo(() => {
        const uniqueCountries = [...new Set(orderDetails.map(item => item.ShipCountry))];
        return ['All', ...uniqueCountries.sort()];
    }, []);

    const chartData = useMemo(() => {
        const countryStats = {};
        filteredData.forEach(item => {
            const country = item.ShipCountry;
            if (!countryStats[country]) {
                countryStats[country] = { country, total: 0, verified: 0, unverified: 0 };
            }
            countryStats[country].total += 1;
            if (item.Verified) {
                countryStats[country].verified += 1;
            } else {
                countryStats[country].unverified += 1;
            }
        });
        // Sort by total orders and take top 10 to match the clean look of the reference
        return Object.values(countryStats)
            .sort((a, b) => b.total - a.total)
            .slice(0, 10);
    }, [filteredData]);

    const handleSearch = () => {
        let updatedData = orderDetails;

        if (selectedCountry !== 'All') {
            updatedData = updatedData.filter(item => item.ShipCountry === selectedCountry);
        }

        if (selectedStatus !== 'All') {
            const isVerified = selectedStatus === 'Verified';
            updatedData = updatedData.filter(item => item.Verified === isVerified);
        }

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
        setRefreshKey(prev => prev + 1);
    };

    const handleReset = () => {
        setResetDialog(false);
        setSearchTerm('');
        setSelectedCountry('All');
        setSelectedStatus('All');
        setFilteredData(orderDetails);
        setRefreshKey(prev => prev + 1);
    };

    return (
        <div className="grid-container">
            <div className="grid-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <h1>Order Dashboard</h1>
                    <Tooltip
                        content={<>Click to learn how to use the dashboard filters</>}
                        position="RightCenter"
                    >
                        <button
                            className="info-btn"
                            onClick={() => setInfoDialog(true)}
                            aria-label="Dashboard info"
                        >
                            ℹ️
                        </button>
                    </Tooltip>
                </div>
                <p>Manage and monitor your customer orders in real-time</p>
            </div>

            <div className="controls-container">
                {/* Country Filter */}
                <div className="control-group">
                    <label>Filter by Country</label>
                    <Tooltip content={<>Filter orders by ship destination country</>} position="TopCenter">
                        <DropDownList
                            dataSource={countries}
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.value)}
                            placeholder="Select Country"
                            width="180px"
                        />
                    </Tooltip>
                </div>

                {/* Status Filter */}
                <div className="control-group">
                    <label>Filter by Status</label>
                    <Tooltip content={<>Show only verified or unverified orders</>} position="TopCenter">
                        <DropDownList
                            dataSource={['All', 'Verified', 'Not Verified']}
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.value)}
                            placeholder="Select Status"
                            width="160px"
                        />
                    </Tooltip>
                </div>

                {/* Search */}
                <div className="control-group">
                    <label>Search Orders</label>
                    <div className="search-wrapper button-row">
                        <Tooltip content={<>Search by ID, Name, Address, Country or Amount</>} position="TopCenter">
                            <TextBox
                                placeholder="Search by ID, Name, City..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.value)}
                                width="250px"
                            />
                        </Tooltip>
                        <Tooltip content={<>Apply all filters and search</>} position="TopCenter">
                            <Button
                                className="e-primary"
                                onClick={handleSearch}
                                iconCss="e-icons e-search"
                            >
                                Search
                            </Button>
                        </Tooltip>
                    </div>
                </div>

                {/* Reset Button */}
                <div className="control-group" style={{ alignSelf: 'flex-end' }}>
                    <Tooltip content={<>Clear all filters and show all orders</>} position="TopCenter">
                        <Button
                            className="e-outline"
                            onClick={() => setResetDialog(true)}
                        >
                            🔄 Reset
                        </Button>
                    </Tooltip>
                </div>
            </div>

            {/* Results Count */}
            <div className="results-count">
                <Tooltip
                    content={<>Showing {filteredData.length} out of {orderDetails.length} total orders</>}
                    position="RightCenter"
                >
                    <span className="results-badge">
                        {filteredData.length} result{filteredData.length !== 1 ? 's' : ''} found
                    </span>
                </Tooltip>
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

            {/* Dynamic Data Visualization */}
            <div className="chart-section" style={{ 
                marginTop: '40px', 
                padding: '24px', 
                background: 'var(--bg-secondary)', 
                borderRadius: '16px', 
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
            }}>
                <div className="chart-header" style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>Order Analytics by Country</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Visualizing order distribution and verification status across top regions</p>
                </div>
                
                
                <Chart 
                    key={refreshKey}
                    id="order-chart" 
                    chartArea={{ border: { width: 0 } }}
                    background="transparent"
                    height="400px"
                    theme={isDarkMode ? "MaterialDark" : "Material"}
                    title="Order Distribution Analysis"
                    titleStyle={{ color: 'var(--text-primary)', fontWeight: '600' }}
                >
                    <ChartPrimaryXAxis 
                        valueType='Category' 
                        labelRotation={-45} 
                        labelIntersectAction='Rotate45'
                        majorGridLines={{ width: 0 }}
                        labelStyle={{ color: 'var(--text-secondary)' }}
                    />
                    <ChartPrimaryYAxis 
                        title='Number of Orders'
                        labelFormat='{value}'
                        lineStyle={{ width: 0 }}
                        majorTickLines={{ width: 0 }}
                        labelStyle={{ color: 'var(--text-secondary)' }}
                        titleStyle={{ color: 'var(--text-secondary)' }}
                    />
                    <ChartTooltip 
                        enable={true} 
                        shared={true} 
                    />
                    <ChartLegend 
                        visible={true} 
                        textStyle={{ color: 'var(--text-primary)' }} 
                    />
                    <ChartSeriesCollection>
                        <ChartSeries 
                            dataSource={chartData} 
                            xField="country" 
                            yField="total" 
                            name="Total Orders" 
                            type="Spline" 
                            width={3}
                            fill="#3b82f6"
                        >
                            <ChartMarker visible={true} width={10} height={10} shape='Circle' isFilled={true} border={{ width: 2, color: '#fff' }} />
                        </ChartSeries>
                        <ChartSeries 
                            dataSource={chartData} 
                            xField="country" 
                            yField="verified" 
                            name="Verified Orders" 
                            type="Spline" 
                            width={3}
                            fill="#10b981"
                        >
                            <ChartMarker visible={true} width={10} height={10} shape='Circle' isFilled={true} border={{ width: 2, color: '#fff' }} />
                        </ChartSeries>
                        <ChartSeries 
                            dataSource={chartData} 
                            xField="country" 
                            yField="unverified" 
                            name="Not Verified" 
                            type="Spline" 
                            width={3}
                            fill="#ef4444"
                        >
                            <ChartMarker visible={true} width={10} height={10} shape='Circle' isFilled={true} border={{ width: 2, color: '#fff' }} />
                        </ChartSeries>
                    </ChartSeriesCollection>
                </Chart>
            </div>

            {/* Reset Confirmation Dialog */}
            <Dialog
                header="🔄 Reset All Filters?"
                open={resetDialog}
                onClose={() => setResetDialog(false)}
                style={{ maxWidth: '400px', width: '90vw' }}
                footer={
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                        <Button className="e-outline" onClick={() => setResetDialog(false)}>
                            Cancel
                        </Button>
                        <Button className="e-primary" onClick={handleReset}>
                            Yes, Reset
                        </Button>
                    </div>
                }
            >
                <div className="dialog-confirm-body">
                    <div className="confirm-icon">⚠️</div>
                    <p>
                        This will <strong>clear all active filters</strong> and show all{' '}
                        <strong>{orderDetails.length} orders</strong>. Any custom search terms
                        will also be removed.
                    </p>
                    <p>Do you want to continue?</p>
                </div>
            </Dialog>

            {/* Info / Help Dialog */}
            <Dialog
                header="📖 How to Use the Dashboard"
                open={infoDialog}
                onClose={() => setInfoDialog(false)}
                style={{ maxWidth: '520px', width: '90vw' }}
                footer={
                    <Button className="e-primary" onClick={() => setInfoDialog(false)}>
                        Got it!
                    </Button>
                }
            >
                <div className="dialog-info-body">
                    <div className="info-step">
                        <span className="info-step-num">1</span>
                        <div>
                            <strong>Filter by Country</strong>
                            <p>Use the Country dropdown to narrow orders by shipping destination.</p>
                        </div>
                    </div>
                    <div className="info-step">
                        <span className="info-step-num">2</span>
                        <div>
                            <strong>Filter by Status</strong>
                            <p>Choose "Verified" or "Not Verified" to see orders by their verification state.</p>
                        </div>
                    </div>
                    <div className="info-step">
                        <span className="info-step-num">3</span>
                        <div>
                            <strong>Global Search</strong>
                            <p>Type anything — an ID, name, address, country, or amount — and hit Search.</p>
                        </div>
                    </div>
                    <div className="info-step">
                        <span className="info-step-num">4</span>
                        <div>
                            <strong>Reset</strong>
                            <p>Click 🔄 Reset to clear all filters and start fresh.</p>
                        </div>
                    </div>
                    <div className="info-step">
                        <span className="info-step-num">5</span>
                        <div>
                            <strong>Hover on columns</strong>
                            <p>Long text in Ship Name and Address columns shows a tooltip with full content.</p>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
