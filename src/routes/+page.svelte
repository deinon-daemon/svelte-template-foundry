<script lang="ts" xmlns:svelte="http://www.w3.org/1999/html">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { TITLE_SUFFIX } from '$lib/params';
	import { HOME, getPlatfromIcon } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';
	import { isBlank } from '@riadh-adrani/utils';
	import {onMount} from "svelte";


	const { description, welcome, links, title, skills } = HOME;

	let gif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3NkcGNiNmpvYjE1aTJuZzJlejJ2MXIzeTdvZXFnd2h6NjN2NHRjcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rEgt2WXo1cZ4o6LAYR/source.gif"
	// conways
	// "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRrNWh1ZzQxaHcxcTQyYzBkZDhvcW90MWhtMTJ0NGZkandjbGE4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LwRYWO8caPnIGPFMAA/giphy.gif";

	onMount(() => {
		const container = document.querySelector('div#cta-container');
		const theme = document.querySelector('html').getAttribute('data-theme');
		//console.log('Theme: ', theme);

		if (theme !== 'dark') {
			gif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXlrazY3N3h5Z2NzanJkMHVhMmJtNDlqemNtc2UzZW9nZXU2NXJhNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jHwklFMXUPnhuaYnQI/giphy.gif";
		}


		container.style.background = `url(${gif}) center bottom`;
		// lmao "https://media.giphy.com/media/839DsJwSJTIo5kG6D5/giphy.gif"
		// also good https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemdzNHpsNjh6dDlvb280bHVkYThuNHp3OTkwZTh4czhuOWNxN3I4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qoJ9sZu2Xui9a/giphy.gif
		container.style.width='100%';
	});

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{title + " | " + TITLE_SUFFIX}</title>
</svelte:head>
<div
	id="cta-container"
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{welcome}</MainTitle>
		<p class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em]">
			{description}
		</p>
	</div>
</div>

<style lang="scss">
	.text-container {
		background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white background */
		color: black; /* Text color */
		padding: 20px;
		display: inline-block;
		border-radius: 5px;
	}
</style>