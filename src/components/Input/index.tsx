import React, { ChangeEvent } from 'react';
import './input.scss';

interface InputProps {
	type: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
	const { type, value, onChange } = props;
	return <input type={type} onChange={onChange} value={value} />;
};

export default Input;
