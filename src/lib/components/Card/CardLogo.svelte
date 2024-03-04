<script lang="ts">
	export let src: string;
	export let alt: string;
	export let size = 50;
	export let radius = '15px';
	export let classes = [];

    export let style = '';
</script>

<img class={`${classes.join(
		' '
	)}`} {src} {alt} height={size} width={size} style={style} />

