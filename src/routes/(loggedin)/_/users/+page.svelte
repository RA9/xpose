<script>
	import { goto } from "$app/navigation";

    function redirectUrl() {
        return goto("/_/users/create");
    }
</script>

<sveltekit:head>
	<title>Users - Xpose</title>
</sveltekit:head>


<div class="hidden sm:block sm:mt-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mt-2 flex flex-col">
            <div class="my-6 flex justify-end space-x-3 md:ml-4 md:mt-0">
                <button
                    type="button"
                    on:click={redirectUrl}
                    class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >Add Users</button
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
								scope="col">Views</th
							>
							<th
								class="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
								scope="col">Date</th
							>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-200 bg-white">
						<tr class="bg-white">
							<td class="whitespace-nowrap px-6 py-4  text-sm text-gray-500"> Project Solomon </td>
							<td class="whitespace-nowrap px-6 py-4  text-sm text-gray-500">
								Making online test seamless
							</td>
							<td class="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
								Humble Nah
							</td>
							<td class="whitespace-nowrap px-6 py-4  text-sm text-gray-500"> 0 </td>
							<td class="whitespace-nowrap px-6 py-4  text-sm text-gray-500">
								<time datetime="2020-07-11">July 11, 2020</time>
							</td>
						</tr>

						<!-- More transactions... -->
					</tbody>
				</table>
				<!-- Pagination -->
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
