<script>
	import Nav from '$lib/Nav.svelte';
	
	export let data;

	/**
	 * @type {null}
	 */
	let user = null;

	$: user = data.user;
</script>

<Nav {user} />

<div class="mt-4">
	<slot />
</div>

<footer class="bg-gray-900 text-white px-8 py-16">
	<div class="max-w-screen-xl mx-auto flex flex-wrap justify-between items-start">
		<div class="w-full md:w-1/3 mb-12 md:mb-0 px-2">
			<h2 class="text-xl font-bold mb-6">About Xpose</h2>
			<p class="text-gray-400 leading-loose">
				Xpose is a platform where web developers can showcase their completed projects and receive
				feedback in the form of upvotes, comments, and likes. Our mission is to provide a
				community-driven space where developers can learn from each other and share their work with
				the world.
			</p>
		</div>
		<div class="w-full md:w-1/3 mb-12 md:mb-0 px-2">
			<h2 class="text-xl font-bold mb-6">Recent Posts</h2>
			<ul class="text-gray-400 leading-loose">
				<li>
					<a href="#" class="hover:text-white transition-colors duration-200"
						>Landing Page Design Trends for 2023</a
					>
				</li>
				<li>
					<a href="#" class="hover:text-white transition-colors duration-200"
						>Tips for Building a Responsive Web Design</a
					>
				</li>
				<li>
					<a href="#" class="hover:text-white transition-colors duration-200"
						>The Future of Web Development: Predictions for 2024</a
					>
				</li>
			</ul>
		</div>
		<div class="w-full md:w-1/3 px-2">
			<h2 class="text-xl font-bold mb-6">Get In Touch</h2>
			<ul class="text-gray-400 leading-loose">
				<li>
					<a href="#" class="hover:text-white transition-colors duration-200"
						>Email: info@xpose.com</a
					>
				</li>
				<li>
					<a href="#" class="hover:text-white transition-colors duration-200">Twitter: @xpose_dev</a
					>
				</li>
				<li>
					<a href="#" class="hover:text-white transition-colors duration-200"
						>Facebook: /xpose_dev</a
					>
				</li>
			</ul>
		</div>
	</div>
	<div
		class="max-w-screen-xl mx-auto pt-8 flex justify-between items-center border-t border-gray-800"
	>
		<p class="text-gray-400 text-sm">&copy; 2023 Xpose. All Rights Reserved.</p>
		<ul class="flex">
			<li>
				<a href="#" class="text-gray-400 hover:text-white transition-colors duration-200 ml-4"
					>Terms of Service</a
				>
			</li>
			<li>
				<a href="#" class="text-gray-400 hover:text-white transition-colors duration-200 ml-4"
					>Privacy Policy</a
				>
			</li>
			<li>
				<a href="#" class="text-gray-400 hover:text-white transition-colors duration-200 ml-4"
					>Cookie Policy</a
				>
			</li>
		</ul>
	</div>
</footer>
