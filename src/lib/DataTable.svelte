<script>
	/**
	 * @type {string | any[]}
	 */
	 export let data = [];
	/**
	 * @type {any[]}
	 */
	 export let columns = [];

     let dataRows = [];

	// Define an array of items to paginate
	const items = [
		'Item 1',
		'Item 2',
		'Item 3',
		'Item 4',
		'Item 5',
		'Item 6',
		'Item 7',
		'Item 8',
		'Item 9',
		'Item 10',
		'Item 11',
		'Item 12',
		'Item 13',
		'Item 14',
		'Item 15',
		'Item 16',
		'Item 17',
		'Item 18',
		'Item 19',
		'Item 20'
	];

	// Define the number of items to display per page
	const itemsPerPage = 5;

	// Define the current page number
	let currentPage = 1;

	// Define a function to get the current page of items
	/**
	 * @param {number} pageNumber
	 */
	function getCurrentPageItems(pageNumber) {
		const startIndex = (pageNumber - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return items.slice(startIndex, endIndex);
	}

	// Define a function to get the total number of pages
	function getTotalPages() {
		return Math.ceil(items.length / itemsPerPage);
	}

	// Define a function to generate the pagination buttons
	function generatePaginationButtons() {
		const totalPages = getTotalPages();
		let startPage, endPage;
		if (totalPages <= 10) {
			startPage = 1;
			endPage = totalPages;
		} else {
			if (currentPage <= 6) {
				startPage = 1;
				endPage = 10;
			} else if (currentPage + 4 >= totalPages) {
				startPage = totalPages - 9;
				endPage = totalPages;
			} else {
				startPage = currentPage - 5;
				endPage = currentPage + 4;
			}
		}
		const paginationButtons = [];
		for (let i = startPage; i <= endPage; i++) {
			paginationButtons.push(i);
		}
		return paginationButtons;
	}

	// Define a function to go to the previous page
	function goToPreviousPage() {
		if (currentPage > 1) {
			currentPage--;
			const currentPageItems = getCurrentPageItems(currentPage);
			console.log(currentPageItems); // Output: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
		}
	}

	// Define a function to go to the next page
	function goToNextPage() {
		const totalPages = getTotalPages();
		if (currentPage < totalPages) {
			currentPage++;
			const currentPageItems = getCurrentPageItems(currentPage);
			console.log(currentPageItems); // Output: ["Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]
		}
	}

	// Example usage
	const currentPageItems = getCurrentPageItems(currentPage);
	console.log(currentPageItems); // Output: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
	const totalPages = getTotalPages();
	console.log(totalPages); // Output: 4
	const paginationButtons = generatePaginationButtons();
	console.log(paginationButtons); // Output: [1, 2, 3, 4]

	// Go to the next page
	goToNextPage();

	// Go to the previous page
	goToPreviousPage();
</script>

<div class="hidden sm:block sm:mt-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mt-2 flex flex-col">
			<div class="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
				<table class="min-w-full divide-y divide-gray-200">
					<thead>
						<tr>
                            {#each columns as column}
                                <th
                                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    scope="col"
                                >
                                    {column}
                                </th>
                            {/each}
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


						{#if data && data.length > 0}
							{#each data as datum}
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
										<time datetime={new Date(project?.created).toISOString()}
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
				{#if !(data && data.length > 0)}
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
