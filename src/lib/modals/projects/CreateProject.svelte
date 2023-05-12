<div class="mx-auto max-w-6xl mt-8">
	<div class="flex justify-center items-center min-h-screen bg-gray-200">
		<div class="w-full bg-white shadow-lg rounded-lg p-6">
			<h2 class="text-2xl font-medium text-gray-800 mb-4">Add Project</h2>
			<form>
				<div class="max-h-64 overflow-y-auto mb-4">
					<label class="block text-gray-700 font-medium mb-2" for="image">Image Cover</label>
					<input
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="image"
						type="file"
						accept="image/*"
						name="image"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-medium mb-2" for="name">Project Name</label>
					<input
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="name"
						type="text"
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
						name="description"
						rows="4"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-medium mb-2" for="projectLink">Project Link</label>
					<input
						class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
						id="projectLink"
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
						type="url"
						name="repoLink"
						required
					/>
				</div>
				<div class="flex justify-end">
					<button
						class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-lg"
						type="button"
					>
						Cancel
					</button>
					<button
						class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
						type="submit"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
