// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoSync title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoSync/i);
    expect(titleElement).toBeInTheDocument();
});
