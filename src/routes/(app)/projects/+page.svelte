<sveltekit:head>
	<title>Projects - Xpose</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</sveltekit:head>

<div class="md:m-5 md:p-4 p-2">
  <div class="w-full bg-white rounded-lg shadow-md">
    <div class="w-full p-4">
      <form class="w-full flex flex-wrap justify-between items-center">
	          <div class="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
          <label class="block text-gray-700 font-medium mb-2" for="filter-select">Filter</label>
          <select class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400" id="filter-select">
            <option value="">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
        <div class="w-full md:w-1/2  mb-4 md:mb-0">
          <label class="block text-gray-700 font-medium mb-2" for="search-input">Search</label>
          <input class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400" id="search-input" type="text" placeholder="Search...">
        </div>
        <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg" type="submit">Search</button>
      </form>
    </div>
  </div>
</div>


<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4 p-2">
	<div class="max-w-sm mx-auto rounded-md overflow-hidden shadow-md">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img class="w-full h-48 object-cover" src="https://picsum.photos/500/300/?random" alt="Project Image">
      <div class="p-4">
        <h3 class="font-medium text-gray-800 mb-2">Project Title</h3>
        <div class="flex items-center text-sm text-gray-600 mb-2">
          <i class="far fa-comment mr-1"></i> <span class="mr-4">10 comments</span>
          <i class="fas fa-thumbs-up mr-1"></i> <span class="mr-4">25 upvotes</span>
          <i class="far fa-eye mr-1"></i> <span>1000 views</span>
        </div>
        <p class="text-gray-600 mb-2">Project description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac fermentum diam, eu laoreet magna.</p>
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="https://picsum.photos/200/200/?random" alt="Author Image">
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


