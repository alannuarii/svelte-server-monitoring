<script>
	import { onMount } from 'svelte';
	import io from 'socket.io-client';
	import Header from '../lib/components/Header.svelte';

	// export let data;

	const socket = io('https://api-server-monitoring.alan.web.id'); 

	let cpu = [];
	let memory = [];
	let disk = [];

	onMount(() => {
		socket.on('cpu', (data) => {
			cpu = data;
		});
		socket.on('memory', (data) => {
			memory = data;
		});
		socket.on('disk', (data) => {
			disk = data;
		});
	});
</script>

<main>
	<Header />
	<div class="content px-3">
		<div class="card border rounded-4 py-2 shadow mb-2">
			<h5 class="text-center">CPU Metrics</h5>
			{#if cpu.length > 0}
				<ul class="list-group list-group-flush mx-3 mb-2">
					{#each cpu as { name, value }}
						<li class="list-group-item">{name}: {value.toFixed(3)}</li>
					{/each}
				</ul>
			{:else}
				<p>No metrics available.</p>
			{/if}
		</div>
		<div class="card border rounded-4 py-2 shadow mb-2">
			<h5 class="text-center">Memory Metrics</h5>
			{#if memory.length > 0}
				<ul class="list-group list-group-flush mx-3 mb-2">
					{#each memory as { name, value }}
						<li class="list-group-item">{name}: {value.toFixed(3)}</li>
					{/each}
				</ul>
				<div class="mx-3 mb-2">
					<div
						class="progress"
						role="progressbar"
						aria-label="Animated striped example"
						aria-valuenow={(memory[1].value / memory[0].value) * 100}
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<div
							class="progress-bar progress-bar-striped progress-bar-animated"
							style="width: {(memory[1].value / memory[0].value) * 100}%"
						>
							{((memory[1].value / memory[0].value) * 100).toFixed(0)}%
						</div>
					</div>
				</div>
			{:else}
				<p>No metrics available.</p>
			{/if}
		</div>
		<div class="card border rounded-4 py-2 shadow">
			<h5 class="text-center">Disk Metrics</h5>
			{#if disk.length > 0}
				<ul class="list-group list-group-flush mx-3 mb-2">
					{#each disk as { name, value }}
						<li class="list-group-item">{name}: {value.toFixed(3)}</li>
					{/each}
				</ul>
				<div class="mx-3 mb-2">
					<div
						class="progress"
						role="progressbar"
						aria-label="Animated striped example"
						aria-valuenow={(disk[1].value / disk[0].value) * 100}
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<div
							class="progress-bar progress-bar-striped progress-bar-animated"
							style="width: {(disk[1].value / disk[0].value) * 100}%"
						>
							{((disk[1].value / disk[0].value) * 100).toFixed(0)}%
						</div>
					</div>
				</div>
			{:else}
				<p>No metrics available.</p>
			{/if}
		</div>
	</div>
</main>

<style>
	.content {
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		padding-top: 10px;
		padding-bottom: 30px;
	}
	h5 {
		font-weight: 700;
	}
	.progress {
		height: 30px;
	}
</style>
