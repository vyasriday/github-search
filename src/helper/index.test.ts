import { truncate } from './index';

describe('Test Helper Function', () => {
	it('truncate() returns same string if passed length is more than actual string length', () => {
		expect(truncate('test', 5)).toBe('test');
	});
	it('truncate() returns truncated string if passed length is less than actual string length', () => {
		expect(truncate('test', 2)).toBe('te...');
	});
});
