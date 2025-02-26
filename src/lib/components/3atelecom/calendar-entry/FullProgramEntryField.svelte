<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	let {
		title,
		text,
		type = undefined
	}: { title: string; text: string; type?: string | undefined } = $props();
</script>

<div class="flex flex-col text-left">
	{#if type === 'link'}
		<Button
			href={text}
			variant="link"
			target="_blank"
			rel="noopener noreferrer"
			class="w-min p-0 font-inria"
		>
			{title}
		</Button>
	{:else}
		<div class="font-inter font-bold">{title}</div>
		<div class="ml-4 font-inria">
			{text}
		</div>
	{/if}
</div>
