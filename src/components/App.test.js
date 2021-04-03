import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
	test('renders App component', () => {
		render(<App />);

		expect(screen.getByText('Github Search')).toBeTruthy();

		const [input] = screen.getAllByPlaceholderText('Enter github username');
		expect(input.type).toBe('search');

		const button = screen.getByText('Search');
		expect(button.type).toBe('submit');

		fireEvent.click(button, {});
	});
});
