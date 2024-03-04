<script lang="ts">
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { Event } from '$lib/types';
	import SvelteMarkdown from 'svelte-markdown'

	export let event: Event;
	$: tags = event.tags.split('|').join(', ');
	$: md_title = `##${event.title}`
	
</script>

<Card classes={['flex']} color={(event.color ?? '#52A8FFFF')}>
	<CardLogo alt={event.title} src={event.storage_link} size={'100%'} radius={'0'} style={"size: 100%"}/>
	<div class="m-t-20px row justify-between">
		<a href={event.event_link} target="_blank">
			<CardTitle  title={event.title} />
		</a>
		<CardLink to={event.storage_link} label="save poster..."/>
		<CardLink to={event.event_link} label="get the deets..."/>
	</div>
	<CardDivider />
	<div
		class="m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"
	>
		<SvelteMarkdown source={'**When?**<br><br>+ __' + event.date + '__<br><br>'}></SvelteMarkdown>
		<CardDivider />
		<SvelteMarkdown source={'**What Time?**<br><br>+ __' + event.local_time + '__<br><br>'}></SvelteMarkdown>
		<CardDivider />
		<SvelteMarkdown source={'**Le vibe :**<br><br>+ __**' + tags + '**__<br><br>'}></SvelteMarkdown>
	</div>
	<p class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1">
		<SvelteMarkdown
		source={'**Readable Text**: ' + event.text}/>
	</p>

</Card>
