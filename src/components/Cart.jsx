import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button } from '@syncfusion/react-buttons';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <Button className="e-flat" onClick={onClose}>Close</Button>
      </div>
      {cart.length === 0 ? (
        <div className="cart-empty">Cart is empty.</div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-qty">
                  <Button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</Button>
                  <span>{item.quantity}</span>
                  <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                </span>
                <span className="cart-item-price">{item.price}</span>
                <Button className="e-danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </li>
            ))}
          </ul>
          <div className="cart-total">Total: ${total.toFixed(2)}</div>
          <div className="cart-actions">
            <Button className="e-outline" onClick={clearCart}>Clear Cart</Button>
            <Button className="e-primary" onClick={handleCheckout}>Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
