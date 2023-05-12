<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const queryPage = $page.url.searchParams.get('page');

	$: isChangePassword = queryPage === 'change-password' || queryPage === null;

	onMount(() => {
		if (queryPage === 'payments') {
			console.log('payments');
		}
	});

	console.log(isChangePassword, queryPage);
</script>

<sveltekit:head>
	<title>Settings - Xpose</title>
</sveltekit:head>

<div class="m-4 p-4">
	<div class="bg-white rounded-lg shadow-md">
		<div class="border-b border-gray-200 px-4 py-5 sm:px-6">
			<h3 class="text-lg leading-6 font-medium text-gray-900">Settings</h3>
			<p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
				Manage your account settings here.
			</p>
		</div>
		<div>
			<div class="sm:hidden">
				<select class="form-select block w-full rounded-none border-gray-300">
					<option>Change Password</option>
					<option>Payments</option>
				</select>
			</div>
			<div class="hidden sm:block">
				<div class="border-b border-gray-200">
					<nav class="-mb-px p-4 flex gap-4">
						<a
							data-sveltekit-replacestate
							class="{isChangePassword
								? 'border-indigo-500 text-indigo-600'
								: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-no-wrap py-4 px-1 border-b-2 font-medium text-sm"
							href="/_/settings?page=change-password"
						>
							Change Password
						</a>
						<a
							data-sveltekit-replacestate
							class="{!isChangePassword
								? 'border-indigo-500 text-indigo-600'
								: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-no-wrap py-4 px-1 border-b-2 font-medium text-sm"
							href="/_/settings?page=payments"
						>
							Payments
						</a>
					</nav>
				</div>
			</div>
			<div class="px-4 py-5 sm:p-6">
				{#if isChangePassword}
					{#key $page.url.searchParams.get('change-password') || $page.url.pathname}
						<div>
							<div class="mb-4 bg-gray-100 rounded-lg shadow-md px-4 py-5 sm:p-6">
								<h4 class="text-lg leading-6 font-medium text-gray-900">Change Password</h4>
								<p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
									Change your account password here.
								</p>
								<form class="mt-6">
									<div>
										<label
											for="current-password"
											class="block text-sm font-medium leading-5 text-gray-700"
											>Current password</label
										>
										<div class="mt-1 rounded-md shadow-sm">
											<input
												id="current-password"
												type="password"
												placeholder="Current password"
												required
												class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
											/>
										</div>
									</div>
									<div class="mt-6">
										<label
											for="new-password"
											class="block text-sm font-medium leading-5 text-gray-700">New password</label
										>
										<div class="mt-1 rounded-md shadow-sm">
											<input
												id="new-password"
												type="password"
												placeholder="New password"
												required
												class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
											/>
										</div>
									</div>
									<div class="mt-6">
										<label
											for="confirm-password"
											class="block text-sm font-medium leading-5 text-gray-700"
											>Confirm password</label
										>
										<div class="mt-1 rounded-md shadow-sm">
											<input
												id="confirm-password"
												type="password"
												placeholder="Confirm password"
												required
												class="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-400"
											/>
										</div>
									</div>
									<div class="mt-6">
										<button
											type="submit"
											class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-500 focus:outline-none focus:border-cyan-700 focus:shadow-outline-indigo active:bg-cyan-700 transition duration-150 ease-in-out"
										>
											Save
										</button>
									</div>
								</form>
							</div>
							<!-- Change Password form goes here -->
						</div>
					{/key}
				{:else}
					{#key $page.url.searchParams.get('payments')}
						<div class="mt-8">
							<div class="mb-4">
								<h4 class="text-lg leading-6 font-medium text-gray-900">Payments</h4>
								<p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
									Manage your payment settings here.
								</p>
							</div>
							<!-- Payments form goes here -->
							<div class="bg-white rounded-lg shadow-md px-4 py-5 sm:p-6">
								<h4 class="text-lg leading-6 font-medium text-gray-900">Payments</h4>
								<p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
									Manage your payment settings here.
								</p>
								<form class="mt-6">
									<div>
										<label
											for="card-number"
											class="block text-sm font-medium leading-5 text-gray-700">Card Number</label
										>
										<div class="mt-1 rounded-md shadow-sm">
											<input
												id="card-number"
												type="text"
												required
												class="form-input block w-full sm:text-sm sm:leading-5"
											/>
										</div>
									</div>
									<div class="mt-6">
										<label
											for="expiration-date"
											class="block text-sm font-medium leading-5 text-gray-700"
											>Expiration Date</label
										>
										<div class="mt-1 flex">
											<div class="mr-2 rounded-md shadow-sm">
												<input
													id="expiration-month"
													type="text"
													required
													class="form-input block w-full sm:text-sm sm:leading-5"
													placeholder="MM"
												/>
											</div>
											<div class="ml-2 rounded-md shadow-sm">
												<input
													id="expiration-year"
													type="text"
													required
													class="form-input block w-full sm:text-sm sm:leading-5"
													placeholder="YYYY"
												/>
											</div>
										</div>
									</div>
									<div class="mt-6">
										<label for="cvv" class="block text-sm font-medium leading-5 text-gray-700"
											>CVV</label
										>
										<div class="mt-1 rounded-md shadow-sm">
											<input
												id="cvv"
												type="text"
												required
												class="form-input block w-full sm:text-sm sm:leading-5"
											/>
										</div>
									</div>
									<div class="mt-6">
										<button
											type="submit"
											class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
										>
											Save
										</button>
									</div>
								</form>
							</div>
						</div>
					{/key}
				{/if}
			</div>
		</div>
	</div>
</div>
