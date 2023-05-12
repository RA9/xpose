<script>
	/**
	 * @type {any}
	 */
	 export let user;
</script>

<nav class="bg-white shadow-lg">
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex space-x-4">
				<!-- logo -->
				<div>
					<a href="/" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6 mr-1 text-blue-400"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
							/>
						</svg>

						<span class="text-lg font-semibold">Xpose</span>
					</a>
				</div>

				<!-- primary nav -->
				<div class="hidden md:flex items-center space-x-1">
					<a href="/" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a>
					<a href="/projects" class="py-5 px-3 text-gray-700 hover:text-gray-900">Projects</a>
					<a href="/blog" class="py-5 px-3 text-gray-700 hover:text-gray-900">Blog</a>
					<a href="/about" class="py-5 px-3 text-gray-700 hover:text-gray-900">About</a>
				</div>
			</div>

			<!-- secondary nav -->
			<div class="hidden md:flex items-center space-x-1">
				{#if user}
					<a href="/_/dashboard" class="py-5 px-3 text-gray-700 hover:text-gray-900">Dashboard</a>
					<!-- <a href="/logout" class="py-5 px-3 text-gray-700 hover:text-gray-900">Logout</a> -->
				{:else}
					<a href="/login" class="bg-gray-900 text-white px-4 py-2 rounded-lg">Login</a>
				{/if}
			</div>

			<!-- mobile button goes here -->
			<div class="md:hidden flex items-center">
				<button class="mobile-menu-button">
					<svg
						class="w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- mobile menu -->
	<div class="mobile-menu hidden md:hidden">
		<a href="/" class="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
		<a href="/projects" class="block py-2 px-4 text-sm hover:bg-gray-200">Projects</a>
		<a href="/blog" class="block py-2 px-4 text-sm hover:bg-gray-200">Blog</a>
		<a href="/about" class="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
	</div>
</nav>
