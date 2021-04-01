import React, { useState, ChangeEvent, useEffect } from 'react';
import Input from '../Input';
import { RepositorySchema } from '../../schema/index';

interface ResultsProps {
	repos: RepositorySchema[];
}
const Results: React.FC<ResultsProps> = (props) => {
	const { repos } = props;
	const [filter, setFilter] = useState<string>('');
	const [filteredRepos, setFilteredRepos] = useState<RepositorySchema[]>([]);

	useEffect(() => {
		setFilteredRepos(repos.filter((repo) => repo.name.includes(filter)));
	}, [repos, filter]);
	return (
		<div className='results'>
			<Input
				type='text'
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setFilter(e.target.value)
				}
				value={filter}
			/>
			{filteredRepos.map((repo: RepositorySchema) => {
				const {
					id,
					owner: { login, avatar_url },
					name,
					description,
					stargazers_count,
					open_issues_count,
					watchers_count,
				} = repo;
				return (
					<div className='row' key={id}>
						<div className='owner'>
							<img src={avatar_url} alt='login' />
							<h3>{login}</h3>
						</div>
						<div className='info'>
							<p>Repository Name: {name}</p>
							<p>Description: {description}</p>
							<p>Total Stars: {stargazers_count}</p>
							<p>Open Issues: {open_issues_count}</p>
							<p>Watchers: {watchers_count}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Results;
