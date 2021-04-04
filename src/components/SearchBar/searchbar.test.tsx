import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBar from '.';

const mockOnSubmit = jest.fn((e: any, search: string) => {});

afterEach(cleanup);

beforeEach(() => {
	mockOnSubmit.mockImplementation((e: any) => {
		e.preventDefault();
	});
});

describe('SearcBar Component', () => {
	test('<SearchBar />', () => {
		render(<SearchBar onSubmit={mockOnSubmit} />);

		const input = screen.getByPlaceholderText('Enter github username');

		userEvent.type(input, 'vyasriday');

		const submit = screen.getByText('Search');
		userEvent.click(submit);

		expect(mockOnSubmit).toHaveBeenCalled();
	});
});
