import React, { useState, ChangeEvent } from 'react';
import Header from './Header';
import Input from './Input';
import Button from './Button';
import Results from './Results';
import Loading from './Loading';
import './App.scss';
import { RepositorySchema } from '../schema/index';

const baseUrl = 'https://api.github.com/users';

const App: React.FC = () => {
	const [search, setSearch] = useState<string>('');
	const [repos, setRepos] = useState<RepositorySchema[]>([]);
	const [loading, showLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	async function handleSubmit(e: any) {
		e.preventDefault();
		setRepos([]);
		showLoading(true);
		try {
			const response = await fetch(`${baseUrl}/${search}/repos`);
			const jsonResponse = await response.json();
			if (jsonResponse.message) {
				showLoading(false);
				setError('user not found!');
			}
			setRepos(jsonResponse);
			showLoading(false);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className='main'>
			<Header />
			<form onSubmit={handleSubmit} className='search-box'>
				<Input
					value={search}
					type='search'
					placeholder='Search Github Repos'
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setSearch(e.target.value)
					}
				/>
				<Button type='submit' label='Search' />
			</form>
			{loading ? (
				<Loading />
			) : error ? (
				<h3 style={{ textAlign: 'center', margin: '2rem' }}>{error}</h3>
			) : repos.length ? (
				<Results repos={repos} />
			) : null}
		</div>
	);
};

export default App;
