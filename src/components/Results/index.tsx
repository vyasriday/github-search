import React, { useState, ChangeEvent, useEffect } from 'react';
import Input from '../Input';
import { RepositorySchema } from '../../schema/index';
import { FaStar, FaExclamationTriangle } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { trim } from '../../helper';
import Dropdown from '../Dropdown';

import './results.scss';

const sortOptions = [
	{ name: 'by stars', key: 0, value: 'by stars' },
	{ name: 'by issue count', key: 1, value: 'by issue count' },
	{ name: 'by watchers', key: 2, value: 'by watchers' },
];

const filterOptions = [
	{ name: 'name', key: 0, value: 'name' },
	{ name: 'owner', key: 1, value: 'owner' },
	{ name: 'stars', key: 2, value: 'stars' },
	{ name: 'open issues', key: 3, value: 'open issues' },
	{ name: 'watchers', key: 4, value: 'watchers' },
];
interface ResultsProps {
	repos: RepositorySchema[];
}
const Results: React.FC<ResultsProps> = (props) => {
	const [filteredRepos, setFilteredRepos] = useState<RepositorySchema[]>([]);
	const [filterType, setFilterType] = useState<string>('name');
	const [sortType, setSortType] = useState<string>('');
	const [filter, setFilter] = useState<string>('');
	const { repos } = props;

	// useEffect to filter repos based on different filter types
	useEffect(() => {
		switch (filterType) {
			case 'name':
				setFilteredRepos(repos.filter((repo) => repo.name.includes(filter)));
				break;
			case 'owner':
				setFilteredRepos(
					repos.filter((repo) => repo.owner.login.includes(filter))
				);
				break;
			case 'stars':
				setFilteredRepos(
					repos.filter((repo) => repo.stargazers_count >= +filter)
				);
				break;
			case 'issues':
				setFilteredRepos(
					repos.filter((repo) => repo.open_issues_count >= +filter)
				);
				break;
			case 'watchers':
				setFilteredRepos(
					repos.filter((repo) => repo.watchers_count >= +filter)
				);
				break;
		}
	}, [filterType, filter, repos]);
	// use Effect to sort repos
	useEffect(() => {
		switch (sortType) {
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
	}, [sortType, repos]);

	return (
		<div className='results'>
			<div className='tools'>
				<div className='search'>
					<Input
						type='search'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setFilter(e.target.value)
						}
						value={filter}
						placeholder={`Search repositories by`}
					/>
					<Dropdown
						onChange={(e: ChangeEvent<HTMLSelectElement>) =>
							setFilterType(e.target.value)
						}
						options={filterOptions}
					/>
				</div>
				<div className='sort'>
					<Dropdown
						onChange={(e: ChangeEvent<HTMLSelectElement>) =>
							setSortType(e.target.value)
						}
						label='Sort'
						options={sortOptions}
					/>
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
