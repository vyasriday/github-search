import React, { useState } from 'react';
import Header from './Header';
import Results from './Results';
import Loading from './Loading';
import SearchBar from './SearchBar';
import './App.scss';
import { RepositorySchema } from '../schema/index';

const baseUrl = 'https://api.github.com/users';

const App: React.FC = () => {
	const [repos, setRepos] = useState<RepositorySchema[]>([]);
	const [loading, showLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	async function handleSubmit(e: any, search: string) {
		e.preventDefault();
		setRepos([]);
		setError('');
		showLoading(true);
		try {
			const url = `${baseUrl}/${search}/repos?per_page=100&all=true`;
			const response = await fetch(url);

			if (response.status === 404) {
				showLoading(false);
				setError('user not found!');
				return;
			}

			const jsonResponse = await response.json();
			if (!jsonResponse.length) {
				setError('found 0 repositories 😰');
			} else {
				setError('');
				setRepos(jsonResponse);
			}
			showLoading(false);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className='main'>
			<Header />
			<SearchBar onSubmit={handleSubmit} />
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
