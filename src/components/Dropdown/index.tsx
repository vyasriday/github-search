import React, { ChangeEvent } from 'react';
import './dropdown.scss';

interface Option {
	key: number;
	value: string;
	name: string;
}

interface DropdownProps {
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	options: Option[];
	label?: string;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
	const { onChange, options, label } = props;
	return (
		<select onChange={onChange}>
			{label ? <option value=''>{label}</option> : null}
			{options.map((option) => (
				<option key={option.key} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
};
export default Dropdown;
