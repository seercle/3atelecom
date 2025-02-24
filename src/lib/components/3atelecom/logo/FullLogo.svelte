<script lang="ts">
	import Logo from './Logo.svelte';
	let { size }: { size: string } = $props();
</script>

<div class="flex flex-row space-x-[5px]">
	<Logo {size} />
	<div class="flex flex-col justify-center font-inria text-lg/5 font-bold text-white">
		<span>3à</span>
		<span>Telecom</span>
	</div>
</div>
