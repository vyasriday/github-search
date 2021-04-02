import React, { ChangeEvent } from 'react';
import './input.scss';

interface InputProps {
	type: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

const Input: React.FC<InputProps> = (props) => {
	const { type, value, onChange, placeholder } = props;
	return (
		<input
			type={type}
			onChange={onChange}
			value={value}
			placeholder={placeholder ? placeholder : ''}
		/>
	);
};

export default Input;
