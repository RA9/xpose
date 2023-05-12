<sveltekit:head>
	<title>Create an account - Xpose</title>
</sveltekit:head>

<div class="flex justify-center items-center min-h-screen bg-gray-200">
	<div class="w-full max-w-md">
		<div class="bg-white shadow-md rounded-lg px-8 py-6">
			<div class="flex items-center">
				<a href="/" class="inline-block align-top mb-6">
					<svg
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						class="h-6 w-6"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg></a
				>
				<h2 class="flex-1 text-2xl font-medium text-center text-gray-800 mb-6">Create Account</h2>
			</div>

			<form method="post">
				<div class="mb-4">
					<label class="block text-gray-700 font-medium mb-2" for="username"> Username </label>
					<input
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="username"
						type="text"
						name="username"
						placeholder="Enter a username"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-medium mb-2" for="name"> Name </label>
					<input
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="name"
						type="text"
						name="name"
						placeholder="Enter your name: Jon Doe"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-medium mb-2" for="email"> Email </label>
					<input
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="email"
						type="email"
						name="email"
						placeholder="Enter your email"
						required
					/>
				</div>
				<div class="mb-6">
					<label class="block text-gray-700 font-medium mb-2" for="password"> Password </label>
					<input
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="password"
						type="password"
						name="password"
						placeholder="****"
						required
					/>
				</div>
				<button
					class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
					type="submit"
				>
					Sign up
				</button>
			</form>
		</div>
		<div class="mt-4 text-center">
			<span class="text-gray-600">Already have an account?</span>
			<a class="text-blue-500 hover:text-blue-600 font-medium" href="/login"> Log in </a>
		</div>
	</div>
</div>

<style>
</style>
