<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Header from '$lib/components/3atelecom/header/Header.svelte';
</script>

<Header class="mx-[32px] pb-[32px] pt-[50px]" />
<hr class="h-1 border-0 bg-white" />
{@render children?.()}
