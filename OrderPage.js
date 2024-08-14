import React from 'react';
import { useParams } from 'react-router-dom';

// Sample data for pizza specials (should match the specialsData array)
const pizzaData = [
  { id: 1, name: 'Summer Veggie Delight', description: 'Fresh summer vegetables with a light sauce.', price: 9 },
  { id: 2, name: 'Spicy Fiesta', description: 'A spicy blend of peppers and onions.', price: 10 },
  { id: 3, name: 'Classic Pepperoni', description: 'Our classic pepperoni pizza with extra cheese.', price: 10 },
  // Add more pizzas as needed
];

const OrderPage = () => {
  const { id } = useParams();
  const pizza = pizzaData.find(pizza => pizza.id === parseInt(id));

  return (
    <div className="order-page">
      {pizza ? (
        <>
          <h1>Order {pizza.name}</h1>
          <p>{pizza.description}</p>
          <p>Price: ${pizza.price}</p>
          <button className="order-button">Proceed to Checkout</button>
        </>
      ) : (
        <p>Pizza not found.</p>
      )}
    </div>
  );
};

export default OrderPage;
