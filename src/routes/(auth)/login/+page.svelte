<sveltekit:head>
	<title>Login - Xpose</title>
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
				<h2 class="flex-1 text-2xl text-center font-medium text-gray-800 mb-6">Log in</h2>
			</div>

			<form method="post">
				<div class="mb-4">
					<label class="block text-gray-700 font-medium mb-2" for="email"> Email </label>
					<input
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="email"
						type="email"
						name="email"
						placeholder="eg: demo@example.com"
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
						placeholder="Enter your password"
						required
					/>
				</div>
				<button
					class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
					type="submit"
				>
					Log in
				</button>
			</form>
			<div class="mt-6">
				<a class="text-blue-500 hover:text-blue-600 font-medium" href="#"> Forgot password? </a>
			</div>
		</div>
		<div class="mt-4 text-center">
			<span class="text-gray-600">Don't have an account?</span>
			<a class="text-blue-500 hover:text-blue-600 font-medium" href="/register"> Sign up </a>
		</div>
	</div>
</div>
