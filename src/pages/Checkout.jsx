import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import { TextBox, NumericTextBox } from '@syncfusion/react-inputs';
import { Button } from '@syncfusion/react-buttons';
import { DropDownList } from '@syncfusion/react-dropdowns';
import { Dialog } from '@syncfusion/react-popups';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    const { isDarkMode, primaryColor } = useContext(ThemeContext);
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(false);

    const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

    const countries = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Japan'];

    const handleCheckout = (e) => {
        e.preventDefault();
        setIsSuccess(true);
    };

    const handleFinish = () => {
        clearCart();
        navigate('/');
    };

    if (cart.length === 0 && !isSuccess) {
        return (
            <div className={`checkout-container ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="empty-checkout">
                    <h2>Your cart is empty</h2>
                    <p>Add some products to your cart before checking out.</p>
                    <Button className="e-primary" onClick={() => navigate('/products')}>Browse Products</Button>
                </div>
            </div>
        );
    }

    return (
        <div className={`checkout-container ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 className="page-title">Checkout</h1>
            
            <div className="checkout-content">
                <form className="checkout-form glass-panel" onSubmit={handleCheckout}>
                    <section className="form-section">
                        <h2>Personal Information</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <TextBox placeholder="First Name" floatLabelType="Auto" required />
                            </div>
                            <div className="form-group">
                                <TextBox placeholder="Last Name" floatLabelType="Auto" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <TextBox placeholder="Email Address" floatLabelType="Auto" type="email" required />
                        </div>
                    </section>

                    <section className="form-section">
                        <h2>Shipping Address</h2>
                        <div className="form-group">
                            <TextBox placeholder="Address" floatLabelType="Auto" required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <TextBox placeholder="City" floatLabelType="Auto" required />
                            </div>
                            <div className="form-group">
                                <DropDownList dataSource={countries} placeholder="Country" floatLabelType="Auto" required />
                            </div>
                        </div>
                    </section>

                    <section className="form-section">
                        <h2>Payment Method</h2>
                        <div className="form-group">
                            <TextBox placeholder="Card Number" floatLabelType="Auto" required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <TextBox placeholder="Expiry Date (MM/YY)" floatLabelType="Auto" required />
                            </div>
                            <div className="form-group">
                                <NumericTextBox placeholder="CVV" floatLabelType="Auto" format="###" min={100} max={999} required />
                            </div>
                        </div>
                    </section>

                    <div className="form-actions">
                        <Button className={`e-primary e-large btn-${primaryColor}`} type="submit">Complete Purchase</Button>
                    </div>
                </form>

                <div className="order-summary glass-panel">
                    <h2>Order Summary</h2>
                    <div className="summary-items">
                        {cart.map(item => (
                            <div key={item.id} className="summary-item">
                                <span>{item.name} x {item.quantity}</span>
                                <span>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-total">
                        <strong>Total</strong>
                        <strong>${total.toFixed(2)}</strong>
                    </div>
                </div>
            </div>

            <Dialog
                header="Order Confirmed! 🎉"
                open={isSuccess}
                onClose={handleFinish}
                style={{ maxWidth: '400px' }}
                footer={<Button className="e-primary" onClick={handleFinish}>Go to Home</Button>}
            >
                <div className="success-dialog">
                    <p>Thank you for your purchase! Your order has been placed successfully.</p>
                    <p>Order ID: #SP-{Math.floor(Math.random() * 100000)}</p>
                </div>
            </Dialog>
        </div>
    );
};

export default Checkout;
