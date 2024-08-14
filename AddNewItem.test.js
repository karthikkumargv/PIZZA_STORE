import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddNewItem from './AddNewItem';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const mock = new MockAdapter(axios);

test('should add a new item', async () => {
  // Mock the POST request
  mock.onPost('http://localhost:5000/items').reply(200, {
    name: 'Pizza',
    price: 10,
    description: 'Delicious'
  });

  render(<AddNewItem />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Pizza' } });
  fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '10' } });
  fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Delicious' } });

  fireEvent.click(screen.getByText(/Add Pizza/i));

  await waitFor(() => {
    expect(screen.getByLabelText(/Name/i).value).toBe('');
    expect(screen.getByLabelText(/Price/i).value).toBe('');
    expect(screen.getByLabelText(/Description/i).value).toBe('');
  });
});
