import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import Dropdown from './index';

afterEach(cleanup);

const options = [
	{ name: 'by stars', key: 0, value: 'by stars' },
	{ name: 'by issue count', key: 1, value: 'by issue count' },
	{ name: 'by watchers', key: 2, value: 'by watchers' },
];

const mockOnChange = jest.fn(() => {});

describe('Dropdown Component', () => {
	test('<Dropdown />', () => {
		render(<Dropdown options={options} onChange={mockOnChange} label='Sort' />);
		const select = screen.getByDisplayValue('Sort');

		fireEvent.change(select, {
			target: { value: 'by stars' },
		});
		expect(mockOnChange).toHaveBeenCalled();
		mockOnChange.mockImplementation(() => 'by stars');
		fireEvent.change(select, {
			target: { value: 'by stars' },
		});
		expect(mockOnChange).toHaveBeenCalledTimes(2);
		expect(mockOnChange).lastReturnedWith('by stars');
	});
});
