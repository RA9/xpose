<script>
	import Card from './Card.svelte';
	/**
	 * @type {string | any[]}
	 */
	export let projects;

	console.log({ projects });
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4 px-4">
	{#if projects?.length > 0}
		{#each projects as project}
			<a href="/projects/{project?.id}">
				<Card {project} />
			</a>
		{/each}
	{/if}
</div>
