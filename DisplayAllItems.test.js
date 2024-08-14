import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DisplayAllItems from './DisplayAllItems';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const mock = new MockAdapter(axios);

test('should display all items', async () => {
  // Mock the GET request
  mock.onGet('http://localhost:5000/items').reply(200, [
    { name: 'Pizza', price: 10, description: 'Delicious' },
    { name: 'Pasta', price: 8, description: 'Tasty' }
  ]);

  render(<DisplayAllItems />);

  await waitFor(() => {
    expect(screen.getByText(/Pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/Pasta/i)).toBeInTheDocument();
  });
});
