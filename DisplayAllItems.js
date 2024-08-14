import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAllItems = ({ addToCart }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/items');
        setPizzas(response.data);
      } catch (err) {
        setError('Failed to fetch pizzas');
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="display-all-items">
      <h1>All Pizzas</h1>
      <p>Browse our full menu of pizzas, from classic favorites to unique creations, and find your new go-to order.</p>
      <div className="pizza-list">
        {pizzas.length > 0 ? (
          <ul>
            {pizzas.map((pizza) => (
              <li key={pizza.id}>
                <h2>{pizza.name}</h2>
                <p>{pizza.description}</p>
                <p><strong>Price:</strong> ${pizza.price}</p>
                <button onClick={() => addToCart(pizza)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No pizzas available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default DisplayAllItems;
