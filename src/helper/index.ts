export const truncate = (text: string, length: number) =>
	text.length > length ? text.slice(0, length) + '...' : text;
