import Input from './index';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';

const mockOnChange = jest.fn(() => {});

afterEach(cleanup);

describe('Input Component', () => {
	test('<Input /> type text', () => {
		render(
			<Input
				type='text'
				value=''
				onChange={mockOnChange}
				placeholder='search test data'
			/>
		);
		const input = screen.getByPlaceholderText('search test data');
		expect(input.type).toBe('text');
		fireEvent.change(input, { target: { value: 'vyasriday' } });

		expect(mockOnChange).toHaveBeenCalled();
	});

	test('<Input /> type search', () => {
		render(
			<Input
				type='search'
				value='vyasriday'
				onChange={mockOnChange}
				placeholder='search github repo'
			/>
		);
		const input = screen.getByPlaceholderText('search github repo');
		expect(input.type).toBe('search');
		expect(input.value).toBe('vyasriday');
		expect(mockOnChange).toHaveBeenCalledTimes(0);
	});
});
