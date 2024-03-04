<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import { base } from '$app/paths';
	import { SKILLS } from '$lib/params';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import type { Skill } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';
	import { getAssetURL } from '$lib/data/assets';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	const { items, title } = SKILLS;

	let result: Array<Skill> = items;

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		if (isBlank(query)) {
			result = items;
		}

		result = items.filter((it) => it.name.toLowerCase().includes(query));
	};
</script>

<SearchPage {title} on:search={onSearch}>
	{#if result.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-store" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="projects-list mt-5">
			{#each result as skill (skill.slug)}
				<Card
					classes={['cursor-pointer decoration-none text-left']}
					tiltDegree={2}
					href={`${base}/venues/${skill.slug}`}
					bgImg={getAssetURL(skill.logo)}
				>
					<p class="text-[var(--tertiary-text)] text-left" style="text-align:left; justify-content: left">{skill.name}</p>
				</Card>
			{/each}
		</div>
	{/if}
</SearchPage>
