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

export const TITLE_SUFFIX = "Sign up. Show off. Find venues. Discover the NYC art world.";

export const NavBar = {
	home: 'Home',
	artists: 'Artists',
	about: 'About Artigoh',
	map: 'Mapping NYC\'s Art Scene',
	venues: 'Venues',
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
	name: 'Artigoh',
	title: 'Artigoh v0',
	welcome: 'Welcome to Artigoh',
	description:
		'Build a free portfolio. Skip the gallery bottleneck. Find & get matched with venues to exhibit your art on your own terms. Sign up to become an early adopter of the best free portfolio platform in New York.',
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
	title: 'Artists',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'About Artigoh',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Venues',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: "Mapping NYC's Art Scene",
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
