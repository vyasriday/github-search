export const trim = (text: string, length: number) =>
	text.length > length ? text.substr(0, length) : text;
