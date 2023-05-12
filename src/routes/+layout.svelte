<script>
	import { navigating } from '$app/stores';
	import '../app.postcss';
	import PreloadingIndicator from './PreloadingIndicator.svelte';
</script>

{#if $navigating}
	<PreloadingIndicator />
{/if}
<slot />
