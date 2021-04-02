import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './index';

describe('Test Button Component', () => {
	test('renders App component', () => {
		render(<Button label='Test Button' />);
		expect(screen.getByText('Test Button')).toBeInTheDocument();
		screen.debug();
	});
});
