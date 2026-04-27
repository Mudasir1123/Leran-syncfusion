import React, { useContext } from 'react';
import { Button } from '@syncfusion/react-buttons';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Products.css';

function Products() {
    const { isDarkMode, primaryColor } = useContext(ThemeContext);

    const products = [
        {
            id: 1,
            name: 'React Component Library',
            price: '$299',
            rating: 4.8,
            badge: 'Popular',
            description: 'Complete collection of React components'
        },
        {
            id: 2,
            name: 'Data Grid Pro',
            price: '$199',
            rating: 4.7,
            badge: 'Advanced',
            description: 'Powerful data grid with sorting and filtering'
        },
        {
            id: 3,
            name: 'Chart Suite',
            price: '$249',
            rating: 4.9,
            badge: 'New',
            description: 'Interactive charts and visualizations'
        },
        {
            id: 4,
            name: 'Form Builder',
            price: '$179',
            rating: 4.6,
            badge: 'Essential',
            description: 'Build forms visually with validation'
        },
        {
            id: 5,
            name: 'Theme Studio',
            price: '$149',
            rating: 4.5,
            badge: 'Design',
            description: 'Create and customize themes easily'
        },
        {
            id: 6,
            name: 'Premium Support',
            price: '$599',
            rating: 4.9,
            badge: 'Premium',
            description: 'Priority support and updates'
        }
    ];

    return (
        <div className={`products-container ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 className="page-title">Our Products</h1>
            <p className="subtitle">Discover our premium products designed for developers.</p>

            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card zoom-in">
                        <div className="product-badge">{product.badge}</div>
                        <div className="product-image">
                            <div className="image-placeholder"></div>
                        </div>
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <p className="description">{product.description}</p>
                            <div className="rating">
                                {'⭐'.repeat(Math.floor(product.rating))} {product.rating}
                            </div>
                            <div className="price-section">
                                <span className="price">{product.price}</span>
                                <Button className={`e-primary btn-${primaryColor}`}>
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
