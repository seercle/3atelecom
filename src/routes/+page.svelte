<script lang="ts">
	import Card from '$lib/components/3atelecom/card/Card.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Preview from '$lib/components/3atelecom/calendar-entry/Preview.svelte';
	import Filter from '$lib/components/3atelecom/calendar-control/Filter.svelte';
	import { group_by_day, sort_by_close_asc, month_number_name_map, type Programs } from './program';
	type Props = {
		data: Programs;
	};
	let { data }: Props = $props();
	let close_sorted = $derived(sort_by_close_asc(group_by_day(Object.values(data))));
</script>

<div class="flex flex-col space-y-5 px-7 pb-6 pt-8 font-inria text-lg font-normal text-white">
	<span class="self-start">Un calendier pour tout savoir sur la 3A ...</span>
	<span class="self-end">... avec les démarches à suivre !</span>
</div>

<div class="flex flex-row justify-center space-x-[-20px]">
	<div class="flex flex-col space-y-8">
		<div class="z-10">
			<Card
				color="white"
				title="dates butoires"
				content="Les dates affichées correspondent à la date limite pour postuler à la formation."
			/>
		</div>
		<div class="z-30">
			<Card
				color="white"
				title="confiance"
				content="Ce site n’a pas pour vocation de remplacer les présentations de l’administration."
			/>
		</div>
	</div>

	<div class="mt-16 flex flex-col space-y-6">
		<div class="z-20">
			<Card
				color="white"
				title="démarches"
				content="Chaque entrée du calendrier contient les démarches à suivre pour postuler."
			/>
		</div>
		<div class="z-40">
			<Card
				color="#FFFFFF"
				title="marché libre"
				content="Certaines formations concernent le marché libre, lisez bien la description de la formation."
			/>
		</div>
	</div>
</div>

<div class="flex flex-row items-center justify-center space-x-5 pb-8 pl-5 pr-8 pt-8">
	<Button
		class="font-['Inria Sans'] w-72 bg-purple-300 text-sm font-normal leading-normal text-black hover:bg-purple-400"
		>Afficher les deadlines passées
	</Button>
	<Filter />
</div>

<div class="flex flex-col items-center space-y-5">
	{#each close_sorted as { date, programs }}
		<div class="flex flex-col space-y-[6px]">
			<div class="flex flex-row items-center justify-center space-x-2">
				<hr class="h-1 w-72 border-0 bg-white" />
				<div class="flex flex-col font-inknut font-light leading-[16px] text-white">
					<span>{date.slice(8, 10)}</span>
					<span>{month_number_name_map[date.slice(5, 7)].short}</span>
				</div>
			</div>
			{#each programs as program}
				<Preview {program} />
			{/each}
		</div>
	{/each}
</div>
