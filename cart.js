import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${calculateTotal()}</h3>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <Link to="/">Continue Shopping</Link>
    </div>
  );
};

export default Cart;
