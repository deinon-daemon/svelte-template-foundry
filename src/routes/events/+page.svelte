<script lang="ts">
	import Chip from '$lib/components/Chip/Chip.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import EventCard from '$lib/components/EventCard/EventCard.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { EVENTS } from '$lib/params';
	import type { Event, Project, Skill } from '$lib/types';
	import { onMount } from 'svelte';
	import MY_SKILLS from '$lib/skills.params';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import Card from "$lib/components/Card/Card.svelte";
	import {createQueryStore} from "$lib/store";

	let filter0 = createQueryStore("q")
	const filter1 = createQueryStore("filter1")

	export let data;


	interface SkillFilter extends Skill {
		isSelected?: boolean;
	}

	const { items, title } = EVENTS;

	let filters: Array<SkillFilter> = MY_SKILLS.filter((it) => {
		return items.some((project) => project.skills.some((skill) => skill.slug === it.slug));
	});

	let search = '';
	let displayed: Array<Event> = [];

	const isSelected = (slug: string): boolean => {
		return filters.some((item) => item.slug === slug && item.isSelected);
	};

	const onSelected = (slug: string) => {
		filters = filters.map((tech) => {
			if (tech.slug === slug) {
				tech.isSelected = !isSelected(slug);
			}

			return tech;
		});
	};

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;


	};

	$: {
		displayed = data?.events.filter(
				(item) =>
						search &&
						(item.title.toLowerCase().includes(search.toLowerCase()) ||
						item.text.toLowerCase().includes(search.toLowerCase()) ||
						item.tags.split('|').join(', ').includes(search.toLowerCase()))
		)
	}


	onMount(() => {

		const query = location.search;

		if (query) {
			const queryParams = new URLSearchParams(location.search);

			const item = queryParams.get('item');

			if (item) {
				search = item;
			}
		}
	});
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="projects-filters">
		{#each filters as tech}
			<Chip active={tech.isSelected} classes={'text-0.8em'} on:click={() => onSelected(tech.slug)}
				>{tech.name}</Chip
			>
		{/each}
	</div>
	{#if displayed.length === 0 && !data.events}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else if displayed.length && data.events && search}
		<div class="p-5 gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			{#each displayed as event}
				<EventCard {event} />
			{/each}
		</div>
	{:else}
		<div class="p-5 gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			{#each data.events as event}
				<EventCard {event} />
			{/each}
		</div>
	{/if}
</SearchPage>

<style lang="scss">
	.projects-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
