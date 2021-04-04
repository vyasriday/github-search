import React, { useState, ChangeEvent } from 'react';
import Button from '../Button';
import Input from '../Input';

interface SearchBarProps {
	onSubmit: any;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
	const { onSubmit } = props;
	const [search, setSearch] = useState<string>('');
	return (
		<form onSubmit={(e) => onSubmit(e, search)} className='search-box'>
			<Input
				value={search}
				type='search'
				placeholder='Enter github username'
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setSearch(e.target.value)
				}
			/>
			<Button type='submit' label='Search' />
		</form>
	);
};

export default SearchBar;
