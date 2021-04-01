import React from 'react';
import './button.scss';

interface ButtonProps {
	label: string;
	type: 'button' | 'submit' | 'reset';
	background?: string;
	color?: string;
}
const Button: React.FC<ButtonProps> = (props) => {
	const { label, type, background, color } = props;
	return (
		<button
			type={type}
			style={{
				backgroundColor: background ? background : '#fff',
				color: color ? color : '#000',
			}}
		>
			{label}
		</button>
	);
};

export default Button;
