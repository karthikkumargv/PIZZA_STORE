import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DeleteItem from './DeleteItem';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const mock = new MockAdapter(axios);

test('should delete an item', async () => {

  mock.onGet('http://localhost:5000/items/1').reply(200, {
    name: 'Pizza',
    price: 10,
    description: 'Delicious'
  });

 
  mock.onDelete('http://localhost:5000/items/1').reply(200);

  render(<DeleteItem itemId={1} />); 

  
  await waitFor(() => {
    expect(screen.getByText(/Pizza/i)).toBeInTheDocument();
  });


  fireEvent.click(screen.getByText(/Delete Pizza/i));


  await waitFor(() => {
    expect(screen.queryByText(/Pizza/i)).not.toBeInTheDocument();
  });
});
