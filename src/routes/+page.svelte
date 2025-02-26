<script lang="ts">
	import Card from '$lib/components/3atelecom/card/Card.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Preview from '$lib/components/3atelecom/calendar-entry/Preview.svelte';
	import Filter from '$lib/components/3atelecom/calendar-control/Filter.svelte';
	import {
		sort_by_close_asc,
		next_deadline_index,
		group_by_close_date,
		month_number_name_map,
		type Programs
	} from './program';
	type Props = {
		data: Programs;
	};
	const PASSED_DEADLINES_COUNT = 1;
	const FUTURE_DEADLINES_COUNT = Number.POSITIVE_INFINITY;
	let passed_deadlines_count = $state(PASSED_DEADLINES_COUNT);
	let future_deadlines_count = $state(FUTURE_DEADLINES_COUNT);
	const { data }: Props = $props();
	const close_sorted_programs = sort_by_close_asc(group_by_close_date(Object.values(data)));
	const _next_deadline_index = next_deadline_index(close_sorted_programs);

	const clamped_programs = $derived(
		close_sorted_programs.slice(
			Math.max(0, _next_deadline_index - passed_deadlines_count),
			_next_deadline_index + future_deadlines_count
		)
	);
	const can_load_previous = $derived(passed_deadlines_count < _next_deadline_index);
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
		onclick={() => {
			if (can_load_previous) {
				passed_deadlines_count += 2;
			} else {
				passed_deadlines_count = PASSED_DEADLINES_COUNT;
			}
		}}
		class={can_load_previous
			? "font-['Inria Sans'] w-72 bg-purple-300 text-sm font-normal leading-normal text-black hover:bg-purple-400"
			: "font-['Inria Sans'] w-72 bg-yellow-300 text-sm font-normal leading-normal text-black hover:bg-yellow-400"}
	>
		{#if can_load_previous}
			Charger plus de deadlines passées
		{:else}
			Masquer les deadlines passées
		{/if}
	</Button>
	<Filter />
</div>

<div class="flex flex-col items-center space-y-5">
	{#each clamped_programs as { date, programs }}
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
