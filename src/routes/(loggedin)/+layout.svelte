<script>
	import { page } from '$app/stores';

	export let data;

	/**
	 * @type {{ name: any; username: any; } | null}
	 */

	const user = data?.user;

	console.log({ user });

	const navItems = [
		{
			name: 'Dashboard',
			path: '/_/dashboard',
			icon: `<svg aria-hidden="true" class="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`
		},
		{
			name: 'Projects',
			path: '/_/projects',
			icon: `<svg aria-hidden="true" class="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`
		},
		{
			name: 'Users',
			path: '/_/users',
			icon: `<svg aria-hidden="true"  class="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`
		}
	];

	let isAvatarOpen = false;
	let isSidebarOpen = false;

	function toggleAvatar() {
		isAvatarOpen = !isAvatarOpen;
	}

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}

	function closeAvatar() {
		isAvatarOpen = false;
	}
</script>

<div class="min-h-full">
	<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	{#if isSidebarOpen}
		<div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
			<!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
			<div class="fixed inset-0 bg-gray-600 bg-opacity-75" />

			<div class="fixed inset-0 z-40 flex">
				<!--
          Off-canvas menu, show/hide based on off-canvas menu state.
  
          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->
				<div class="relative flex w-full max-w-xs flex-1 flex-col bg-cyan-700 pb-4 pt-5">
					<!--
            Close button, show/hide based on off-canvas menu state.
  
            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
					<div class="absolute right-0 top-0 -mr-12 pt-2">
						<button
							type="button"
							on:click={toggleSidebar}
							class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						>
							<span class="sr-only">Close sidebar</span>
							<svg
								class="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>

					<div class="flex flex-shrink-0 items-center px-4">
						<h2 class="h-8 w-auto text-2xl font-medium text-white">Xpose</h2>
					</div>
					<nav
						class="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
						aria-label="Sidebar"
					>
						<div class="space-y-1 px-2">
							<!-- Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:bg-cyan-600 hover:text-white" -->
							{#each navItems as navItem}
								<a
									href={navItem.path}
									class="{$page.url.pathname === navItem.path
										? 'bg-cyan-800 text-white '
										: 'text-cyan-100 hover:bg-cyan-600 hover:text-white'} group flex items-center rounded-md px-2 py-2 text-base font-medium"
									aria-current="page"
								>
									{@html navItem.icon}
									{navItem.name}
								</a>
							{/each}
						</div>
						<div class="mt-6 pt-6">
							<div class="space-y-1 px-2">
								<a
									href="/_/settings"
									class="group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white"
								>
									<svg
										class="mr-4 h-6 w-6 text-cyan-200"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
										/>
									</svg>
									Settings
								</a>
							</div>
						</div>
					</nav>
				</div>

				<div class="w-14 flex-shrink-0" aria-hidden="true">
					<!-- Dummy element to force sidebar to shrink to fit close icon -->
				</div>
			</div>
		</div>
	{/if}

	<!-- Static sidebar for desktop -->
	<div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div class="flex flex-grow flex-col overflow-y-auto bg-cyan-700 pb-4 pt-5">
			<div class="flex flex-shrink-0 items-center px-4">
				<h2 class="h-8 w-auto text-2xl font-medium text-white">Xpose</h2>
			</div>
			<nav
				class="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto"
				aria-label="Sidebar"
			>
				<div class="space-y-1 px-2">
					<!-- Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:bg-cyan-600 hover:text-white" -->
					{#each navItems as navItem}
						<a
							href={navItem.path}
							class="{$page.url.pathname === navItem.path
								? 'bg-cyan-800 text-white '
								: 'text-cyan-100 hover:bg-cyan-600 hover:text-white'} group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6"
							aria-current="page"
						>
							{@html navItem.icon}

							{navItem.name}
						</a>
					{/each}
				</div>
				<div class="mt-6 pt-6">
					<div class="space-y-1 px-2">
						<a
							href="/_/settings"
							class="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white"
						>
							<svg
								class="mr-4 h-6 w-6 text-cyan-200"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
								/>
							</svg>
							Settings
						</a>
					</div>
				</div>
			</nav>
		</div>
	</div>

	<div class="flex flex-1 flex-col lg:pl-64">
		<div class="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
			<button
				type="button"
				on:click={toggleSidebar}
				class="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
			>
				<span class="sr-only">Open sidebar</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
					/>
				</svg>
			</button>
			<!-- Search bar -->
			<div class="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
				<div class="flex-1" />
				<div class="ml-4 flex items-center md:ml-6">
					<button
						type="button"
						class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
					>
						<span class="sr-only">View notifications</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
							/>
						</svg>
					</button>

					<!-- Profile dropdown -->
					<div class="relative ml-3">
						<div>
							<button
								on:click={toggleAvatar}
								type="button"
								class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<img
									class="h-8 w-8 rounded-full"
									src="https://api.multiavatar.com/{user?.username}.png?apikey=CvE4RFVuUJqZ1l"
									alt=""
								/>
								<span class="ml-3 hidden text-sm font-medium text-gray-700 lg:block"
									><span class="sr-only">Open user menu for </span>{user?.name ||
										user?.username}</span
								>
								<svg
									class="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>

						<!--
                Dropdown menu, show/hide based on menu state.
  
                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
						{#if isAvatarOpen}
							<div
								class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
							>
								<!-- Active: "bg-gray-100", Not Active: "" -->
								<a
									href="/#/profile"
									class="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">Your Profile</a
								>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-2">Logout</a
								>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
		<main class="flex-1 pb-8">
			<slot />
		</main>
	</div>
</div>
