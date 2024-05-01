import Assets from './data/assets';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'student-intifada-nyc-2024',
		color: '#5e95e3',
		description:
			'Ongoing coverage of Mass Arrests, Student Resistance, and the extreme measures the US Government & Universities will take to squash all critique of their complicity with the Palestinian Genocide.',
		shortDescription:
			'Ongoing coverage of Mass Arrests, Student Resistance, and the extreme measures the US Government & Universities will take to squash all critique of their complicity with the Palestinian Genocide.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		type: 'Website Template'
	},
	{
		slug: 'chaz-seattle-2020',
		color: '#0a9348',
		description:
			'CHAZ / CHOP Photographs, Interviews, and Commentary -- Coming Soon',
		shortDescription:
			'CHAZ / CHOP Photographs, Interviews, and Commentary -- Coming Soon',
		links: [{ to: 'https://en.wikipedia.org/wiki/Capitol_Hill_Occupied_Protest', label: 'Wiki Contributions' }],
		logo: Assets.Unknown,
		name: 'CHAZ 2020',
		period: {
			from: new Date()
		},
		type: 'Documentary Photojournalism and Interviews',
		screenshots: []
	}
];

export default MY_PROJECTS;
