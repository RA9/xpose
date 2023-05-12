<sveltekit:head>
    <title>Project Title - Xpose</title>
</sveltekit:head>

<div class="mx-auto max-w-4xl mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
		<img src="https://picsum.photos/500/300/?random" alt="Project" class="w-full h-auto" />
		<div class="my-4 p-4">
			<h3 class="text-2xl font-medium text-gray-800 mb-2">Project Name</h3>
			<p class="text-gray-600 mb-4">Project Description</p>
			<div class="flex items-center text-gray-600 mb-4">
				<span class="mr-4 flex items-center">
					<svg
						class="w-4 h-4 mr-1 text-blue-500"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
					<span class="font-medium">Views:</span> 100
				</span>
				<span class="flex items-center">
					<svg
						class="w-4 h-4 mr-1 text-blue-500"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M12 14l9-5-9-5-9 5 9 5z" />
						<path d="M12 14v7m0-7h9m-9 0H3" />
					</svg>
					<span class="font-medium">Upvotes:</span> 50
				</span>
				<button
					class="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
				>
					Upvote
				</button>
			</div>
			<div class="flex items-center text-gray-600 mb-4">
				<img src="author-avatar.jpg" alt="Author Avatar" class="w-8 h-8 rounded-full mr-2" />
				<span class="font-medium">Author Name</span>
			</div>
			<div class="border-t border-gray-300 pt-4">
				<h4 class="text-lg font-medium text-gray-800 mb-2">Comments</h4>
				<ul class="space-y-2">
					<li class="flex items-start">
						<img src="user-avatar1.jpg" alt="User Avatar" class="w-8 h-8 rounded-full mr-2" />
						<div>
							<p class="text-gray-800">
								<span class="font-medium">Commenter 1:</span> Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</p>
							<p class="text-gray-600 text-sm">2 hours ago</p>
						</div>
					</li>
					<li class="flex items-start">
						<img src="user-avatar2.jpg" alt="User Avatar" class="w-8 h-8 rounded-full mr-2" />
						<div>
							<p class="text-gray-800">
								<span class="font-medium">Commenter 2:</span> Sed ut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium doloremque laudantium.
							</p>
							<p class="text-gray-600 text-sm">1 day ago</p>
						</div>
					</li>
					<!-- More comments... -->
					<!-- More comments... -->
				</ul>
			</div>
			<div class="border-t border-gray-300 pt-4">
				<div class="flex items-center text-gray-600">
					<svg
						class="w-4 h-4 mr-1 text-blue-500"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
					<a href="#" class="text-blue-500 hover:underline">Project Link</a>
				</div>
				<div class="flex items-center text-gray-600">
					<svg
						class="w-4 h-4 mr-1 text-blue-500"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M12 14l9-5-9-5-9 5 9 5z" />
						<path d="M12 14v7m0-7h9m-9 0H3" />
					</svg>
					<a href="#" class="text-blue-500 hover:underline">GitHub/GitLab Link</a>
				</div>
			</div>
		</div>
</div>


<div class="flex">
	<!-- Main Project Card -->
	<div class="w-2/3 bg-white rounded-lg shadow-lg p-6 mr-4">
	  <h2 class="text-2xl font-semibold mb-2">Main Project Title</h2>
	  <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante ac urna lacinia sodales. Proin tincidunt orci vel lectus egestas, at facilisis odio volutpat.</p>
	  <a href="#" class="inline-block text-blue-600 hover:text-blue-800">View Project</a>
	</div>
  
	<!-- Sidebar - Recent Project Cards -->
	<div class="w-1/3">
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
