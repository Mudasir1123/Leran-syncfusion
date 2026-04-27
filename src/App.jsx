import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Components from './pages/Components';
import Services from './pages/Services';
import Products from './pages/Products';
import Team from './pages/Team';
import './App.css';

function App() {
    const location = useLocation();
    
    return (
        <ThemeProvider>
            <div className="app-container">
                <Navbar />
                <main className="main-content">
                    <Routes key={location.pathname} location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/components" element={<Components />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/team" element={<Team />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;