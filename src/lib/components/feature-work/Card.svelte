<script>
	/**
	 * @type {{ id: string | any[]; name: any; description: any; expand: { author: { name: any; email: any; username: any; }; }; created: string | number | Date; }}
	 */
	export let project;
</script>

{#if project?.id?.length > 0}
	<div class="max-w-sm mx-auto rounded-md overflow-hidden shadow-md">
		<div class="bg-white shadow-lg rounded-lg overflow-hidden">
			<img
				class="w-full h-48 object-cover"
				src="https://picsum.photos/500/300/?random"
				alt="Project"
			/>
			<div class="p-4">
				<h3 class="font-medium text-gray-800 mb-2">{project?.name}</h3>
				<div class="flex items-center text-sm text-gray-600 mb-2">
					<i class="far fa-comment mr-1" /> <span class="mr-4">10 comments</span>
					<i class="fas fa-thumbs-up mr-1" /> <span class="mr-4">25 upvotes</span>
					<i class="far fa-eye mr-1" /> <span>1000 views</span>
				</div>
				<p class="text-gray-600 mb-2 sm:h-20">
					{project?.description}
				</p>
				<div class="flex items-center">
					<img
						class="w-10 h-10 rounded-full mr-4"
						src="https://api.multiavatar.com/{project?.expand.author.name ||
							project?.expand.author.email ||
							project?.expand.author.username}.png?apikey= CvE4RFVuUJqZ1l"
						alt="Author"
					/>
					<div>
						<p class="text-gray-800 font-medium mb-1">
							{project.expand.author.name ||
								project.expand.author.email ||
								project.expand.author.username}
						</p>
						<p class="text-gray-600 text-sm">
							Published on {new Date(project?.created).toLocaleString('en-US', {
								month: 'long',
								day: 'numeric',
								year: 'numeric'
							})}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
