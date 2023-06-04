<sveltekit:head>
	<title>Project Title - Xpose</title>
</sveltekit:head>

<div class="mx-auto max-w-6xl my-8">
	<div class="flex flex-col md:flex-row">
		<!-- Main Project Card -->
		<div class="mx-4 flex-1 md:w-2/3 bg-white rounded-lg shadow-lg overflow-hidden p-6 md:mr-4">
			<div class="w-full px-6 py-4">
				<h2 class="text-2xl font-bold">Project Name</h2>
				<img
					class="h-64 w-full object-cover mt-4"
					src="https://via.placeholder.com/1200x800"
					alt="Project Image"
				/>
				<p class="text-gray-700 text-base mt-4">Project Description</p>
				<div class="mt-4">
					<a href="#" class="text-blue-500 hover:text-blue-700 font-bold">Project Link</a>
					<span class="text-gray-400 mx-2">|</span>
					<a href="#" class="text-blue-500 hover:text-blue-700 font-bold">GitHub Repo</a>
				</div>
				<div class="mt-4 grid grid-cols-3 gap-2">
					<div class="bg-gray-100 px-4 py-2 text-center rounded">
						<span class="block text-lg font-bold">20</span>
						<span class="block text-gray-600">Votes</span>
					</div>
					<div class="bg-gray-100 px-4 py-2 text-center rounded">
						<span class="block text-lg font-bold">5</span>
						<span class="block text-gray-600">Comments</span>
					</div>
					<div class="bg-gray-100 px-4 py-2 text-center rounded">
						<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							>Share</button
						>
					</div>
				</div>
			</div>
			<div class="px-6 py-4 border-t border-gray-300">
				<h3 class="text-xl font-bold mb-4">Comments</h3>
				<div class="mt-8">
					<form action="#">
						<div>
							<div class="mt-2">
								<div
									id="tabs-1-panel-1"
									class="-m-0.5 rounded-lg p-0.5"
									aria-labelledby="tabs-1-tab-1"
									role="tabpanel"
									tabindex="0"
								>
									<label for="comment" class="sr-only">Comment</label>
									<div>
										<textarea
											rows="5"
											name="comment"
											id="comment"
											class="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											placeholder="Add your comment..."
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="mt-2 flex justify-end">
							<button
								type="submit"
								class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>Post</button
							>
						</div>
					</form>
				</div>
				<ul class="divide-y divide-gray-300">
					<li class="py-4">
						<div class="flex items-center">
							<img
								class="h-10 w-10 object-cover rounded-full mr-4"
								src="https://via.placeholder.com/150"
								alt="Avatar"
							/>
							<div>
								<h4 class="text-gray-800 font-bold">John Doe</h4>
								<p class="text-gray-600">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus tincidunt
									tellus, ac auctor est. Nunc a arcu vel felis sagittis placerat. Praesent lacinia,
									felis sit amet ullamcorper pellentesque, purus sapien consectetur dui, sit amet
									bibendum urna lacus sed turpis.
								</p>
								<span class="text-gray-400 text-sm">2 hours ago</span>
							</div>
						</div>
					</li>
					<li class="py-4">
						<div class="flex items-center">
							<img
								class="h-10 w-10 object-cover rounded-full mr-4"
								src="https://via.placeholder.com/150"
								alt="Avatar"
							/>
							<div>
								<h4 class="text-gray-800 font-bold">Jane Smith</h4>
								<p class="text-gray-600">
									Praesent lacinia, felis sit amet ullamcorper pellentesque, purus sapien
									consectetur dui, sit amet bibendum urna lacus sed turpis.
								</p>
								<span class="text-gray-400 text-sm">1 day ago</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- Sidebar - Recent Project Cards -->
		<div class="mx-4 flex-1 md:w-1/3">
			<h3 class="text-xl font-semibold mb-4">Recent Projects</h3>
			<div class="bg-white rounded-lg shadow-lg p-4 mb-4">
				<h4 class="text-lg font-semibold mb-2">Recent Project 1</h4>
				<p class="text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="#" class="inline-block text-blue-600 hover:text-blue-800">View Project</a>
			</div>
			<div class="bg-white rounded-lg shadow-lg p-4 mb-4">
				<h4 class="text-lg font-semibold mb-2">Recent Project 2</h4>
				<p class="text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="#" class="inline-block text-blue-600 hover:text-blue-800">View Project</a>
			</div>
			<div class="bg-white rounded-lg shadow-lg p-4">
				<h4 class="text-lg font-semibold mb-2">Recent Project 3</h4>
				<p class="text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="#" class="inline-block text-blue-600 hover:text-blue-800">View Project</a>
			</div>
		</div>
	</div>
</div>
