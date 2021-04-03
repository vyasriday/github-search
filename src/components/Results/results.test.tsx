import { render, screen, cleanup } from '@testing-library/react';
import Results from './index';

afterEach(cleanup);

describe('Results Component', () => {
	test('<Results /> with 1 repo', () => {
		const repos = [
			{
				id: 193705861,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTM3MDU4NjE=',
				name: 'adopt-me',
				full_name: 'vyasriday/adopt-me',
				private: false,
				owner: {
					login: 'vyasriday',
					id: 12582432,
					node_id: 'MDQ6VXNlcjEyNTgyNDMy',
					avatar_url: 'https://avatars.githubusercontent.com/u/12582432?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/vyasriday',
					html_url: 'https://github.com/vyasriday',
					followers_url: 'https://api.github.com/users/vyasriday/followers',
					following_url:
						'https://api.github.com/users/vyasriday/following{/other_user}',
					gists_url: 'https://api.github.com/users/vyasriday/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/vyasriday/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/vyasriday/subscriptions',
					organizations_url: 'https://api.github.com/users/vyasriday/orgs',
					repos_url: 'https://api.github.com/users/vyasriday/repos',
					events_url: 'https://api.github.com/users/vyasriday/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/vyasriday/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/vyasriday/adopt-me',
				description: 'app based on react workshop by frontendmasters ',
				fork: false,
				url: 'https://api.github.com/repos/vyasriday/adopt-me',
				forks_url: 'https://api.github.com/repos/vyasriday/adopt-me/forks',
				keys_url:
					'https://api.github.com/repos/vyasriday/adopt-me/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/vyasriday/adopt-me/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/vyasriday/adopt-me/teams',
				hooks_url: 'https://api.github.com/repos/vyasriday/adopt-me/hooks',
				issue_events_url:
					'https://api.github.com/repos/vyasriday/adopt-me/issues/events{/number}',
				events_url: 'https://api.github.com/repos/vyasriday/adopt-me/events',
				assignees_url:
					'https://api.github.com/repos/vyasriday/adopt-me/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/vyasriday/adopt-me/branches{/branch}',
				tags_url: 'https://api.github.com/repos/vyasriday/adopt-me/tags',
				blobs_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/vyasriday/adopt-me/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/vyasriday/adopt-me/languages',
				stargazers_url:
					'https://api.github.com/repos/vyasriday/adopt-me/stargazers',
				contributors_url:
					'https://api.github.com/repos/vyasriday/adopt-me/contributors',
				subscribers_url:
					'https://api.github.com/repos/vyasriday/adopt-me/subscribers',
				subscription_url:
					'https://api.github.com/repos/vyasriday/adopt-me/subscription',
				commits_url:
					'https://api.github.com/repos/vyasriday/adopt-me/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/vyasriday/adopt-me/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/vyasriday/adopt-me/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/vyasriday/adopt-me/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/vyasriday/adopt-me/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/vyasriday/adopt-me/merges',
				archive_url:
					'https://api.github.com/repos/vyasriday/adopt-me/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/vyasriday/adopt-me/downloads',
				issues_url:
					'https://api.github.com/repos/vyasriday/adopt-me/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/vyasriday/adopt-me/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/vyasriday/adopt-me/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/vyasriday/adopt-me/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/vyasriday/adopt-me/labels{/name}',
				releases_url:
					'https://api.github.com/repos/vyasriday/adopt-me/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/vyasriday/adopt-me/deployments',
				created_at: '2019-06-25T12:43:40Z',
				updated_at: '2020-10-30T17:06:11Z',
				pushed_at: '2021-03-11T05:45:06Z',
				git_url: 'git://github.com/vyasriday/adopt-me.git',
				ssh_url: 'git@github.com:vyasriday/adopt-me.git',
				clone_url: 'https://github.com/vyasriday/adopt-me.git',
				svn_url: 'https://github.com/vyasriday/adopt-me',
				homepage: '',
				size: 522,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 1,
				license: null,
				forks: 0,
				open_issues: 1,
				watchers: 0,
				default_branch: 'master',
			},
		];
		render(<Results repos={repos} />);
		const totalCards = screen.getAllByTestId('repository-row');
		expect(totalCards.length).toBe(1);

		// test for filter input
		expect(screen.getByPlaceholderText('Search repositories by').type).toBe(
			'search'
		);
		// test for owner avatar
		expect(screen.getByAltText('vyasriday').src).toBe(
			'https://avatars.githubusercontent.com/u/12582432?v=4'
		);
		// test for owner name link
		expect(screen.getByText('@vyasriday').tagName).toBe('A');
	});

	test('<Results /> with multiple repos', () => {
		const repos = [
			{
				id: 193705861,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTM3MDU4NjE=',
				name: 'adopt-me',
				full_name: 'vyasriday/adopt-me',
				private: false,
				owner: {
					login: 'vyasriday',
					id: 12582432,
					node_id: 'MDQ6VXNlcjEyNTgyNDMy',
					avatar_url: 'https://avatars.githubusercontent.com/u/12582432?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/vyasriday',
					html_url: 'https://github.com/vyasriday',
					followers_url: 'https://api.github.com/users/vyasriday/followers',
					following_url:
						'https://api.github.com/users/vyasriday/following{/other_user}',
					gists_url: 'https://api.github.com/users/vyasriday/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/vyasriday/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/vyasriday/subscriptions',
					organizations_url: 'https://api.github.com/users/vyasriday/orgs',
					repos_url: 'https://api.github.com/users/vyasriday/repos',
					events_url: 'https://api.github.com/users/vyasriday/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/vyasriday/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/vyasriday/adopt-me',
				description: 'app based on react workshop by frontendmasters ',
				fork: false,
				url: 'https://api.github.com/repos/vyasriday/adopt-me',
				forks_url: 'https://api.github.com/repos/vyasriday/adopt-me/forks',
				keys_url:
					'https://api.github.com/repos/vyasriday/adopt-me/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/vyasriday/adopt-me/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/vyasriday/adopt-me/teams',
				hooks_url: 'https://api.github.com/repos/vyasriday/adopt-me/hooks',
				issue_events_url:
					'https://api.github.com/repos/vyasriday/adopt-me/issues/events{/number}',
				events_url: 'https://api.github.com/repos/vyasriday/adopt-me/events',
				assignees_url:
					'https://api.github.com/repos/vyasriday/adopt-me/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/vyasriday/adopt-me/branches{/branch}',
				tags_url: 'https://api.github.com/repos/vyasriday/adopt-me/tags',
				blobs_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/vyasriday/adopt-me/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/vyasriday/adopt-me/languages',
				stargazers_url:
					'https://api.github.com/repos/vyasriday/adopt-me/stargazers',
				contributors_url:
					'https://api.github.com/repos/vyasriday/adopt-me/contributors',
				subscribers_url:
					'https://api.github.com/repos/vyasriday/adopt-me/subscribers',
				subscription_url:
					'https://api.github.com/repos/vyasriday/adopt-me/subscription',
				commits_url:
					'https://api.github.com/repos/vyasriday/adopt-me/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/vyasriday/adopt-me/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/vyasriday/adopt-me/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/vyasriday/adopt-me/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/vyasriday/adopt-me/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/vyasriday/adopt-me/merges',
				archive_url:
					'https://api.github.com/repos/vyasriday/adopt-me/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/vyasriday/adopt-me/downloads',
				issues_url:
					'https://api.github.com/repos/vyasriday/adopt-me/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/vyasriday/adopt-me/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/vyasriday/adopt-me/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/vyasriday/adopt-me/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/vyasriday/adopt-me/labels{/name}',
				releases_url:
					'https://api.github.com/repos/vyasriday/adopt-me/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/vyasriday/adopt-me/deployments',
				created_at: '2019-06-25T12:43:40Z',
				updated_at: '2020-10-30T17:06:11Z',
				pushed_at: '2021-03-11T05:45:06Z',
				git_url: 'git://github.com/vyasriday/adopt-me.git',
				ssh_url: 'git@github.com:vyasriday/adopt-me.git',
				clone_url: 'https://github.com/vyasriday/adopt-me.git',
				svn_url: 'https://github.com/vyasriday/adopt-me',
				homepage: '',
				size: 522,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 1,
				license: null,
				forks: 0,
				open_issues: 1,
				watchers: 0,
				default_branch: 'master',
			},

			{
				id: 193705862,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTM3MDU4NjE=',
				name: 'adopt-me',
				full_name: 'vyasriday/adopt-me',
				private: false,
				owner: {
					login: 'vyasriday',
					id: 12582432,
					node_id: 'MDQ6VXNlcjEyNTgyNDMy',
					avatar_url: 'https://avatars.githubusercontent.com/u/12582432?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/vyasriday',
					html_url: 'https://github.com/vyasriday',
					followers_url: 'https://api.github.com/users/vyasriday/followers',
					following_url:
						'https://api.github.com/users/vyasriday/following{/other_user}',
					gists_url: 'https://api.github.com/users/vyasriday/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/vyasriday/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/vyasriday/subscriptions',
					organizations_url: 'https://api.github.com/users/vyasriday/orgs',
					repos_url: 'https://api.github.com/users/vyasriday/repos',
					events_url: 'https://api.github.com/users/vyasriday/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/vyasriday/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/vyasriday/adopt-me',
				description: 'app based on react workshop by frontendmasters ',
				fork: false,
				url: 'https://api.github.com/repos/vyasriday/adopt-me',
				forks_url: 'https://api.github.com/repos/vyasriday/adopt-me/forks',
				keys_url:
					'https://api.github.com/repos/vyasriday/adopt-me/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/vyasriday/adopt-me/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/vyasriday/adopt-me/teams',
				hooks_url: 'https://api.github.com/repos/vyasriday/adopt-me/hooks',
				issue_events_url:
					'https://api.github.com/repos/vyasriday/adopt-me/issues/events{/number}',
				events_url: 'https://api.github.com/repos/vyasriday/adopt-me/events',
				assignees_url:
					'https://api.github.com/repos/vyasriday/adopt-me/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/vyasriday/adopt-me/branches{/branch}',
				tags_url: 'https://api.github.com/repos/vyasriday/adopt-me/tags',
				blobs_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/vyasriday/adopt-me/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/vyasriday/adopt-me/languages',
				stargazers_url:
					'https://api.github.com/repos/vyasriday/adopt-me/stargazers',
				contributors_url:
					'https://api.github.com/repos/vyasriday/adopt-me/contributors',
				subscribers_url:
					'https://api.github.com/repos/vyasriday/adopt-me/subscribers',
				subscription_url:
					'https://api.github.com/repos/vyasriday/adopt-me/subscription',
				commits_url:
					'https://api.github.com/repos/vyasriday/adopt-me/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/vyasriday/adopt-me/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/vyasriday/adopt-me/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/vyasriday/adopt-me/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/vyasriday/adopt-me/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/vyasriday/adopt-me/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/vyasriday/adopt-me/merges',
				archive_url:
					'https://api.github.com/repos/vyasriday/adopt-me/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/vyasriday/adopt-me/downloads',
				issues_url:
					'https://api.github.com/repos/vyasriday/adopt-me/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/vyasriday/adopt-me/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/vyasriday/adopt-me/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/vyasriday/adopt-me/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/vyasriday/adopt-me/labels{/name}',
				releases_url:
					'https://api.github.com/repos/vyasriday/adopt-me/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/vyasriday/adopt-me/deployments',
				created_at: '2019-06-25T12:43:40Z',
				updated_at: '2020-10-30T17:06:11Z',
				pushed_at: '2021-03-11T05:45:06Z',
				git_url: 'git://github.com/vyasriday/adopt-me.git',
				ssh_url: 'git@github.com:vyasriday/adopt-me.git',
				clone_url: 'https://github.com/vyasriday/adopt-me.git',
				svn_url: 'https://github.com/vyasriday/adopt-me',
				homepage: '',
				size: 522,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'TypeScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 1,
				license: null,
				forks: 0,
				open_issues: 1,
				watchers: 0,
				default_branch: 'master',
			},
		];
		render(<Results repos={repos} />);
		const totalCards = screen.getAllByTestId('repository-row');
		expect(totalCards.length).toBe(2);
	});
});
