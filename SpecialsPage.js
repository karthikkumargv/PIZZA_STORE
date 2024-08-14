import React from 'react';


const specialsData = [
  { id: 1, name: 'Summer Veggie Delight', image: '/images/summer-veggie.jpg', description: 'Fresh summer vegetables with a light sauce.', price: 11, specialPrice: 9 },
  { id: 2, name: 'Spicy Fiesta', image: '/images/spicy-fiesta.jpg', description: 'A spicy blend of peppers and onions.', price: 13, specialPrice: 10 },
  { id: 3, name: 'Classic Pepperoni', image: '/images/classic-pepperoni.jpg', description: 'Our classic pepperoni pizza with extra cheese.', price: 12, specialPrice: 10 },
 
];

const SpecialsPage = () => {
  return (
    <div className="specials-page">
      <h1>Pizza Specials</h1>
      <p>Check out our current specials and seasonal offerings!</p>
      <div className="specials-list">
        {specialsData.length === 0 ? (
          <p>No specials available.</p>
        ) : (
          <ul>
            {specialsData.map((special) => (
              <li key={special.id}>
                <h2>{special.name}</h2>
                <img src={special.image} alt={special.name} />
                <p>{special.description}</p>
                <p>Regular Price: ${special.price}</p>
                <p>Special Price: ${special.specialPrice}</p>
                {/* Hyperlink to another webpage for ordering or more details */}
                <a href={`/order/${special.id}`} className="order-link">Order Now</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SpecialsPage;
