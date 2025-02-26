<script lang="ts">
	import FullLogo from '$lib/components/3atelecom/header/FullLogo.svelte';
	import Dropdown from '$lib/components/3atelecom/header/Dropdown.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils.js';
	let { class: className } = $props();
	import { PUBLIC_URL, PUBLIC_HOME_PATH } from '$env/static/public';
</script>

<div class={cn('flew-row flex items-center justify-between', className)}>
	<a href={PUBLIC_URL + PUBLIC_HOME_PATH}>
		<FullLogo size="44" />
	</a>
	<!--
	<div class="hidden flex-row space-x-4 font-inria text-white sm:flex">
		<Button variant="ghost" class="border-2 text-xl">Accueil</Button>
		<Button variant="ghost" class="border-2 text-xl">Présentation</Button>
		<Button variant="ghost" class="border-2 text-xl">Contribution</Button>
		</div>-->
	<Dropdown size="44" triggerClass="<!--sm:-->hidden" />
</div>
