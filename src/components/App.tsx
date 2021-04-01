import React, { useState, ChangeEvent } from 'react';
import Header from './Header';
import Input from './Input';
import Button from './Button';
import Results from './Results';
import './App.scss';
import { RepositorySchema } from '../schema/index';

const baseUrl = 'https://api.github.com/users';

const App: React.FC = () => {
	const [search, setSearch] = useState<string>('');
	const [repos, setRepos] = useState<RepositorySchema[]>([]);

	async function handleSubmit(e: any) {
		e.preventDefault();
		const response = await fetch(`${baseUrl}/${search}/repos`);
		const repos = await response.json();
		setRepos(repos);
	}

	return (
		<div className='main'>
			<Header />
			<form onSubmit={handleSubmit} className='search-box'>
				<Input
					value={search}
					type='search'
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setSearch(e.target.value)
					}
				/>
				<Button type='submit' label='Search' />
			</form>
			{repos.length ? <Results repos={repos} /> : null}
		</div>
	);
};

export default App;
