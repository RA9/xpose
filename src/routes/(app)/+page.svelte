<script>
	import FeatureWork from '$lib/components/feature-work/FeatureWork.svelte';
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	/**
	 * @type {string | any[]}
	 */
	let products = [];

	onMount(async () => {
		products = await pb.collection('projects').getFullList({
			sort: '@random',
			batch: 3,
			expand: 'author'
		});

		products = products;
		console.log(products);
	});
</script>

<sveltekit:head>
	<title>Home - Xpose</title>
	<meta name="title" content="Welcome to Xpose - Xpose" />
	<meta name="robots" content="index, follow" />
	<meta
		name="description"
		content="Xpose is a platform for developers to showcase their projects to the world."
	/>
</sveltekit:head>

<section class="bg-gradient-to-r from-blue-500 to-purple-600">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col lg:flex-row justify-between py-12 md:py-20">
			<div class="flex-1">
				<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
					Share your projects with the world
				</h1>
				<p class="text-xl md:text-2xl text-white mb-8">
					Explore works created by developers around the globe, get inspired, and showcase your own
					creations to the world.
				</p>
				<div class="flex flex-wrap">
					<a
						href="/register"
						class="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-6 rounded-lg text-lg mr-4 mb-4"
						>Get Started</a
					>
				</div>
			</div>
			<div class="flex-1 hidden lg:block">
				<img
					class="h-96 object-cover object-center rounded-lg shadow-lg"
					src="https://picsum.photos/600/300"
					alt="Hero"
				/>
			</div>
		</div>
	</div>
</section>

<div class="px-4 sm:px-6 lg:px-8 my-4">
	<h2 class="text-3xl font-bold text-gray-900">Featured Works</h2>
</div>

{#if products.length === 0}
	<div class="flex justify-center items-center h-48">
		<div class="flex flex-col items-center">
			<i class="fas fa-spinner fa-spin text-4xl text-gray-500 mb-4" />
			<p class="text-gray-500">Loading...</p>
		</div>
	</div>
{:else}
	<FeatureWork projects={products} />
{/if}
