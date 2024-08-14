import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UpdateItem from './UpdateItem'; // Import your UpdateItem component
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Create a mock instance
const mock = new MockAdapter(axios);

test('should update an item', async () => {
  // Mock the GET request to fetch the existing item
  mock.onGet('http://localhost:5000/items/1').reply(200, {
    name: 'Pizza',
    price: 10,
    description: 'Delicious'
  });

  // Mock the PUT request to update the item
  mock.onPut('http://localhost:5000/items/1').reply(200, {
    name: 'Pizza Margherita',
    price: 12,
    description: 'Delicious with extra cheese'
  });

  render(<UpdateItem itemId={1} />); // Render your component

  // Check the initial state
  await waitFor(() => {
    expect(screen.getByLabelText(/Name/i).value).toBe('Pizza');
    expect(screen.getByLabelText(/Price/i).value).toBe('10');
    expect(screen.getByLabelText(/Description/i).value).toBe('Delicious');
  });

  // Update the form fields
  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Pizza Margherita' } });
  fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '12' } });
  fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Delicious with extra cheese' } });

  // Submit the form
  fireEvent.click(screen.getByText(/Update Pizza/i));

  // Verify that the form fields are cleared after submission
  await waitFor(() => {
    expect(screen.getByLabelText(/Name/i).value).toBe('Pizza Margherita');
    expect(screen.getByLabelText(/Price/i).value).toBe('12');
    expect(screen.getByLabelText(/Description/i).value).toBe('Delicious with extra cheese');
  });
});
