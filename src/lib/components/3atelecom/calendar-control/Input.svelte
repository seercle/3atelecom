<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Search } from 'lucide-svelte';
	let { ref = $bindable(null), class: className = '' } = $props();
</script>

<div
	class={cn(
		'flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2',
		className
	)}
>
	<Search strokeWidth={1.5} size="26" />
	<input
		type="search"
		bind:this={ref}
		placeholder="École, formation, domaine, ..."
		class="w-full rounded-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
	/>
</div>
