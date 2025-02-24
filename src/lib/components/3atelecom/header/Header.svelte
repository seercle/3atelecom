<script lang="ts">
	import FullLogo from '$lib/components/3atelecom/logo/FullLogo.svelte';
	import Dropdown from '$lib/components/3atelecom/header/Dropdown.svelte';
	import { cn } from '$lib/utils.js';
	let { class: className } = $props();
	import { PUBLIC_URL, PUBLIC_HOME_PATH } from '$env/static/public';
</script>

<div class={cn('flew-row flex items-center justify-between', className)}>
	<a href={PUBLIC_URL + PUBLIC_HOME_PATH}>
		<FullLogo size="44" />
	</a>
	<Dropdown size="44" />
</div>
