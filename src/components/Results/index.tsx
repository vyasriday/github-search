import React, { useState, ChangeEvent, useEffect } from 'react';
import Input from '../Input';
import { RepositorySchema } from '../../schema/index';
import { FaStar, FaExclamationTriangle } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { trim } from '../../helper';

import './results.scss';

const options = [
	{ name: 'by stars', key: 0 },
	{ name: 'by issue count', key: 1 },
	{ name: 'by watchers', key: 2 },
];

interface ResultsProps {
	repos: RepositorySchema[];
}
const Results: React.FC<ResultsProps> = (props) => {
	const { repos } = props;
	const [filter, setFilter] = useState<string>('');
	const [filteredRepos, setFilteredRepos] = useState<RepositorySchema[]>([]);
	const [sort, setSort] = useState<string>('');

	useEffect(() => {
		setFilteredRepos(repos.filter((repo) => repo.name.includes(filter)));
	}, [repos, filter]);

	useEffect(() => {
		switch (sort) {
			case 'by stars':
				setFilteredRepos(
					repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
				);
				break;
			case 'by issue count':
				setFilteredRepos(
					repos.sort((a, b) => b.open_issues_count - a.open_issues_count)
				);
				break;
			case 'by watchers':
				setFilteredRepos(
					repos.sort((a, b) => b.watchers_count - a.watchers_count)
				);
				break;
			default:
				setFilteredRepos(repos);
		}
	}, [sort, repos]);

	return (
		<div className='results'>
			<div className='tools'>
				<Input
					type='search'
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setFilter(e.target.value)
					}
					value={filter}
					placeholder='Filter repositories by name'
				/>
				<div className='sort'>
					<select
						onChange={(e: ChangeEvent<HTMLSelectElement>) =>
							setSort(e.target.value)
						}
					>
						<option value=''>Sort</option>
						{options.map((option) => (
							<option key={option.key} value={option.name}>
								{option.name}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className='repos'>
				{filteredRepos.map((repo: RepositorySchema) => {
					const {
						id,
						owner: { login, avatar_url, html_url },
						name,
						description = '',
						stargazers_count,
						open_issues_count,
						watchers_count,
						html_url: repo_url,
					} = repo;
					return (
						<div className='row' key={id}>
							<div className='owner'>
								<img src={avatar_url} alt={login} />
								<a href={html_url}>@{login}</a>
							</div>
							<ul className='info'>
								<li>
									<a href={repo_url}>{name}</a>
								</li>
								<li>{description ? trim(description, 60) + ' ...' : ''}</li>
								<li>
									<FaStar size={22} color='rgb(255, 215, 0)' />
									{stargazers_count}
								</li>
								<li>
									<FaExclamationTriangle color='rgb(214, 138, 147)' size={22} />
									{open_issues_count}
								</li>
								<li>
									<AiOutlineEye color='rgb(0,0,0)' size={22} /> {watchers_count}
								</li>
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Results;
