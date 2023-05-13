<sveltekit:head>
	<title>Projects - Xpose</title>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
	/>
</sveltekit:head>

<div class="md:m-5 md:p-4 p-2">
	<div class="w-full bg-white rounded-lg shadow-md">
		<div class="w-full p-4">
			<form>
				<div class="flex">
					<label
						for="search-dropdown"
						class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label
					>
					<button
						id="dropdown-button"
						data-dropdown-toggle="dropdown"
						class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
						type="button"
						>All categories <svg
							aria-hidden="true"
							class="w-4 h-4 ml-1"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						></button
					>
					<div
						id="dropdown"
						class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
					>
						<ul
							class="py-2 text-sm text-gray-700 dark:text-gray-200"
							aria-labelledby="dropdown-button"
						>
							<li>
								<button
									type="button"
									class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>Mockups</button
								>
							</li>
							<li>
								<button
									type="button"
									class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>Templates</button
								>
							</li>
							<li>
								<button
									type="button"
									class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>Design</button
								>
							</li>
							<li>
								<button
									type="button"
									class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>Logos</button
								>
							</li>
						</ul>
					</div>
					<div class="relative w-full">
						<input
							type="search"
							id="search-dropdown"
							class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
							placeholder="Search Mockups, Logos, Design Templates..."
							required
						/>
						<button
							type="submit"
							class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							<svg
								aria-hidden="true"
								class="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/></svg
							>
							<span class="sr-only">Search</span>
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4 p-2">
	<div class="max-w-sm mx-auto rounded-md overflow-hidden shadow-md">
		<div class="bg-white shadow-lg rounded-lg overflow-hidden">
			<img
				class="w-full h-48 object-cover"
				src="https://picsum.photos/500/300/?random"
				alt="Project Image"
			/>
			<div class="p-4">
				<h3 class="font-medium text-gray-800 mb-2">Project Title</h3>
				<div class="flex items-center text-sm text-gray-600 mb-2">
					<i class="far fa-comment mr-1" /> <span class="mr-4">10 comments</span>
					<i class="fas fa-thumbs-up mr-1" /> <span class="mr-4">25 upvotes</span>
					<i class="far fa-eye mr-1" /> <span>1000 views</span>
				</div>
				<p class="text-gray-600 mb-2">
					Project description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Pellentesque ac fermentum diam, eu laoreet magna.
				</p>
				<div class="flex items-center">
					<img
						class="w-10 h-10 rounded-full mr-4"
						src="https://picsum.photos/200/200/?random"
						alt="Author Image"
					/>
					<div>
						<p class="text-gray-800 font-medium mb-1">Author Name</p>
						<p class="text-gray-600 text-sm">Published on May 5, 2023</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
