<script>
	import Header from '../lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Server Monitoring</title>
	<meta name="description" content="Server Monitoring" />
</svelte:head>

<main>
	<Header />
	<div>
		<slot />
	</div>
</main>

<style>
	main {
		overflow-x: hidden;
	}
</style>
