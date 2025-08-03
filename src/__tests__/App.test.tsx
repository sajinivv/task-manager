import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import App from '../App';
import {store} from '../store/store';

// Mock fetch globally for all tests in this file
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  ) as jest.Mock;
});

test('renders a specific text within the App component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // Replace the text below with something you expect to be in your App
  expect(screen.getByRole('user-name')).toBeInTheDocument();
});

test('renders a <ul> element for the task list', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitFor(() => {
    expect(screen.getByRole('list-task')).toBeInTheDocument();
  });
});

