<script>
	import Header from '../lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Server Monitoring</title>
	<meta name="description" content="Server Monitoring" />
</svelte:head>

<main>
	<div class="header position-absolute top-0 start-50 translate-middle-x">
		<Header />
	</div>
	<div>
		<slot />
	</div>
</main>

<style>
	main {
		overflow: hidden;
	}
	.header {
		width: 100%;
		z-index: 1;
	}
</style>
