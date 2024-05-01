import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = "Write words more naked than flesh, stronger than bone, more resilient than sinew, sensitive than nerve...";

export const NavBar = {
	home: 'Home',
	projects: 'Projects',
	about: 'About Us',
	map: 'Media Map',
	sign_up: 'Sign Up'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	name: 'Sans Honte Press',
	title: 'Sans Honte Press',
	welcome: '/shamelessness/',
	description:
		"live coverage of proletarian action, unfiltered photojournalism, and commentary that aims to castrate the State's shameless abuse of power.",
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/'
		},
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/'
		},
		{
			platform: Platform.StackOverflow,
			link: 'https://stackoverflow.com/'
		},
		{
			platform: Platform.Email,
			link: 'riadh-adrani@hotmail.fr'
		},
		{
			platform: Platform.Youtube,
			link: 'https://www.youtube.com'
		},
		{
			platform: Platform.Facebook,
			link: 'https://www.facebook.com'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'About Us',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Venues',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: "Media Map",
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
