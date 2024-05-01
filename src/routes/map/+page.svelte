<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';


	const { item, title } = RESUME;
</script>

<CommonPage {title}>
	<div class="resume">
		{#if item}
			<a href={item}>
				<Chip size={'1.25em'}>Download</Chip>
			</a>
		{:else}
			<Chip>Ooops! We're still mapping our coverage of NYC . . 🎨 under construction 🎨</Chip>
		{/if}
	</div>
	<div class="map-container">
		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48392.871462257615!2d-73.995974!3d40.705809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2343ce7b2b%3A0x2526ddba7abd465c!2sBrooklyn%20Bridge!5e0!3m2!1sen!2sus!4v1697313257594!5m2!1sen!2sus"
				title="gmaps-iframe"
				width="400"
				height="200"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				style="border:0; filter: grayscale(90%) invert(99%) contrast(88%);"
		></iframe>
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
	.map-container {
		position: relative;
		padding-bottom: 75%;
		height: 0;
		overflow: hidden;

	}
	.map-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
