import { render, screen, cleanup } from '@testing-library/react';

import Button from './index';

afterEach(cleanup);

describe('Button Component', () => {
	test('<Button /> with only required props', () => {
		render(<Button label='Test Button' type='submit' />);
		expect(screen.getByText('Test Button').type).toBe('submit');
		expect(screen.getByText('Test Button').textContent).toBe('Test Button');
		expect(screen.getByText('Test Button').style.color).toBe('rgb(0, 0, 0)');
	});

	test('<Button /> with optional props', () => {
		render(
			<Button label='Test Button' type='reset' color='#fff' background='#000' />
		);
		expect(screen.getByText('Test Button').type).toBe('reset');
		expect(screen.getByText('Test Button').textContent).toBe('Test Button');
		expect(screen.getByText('Test Button').style.color).toBe(
			'rgb(255, 255, 255)'
		);
		expect(screen.getByText('Test Button').style.backgroundColor).toBe(
			'rgb(0, 0, 0)'
		);
	});
});
