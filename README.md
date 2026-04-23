# SyncPro - Premium Order Management Dashboard

A high-performance, real-time Order Management Dashboard and Marketing Site built with **React 19** and **Syncfusion** components. This application provides a full-featured suite for monitoring sales, managing customer data, and visualizing business analytics with a stunning, modern UI.

## 🚀 Key Features

### 📊 Dynamic Data Analytics
- **Spline Chart Visualization**: Real-time analytics showing **Total Orders**, **Verified Orders**, and **Not Verified Orders** by country.
- **Interactive Data Mapping**: The chart dynamically updates as you search and filter the data grid, providing instant visual feedback.
- **Multi-Series Comparison**: High-fidelity curves with interactive tooltips and custom-styled markers.

### 📦 Advanced Order Management (Grid)
- **High-Performance Grid**: Efficiently handles 800+ records with smooth paging and virtual scrolling.
- **Visual Status Tracking**: Custom column templates for "Verified" status with vibrant, color-coded badges.
- **Deep Search & Filtering**: 
  - **Global Search**: Search across ID, Name, Address, Country, and Charges instantly.
  - **Categorical Filters**: Narrow down data by Shipping Country and Verification Status.
  - **Interactive Tooltips**: Ellipsis clipping on long text fields with full-content tooltips.

### 🏠 Enhanced Marketing Suite
- **Interactive Home Page**: 
  - **Live Activity Feed**: Real-time grid of the latest order events.
  - **Pricing Plans**: Professional tier comparison with dynamic billing cycle selection.
  - **Stats Strip**: Animated metrics displaying key business performance indicators.
- **About Page**:
  - **Journey Timeline**: Interactive, color-coded vertical timeline of company milestones.
  - **Tech Stack Grid**: Filterable directory of the modern technologies powering the app.
  - **Core Values**: Rich, interactive grid highlighting company mission and vision.
- **Contact & Support**:
  - **Support Channels**: Dedicated grid for Live Chat, Email, and Phone support.
  - **Interactive FAQ**: Grid-based FAQ with dynamic answer selection.
  - **Priority Form**: Multi-step contact form with urgency selection and success tracking.

## 🛠️ Technologies Used

- **React 19**: Core framework for modern, declarative UI development.
- **Vite**: Ultra-fast build tool and development server.
- **Syncfusion React Suite (v33)**:
  - `@syncfusion/react-grid`: Robust data management and tabular display.
  - `@syncfusion/react-charts`: High-performance Spline analytics visualization.
  - `@syncfusion/react-popups`: Contextual `Tooltip` and interactive `Dialog` components.
  - `@syncfusion/react-dropdowns`: Advanced `DropDownList` for intuitive filtering.
  - `@syncfusion/react-inputs`: `TextBox` and `NumericTextBox` for precise data entry.
  - `@syncfusion/react-buttons`: `Button`, `Checkbox`, and `RadioButton` variants.
- **Modern CSS**: 
  - **Glassmorphism**: Backdrop blur and semi-transparent design system.
  - **Micro-Animations**: Smooth transitions, floating cards, and hovering effects.
  - **Custom Toggles**: Hand-crafted native CSS switch components for a premium feel.

## 📦 Installation Guide

### 1. Clone & Install
```bash
# Clone the repository
git clone [your-repo-url]
cd react-syncfusion-dashboard

# Install all dependencies
npm install
```

### 2. Required Packages
The project leverages a wide range of Syncfusion modules:
```bash
npm install @syncfusion/react-grid @syncfusion/react-charts @syncfusion/react-dropdowns @syncfusion/react-inputs @syncfusion/react-buttons @syncfusion/react-popups @syncfusion/ej2-base
```

### 3. Launch Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` to explore the dashboard.

## 🧩 Page Breakdown

### 1. Dashboard (The Core)
The primary workspace where data meets visualization. It integrates the **Order Grid** and **Spline Chart** into a single reactive interface. Filtering the grid automatically recalculates and refreshes the chart visualization.

### 2. Marketing Pages
Designed to convert and inform, using high-end UI components:
- **Home**: Showcases feature highlights, pricing, and live feed.
- **About**: Focuses on the team, milestones, and technical transparency.
- **Contact**: Provides a reliable communication bridge with confirmation safeguards.

---
Built with ❤️ using Syncfusion React components for the best-in-class data management and visualization experience.
