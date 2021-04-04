import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
	test('renders App component', () => {
		render(<App />);

		// check if header is in the dom
		expect(screen.getByText('Github Search')).toBeTruthy();

		const input = screen.getByPlaceholderText('Enter github username');
		expect(input.type).toBe('search');
		userEvent.type(input, 'vyasriday');

		const button = screen.getByText('Search');
		expect(button.type).toBe('submit');
		userEvent.click(button);

		// check if loading screen is shown
		expect(screen.getByText(/Hang on/)).toBeTruthy();
	});
});
