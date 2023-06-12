<script>
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase';

	export let data;

	let error = false;

	$: user = data?.user;

	/**
	 * @type {null|any}
	 */
	let img_cover = null;
	/**
	 * @type {null|any}
	 */
	let name = null;
	/**
	 * @type {null|any}
	 */
	let description = null;
	/**
	 * @type {null|any}
	 */
	let projectLink = null;
	/**
	 * @type {null|any}
	 */
	let repoLink = null;

	let isLoading = false;

	$: {
		if (img_cover) {
			img_cover = img_cover[0];
			img_cover = new File([img_cover], `${name}-cover.${img_cover.type.split('/')[1]}`, {
				type: img_cover.type
			});
			// img_cover.name = `${name}-cover.${img_cover.type.split('/')[1]}`;

			console.log(img_cover);
		}
	}

	async function createProject() {
		const formData = new FormData();
		isLoading = true;
		try {
			formData.append('project_img', img_cover);
			formData.append('name', name);
			formData.append('description', description);
			formData.append('project_link', projectLink);
			formData.append('repo_link', repoLink);
			formData.append('author', user.id);
			const record = await pb.collection('projects').create(formData);

			if (record) {
				console.log(record);
				goto('/_/projects');
			}
		} catch (err) {
			console.log(err);
			error = true;
			isLoading = false;
		}
	}
</script>

<sveltekit:head>
	<title>Create Project - Xpose</title>
</sveltekit:head>

<div class="mx-auto max-w-6xl mt-8 p-8">
	<div class="flex justify-center items-center">
		<div class="w-full bg-white shadow-lg rounded-lg p-6">
			<h2 class="text-2xl text-center font-medium text-gray-800 mb-4">Add Project</h2>
			{#if error}
				<p class="text-red-500 font-medium text-2xl">Failed to create a project</p>
			{/if}

			<form>
				<div class="mb-4">
					<label class="block text-gray-700 font-medium mb-2" for="name">Project Name</label>
					<input
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="name"
						type="text"
						bind:value={name}
						placeholder="Project Name"
						name="name"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-medium mb-2" for="description"
						>Project Description</label
					>
					<textarea
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="description"
						bind:value={description}
						name="description"
						placeholder="Project Description"
						rows="4"
						required
					/>
				</div>
				<div class="max-h-64 overflow-y-auto mb-4">
					<label class="block text-gray-700 font-medium mb-2" for="image">Image Cover</label>
					<input
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="image"
						type="file"
						bind:files={img_cover}
						accept="image/*"
						name="image"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-medium mb-2" for="projectLink">Project Link</label>
					<input
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="projectLink"
						bind:value={projectLink}
						placeholder="Project Link"
						type="url"
						name="projectLink"
						required
					/>
				</div>
				<div class="mb-6">
					<label class="block text-gray-700 font-medium mb-2" for="repoLink"
						>GitHub/GitLab Repo Link</label
					>
					<input
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="repoLink"
						bind:value={repoLink}
						placeholder="GitHub/GitLab Repo Link"
						type="url"
						name="repoLink"
						required
					/>
				</div>
				<div class="flex justify-end gap-4">
					<button
						disabled={isLoading}
						class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg {isLoading &&
							'opacity-50 cursor-not-allowed'}"
						on:click|preventDefault={createProject}
						type="submit"
					>
						{isLoading ? 'Creating Project...' : 'Create Project'}
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
