import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './loading.scss';

const Loading = () => {
	return (
		<div className='loading'>
			<FiSearch color='black' size={28} />
			<p>Hang on, Fetching Data For You . . .</p>
		</div>
	);
};
export default Loading;
