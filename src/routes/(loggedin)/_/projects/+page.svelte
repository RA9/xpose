<script>
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	/**
	 * @type {string | any[]}
	 */
	let projects = [];

	onMount(async () => {
		const res = await pb.collection('projects').getFullList({
			sort: '-created',
			expand: 'author'
		});

		console.log({ res });
		projects = res;
	});

	function redirectUrl() {
		return goto('/_/projects/create');
	}
</script>

<sveltekit:head>
	<title>Projects - Xpose</title>
</sveltekit:head>

<div class="hidden sm:block sm:mt-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mt-2 flex flex-col">
			<div class="my-6 flex justify-end space-x-3 md:ml-4 md:mt-0">
				<button
					type="button"
					on:click={redirectUrl}
					class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>Add Projects</button
				>
				<!-- <button
                    type="button"
                    class="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    >Create Project</button
                > -->
			</div>
			<div class="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
				<table class="min-w-full divide-y divide-gray-200">
					<thead>
						<tr>
							<th
								class="bg-gray-50 px-6 py-3 text-left  text-sm font-semibold text-gray-900"
								scope="col">Name</th
							>
							<th
								class="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
								scope="col">Description</th
							>
							<th
								class="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
								scope="col">Author</th
							>
							<th
								class="hidden bg-gray-50 px-6 py-3 text-left  text-sm font-semibold text-gray-900 md:block"
								scope="col">Date</th
							>
							<th
								class="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
								scope="col"
							/>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-200 bg-white">
						{#if projects && projects.length > 0}
							{#each projects as project}
								<tr class="bg-white">
									<td class="whitespace-nowrap px-6 py-4  text-sm text-gray-500">{project?.name}</td
									>
									<td class="whitespace-nowrap px-6 py-4  text-sm text-gray-500">
										{project?.description ?? 'No description'}
									</td>
									<td class="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
										{project?.expand.author?.name}
									</td>
									<td class="whitespace-nowrap px-6 py-4  text-sm text-gray-500">
										<time datetime="{new Date(project?.created).toISOString()}"
											>{new Date(project?.created).toLocaleString('en-US', {
												weekday: 'short',
												year: 'numeric',
												month: 'short',
												day: 'numeric'
											})}</time
										>
									</td>
									<td class="whitespace-nowrap px-6 py-4  text-sm text-gray-500" />
								</tr>
							{/each}
						{/if}

						<!-- More transactions... -->
					</tbody>
				</table>
				<!-- Pagination -->
				{#if !(projects && projects.length > 0)}
					<p class="bg-white text-2xl font-medium text-center p-6">No data available!!!</p>
				{/if}
				<nav
					class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
					aria-label="Pagination"
				>
					<div class="hidden sm:block">
						<p class="text-sm text-gray-700">
							Showing
							<span class="font-medium">1</span>
							to
							<span class="font-medium">10</span>
							of
							<span class="font-medium">20</span>
							results
						</p>
					</div>
					<div class="flex flex-1 justify-between gap-x-3 sm:justify-end">
						<a
							href="#"
							class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
							>Previous</a
						>
						<a
							href="#"
							class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
							>Next</a
						>
					</div>
				</nav>
			</div>
		</div>
	</div>
</div>
