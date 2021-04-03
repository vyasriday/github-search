import { render, screen, cleanup } from '@testing-library/react';

import Header from './index';

afterEach(cleanup);

describe('Header Component', () => {
	test('Header />', () => {
		render(<Header />);
		expect(screen.getByText('Github Search').tagName).toBe('H3');
	});
});
