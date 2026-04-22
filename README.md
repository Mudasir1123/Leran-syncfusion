# Order Dashboard - Syncfusion React Implementation

A premium, real-time Order Management Dashboard and Marketing Site built with React 19 and Syncfusion components. This dashboard is designed to monitor and manage customer orders with high efficiency and a beautiful, interactive user interface.

## 🚀 Key Features

- **Advanced Data Grid**: High-performance grid handling 800+ records with features like paging and custom column styling.
- **Dynamic Filtering**:
  - **Country Filter**: A dropdown to isolate orders by shipping country.
  - **Status Filter**: A dedicated filter to view only 'Verified' or 'Not Verified' orders.
  - **Global Search**: A powerful search engine that filters across ID, Name, Address, City, Country, Charges, and Status.
- **Interactive Tooltips**: Helpful, contextual tooltips across all pages (navigation links, buttons, icons, grid elements, and form fields) to guide user interaction without cluttering the UI.
- **Interactive Dialogs**: 
  - **Informational Modals**: Feature details and Team member bios dynamically display in rich modal windows.
  - **Confirmation Dialogs**: Multi-step confirmation and success dialogs for the contact form and filter resetting.
- **Visual Status Tracking**: Color-coded badges for order verification (TRUE/FALSE) using custom column templates.
- **Premium UI/UX**:
  - **Glassmorphism Design**: Semi-transparent containers with backdrop filters.
  - **Custom Badges**: Vibrant, color-coded columns for better data scannability.
  - **Responsive Layout**: Optimized for various screen resolutions.

## 🛠️ Technologies Used

- **React 19**: The latest version of React for building interactive UIs.
- **Vite**: A next-generation frontend tool that provides a fast development environment.
- **Syncfusion React Components (v33)**:
  - `@syncfusion/react-grid`: For displaying and managing tabular order data.
  - `@syncfusion/react-popups`: For interactive `Tooltip` and `Dialog` (Modal) components.
  - `@syncfusion/react-dropdowns`: For the country selection filter.
  - `@syncfusion/react-inputs`: For the global search keyword input and contact form textboxes.
  - `@syncfusion/react-buttons`: For buttons across the application.
- **CSS3**: Advanced styling including linear gradients, backdrop filters, flexbox/grid layouts, and micro-animations.

## 📦 Installation Guide

To get this project running on your local machine, follow these steps:

### 1. Project Setup
```bash
# Navigate to the project directory
cd react-syncfusion-dashboard
```

### 2. Install Dependencies
```bash
# Install core dependencies (React, Vite, etc.)
npm install

# Install Syncfusion React components
npm install @syncfusion/react-grid @syncfusion/react-dropdowns @syncfusion/react-inputs @syncfusion/react-buttons @syncfusion/react-popups @syncfusion/ej2-base
```

### 3. Start the Development Server
```bash
npm run dev
```
The application will start on `http://localhost:5173` (or the next available port).

## 🧩 Component Breakdown

### 1. Order Grid (Dashboard)
The main data display component. It maps the following fields from the real-time dataset:
- **Order ID**: Primary identification for orders.
- **Customer ID/Name**: Identification of the purchaser.
- **Ship Name/Address**: Destination details (Address includes ellipsis tooltip for long text).
- **Verified Status**: Uses a custom **Column Template** to show "TRUE" in Emerald Green and "FALSE" in Rose Red badges.
- **Charges (Freight)**: Shipping costs formatted in currency.

### 2. Search & Filter Bar
Located above the grid for quick access:
- **Country DropDown**: Dynamically populated with unique countries.
- **Status DropDown**: Filter by 'Verified', 'Not Verified', or 'All'.
- **TextBox**: Global search for keywords across all data fields.
- **Search Button**: Applies all filters and the search keyword simultaneously.
- **Reset Button**: Clears all filters with a confirmation Dialog.

### 3. Popups (Tooltips & Dialogs)
- **Home Page**: Features a welcome dialog and detailed feature dialogs triggered by clickable cards.
- **About Page**: Team member cards trigger a rich dialog containing full bios, skills, and contact links.
- **Contact Page**: Multi-step submission flow using confirm and success dialogs. Fields use tooltips for guidance.
- **Navigation**: Tooltips on all top-level navigation links.

## 📊 Data Structure

The dashboard uses a realistic dataset found in `src/orderDetails.ts`. Each order object contains:
- `OrderID`, `CustomerID`, `CustomerName`
- `OrderDate`, `ShippedDate`
- `Freight` (Charges)
- `ShipName`, `ShipAddress`, `ShipCity`, `ShipCountry`
- `Quantity`, `Verified` status (Boolean)

## 🎨 Styling System

- **App.css**: Manages the base Syncfusion theme imports and global layout.
- **orderDetails.css**: Contains the custom "Order Dashboard" theme, including:
  - **Glassmorphism**: Backdrop blur and semi-transparent backgrounds.
  - **Status Badges**: CSS classes for `.status-true` and `.status-false` with vivid, accessible colors.
- **Page-specific CSS**: `Home.css`, `About.css`, and `Contact.css` contain rich component styles, animations, and responsive breakpoints.

---
Built with ❤️ using Syncfusion React components for the best-in-class data management experience.
