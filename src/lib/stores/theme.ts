import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const key = '@riadh-adrani-theme';

const updateLocalStorage = (value: boolean) => {
	if (browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const theme = writable<boolean>(false);

export const toggleTheme = (value?: boolean) =>
	theme.update((it) => {
		const $v = typeof value === 'boolean' ? value : !it;

		updateLocalStorage($v);

		document.querySelector(':root')?.setAttribute('data-theme', $v ? 'dark' : 'light');
		document.querySelector('.map-container iframe')?.setAttribute('style', $v ? 'border:0; filter: grayscale(90%) invert(99%) contrast(88%);' : 'border:0;');
		document.querySelector('div#sign-up-container')?.setAttribute(
			'style',
			$v ? 'background: url("https://media.giphy.com/media/3o7btOfPKQb7mCLxBu/giphy.gif") center bottom; width:100%': 'background: url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2QwYm1vaGNrbjBlMDNhcTJmMGp0N20xcTR4bnZ5dTlybmI3bDhqciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D5Pol6qyMRnLGFkoVT/source.gif") center bottom; width: 100%;'
		);
		document.querySelector('div#cta-container')?.setAttribute(
			'style',
			$v ? 'background: url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3NkcGNiNmpvYjE1aTJuZzJlejJ2MXIzeTdvZXFnd2h6NjN2NHRjcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rEgt2WXo1cZ4o6LAYR/source.gif") center bottom; width:100%': 'background: url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXlrazY3N3h5Z2NzanJkMHVhMmJtNDlqemNtc2UzZW9nZXU2NXJhNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jHwklFMXUPnhuaYnQI/giphy.gif") center bottom; width: 100%;'
		);
		return $v;
	});

export const onHydrated = () => {
	const fromStore = localStorage.getItem(key);

	if (!fromStore) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			// dark mode
			toggleTheme(true);
		}
	} else {
		toggleTheme(JSON.parse(fromStore));
	}
};
