import Assets from './data/assets';
import type { Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'sans-honte-founded',
		role: 'Founder, Contributor, Editor',
		description: 'Publish words and photos that expose the shamelessness of state power',
		type: 'Publication, News, Media, Documentary',
		location: 'New York, New York',
		period: { from: new Date() },
		//skills: [],
		name: 'Founding Sans Honte Press',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'student-intifada-nyc-2024',
		role: 'Documentarian, Volunteer',
		description: 'Documenting the unique lives & modes of resistance of NYU, CU, & CCNY students against Universities & NYPD',
		type: 'Photojournalism, Live Reporting from the Scene(s) of Mass Arrests',
		location: 'New York, New York',
		period: { from: new Date(2024, 3, 15), to: new Date() },
		//skills: [],
		name: 'Documenting the Student Intifada, NYC',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'chaz-seattle-2020',
		role: 'Documentarian, Infrastructure // Mutual Aid Support',
		description: 'Mapping CHAZ, Elder Conversations, Documenting shortcomings in Tactics & Vertical Organization',
		type: 'Photojournalism, Oral Histories, Land Back Activism',
		location: 'Capitol Hill, Seattle, Occupied Duwamish & Suquamish Land',
		period: { from: new Date(2020, 4, 15), to: new Date(2020, 6, 1) },
		//skills: [],
		name: 'Documenting Seattle George Floyd Protests & Capitol Hill Autonomous Zone',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
