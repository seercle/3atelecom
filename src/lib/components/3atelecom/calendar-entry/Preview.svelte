<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import CalendarDays from 'lucide-svelte/icons/calendar-days';
	import FullProgramEntryField from './FullProgramEntryField.svelte';
	import type { Program } from '../../../../routes/program';
	import { month_number_name_map, has_date_passed } from '../../../../routes/program';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	let { program }: { program: Program } = $props();
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Card.Root
			class={has_date_passed(program.close_date)
				? 'w-80 line-through opacity-50'
				: 'w-80 opacity-100'}
		>
			<Card.Content class="px-6 py-3">
				<div class="flex justify-between space-x-4">
					<Avatar.Root>
						<Avatar.Image src={program.logo} />
						<Avatar.Fallback></Avatar.Fallback>
					</Avatar.Root>
					<div>
						<h4 class="text-left text-sm font-semibold">{program.name}</h4>
						<p class="text-left text-sm">{program.fields.join(', ')}</p>
						<div class="flex items-center pt-[6px]">
							<CalendarDays class="mr-2 size-4 opacity-70" />
							<span class="text-xs text-muted-foreground">
								Opened
								{month_number_name_map[program.open_date.slice(5, 7)].long}
								{program.open_date.slice(0, 4)}
							</span>
						</div>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</Dialog.Trigger>

	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>
				<div class="flex flex-row items-center justify-center space-x-4">
					<Avatar.Root>
						<Avatar.Image src={program.logo} />
						<Avatar.Fallback></Avatar.Fallback>
					</Avatar.Root>
					<div>
						{program.name}
					</div>
				</div>
			</Dialog.Title>
		</Dialog.Header>
		<ScrollArea class="max-h-[80vh] overflow-y-auto">
			<Dialog.Description class=" flex flex-col space-y-[6px]">
				{#if program.fields}
					<FullProgramEntryField title="Fields:" text={program.fields.join(', ')} />
				{/if}
				{#if program.open_date}
					<FullProgramEntryField title="Opened:" text={program.open_date} />
				{/if}
				{#if program.close_date}
					<FullProgramEntryField title="Will close:" text={program.close_date} />
				{/if}
				{#if program.link}
					<FullProgramEntryField title="Lien vers la formation" text={program.link} type="link" />
				{/if}
				{#if program.school}
					<FullProgramEntryField title="School:" text={program.school.join(', ')} />
				{/if}
				{#if program.access}
					<FullProgramEntryField title="Access:" text={program.access} />
				{/if}
				{#if program.type}
					<FullProgramEntryField title="Type:" text={program.type} />
				{/if}
				{#if program.country}
					<FullProgramEntryField title="Country:" text={program.country.join(', ')} />
				{/if}
				{#each program.paragraphs as { title, paragraph }}
					<FullProgramEntryField {title} text={paragraph} />
				{/each}
			</Dialog.Description>
		</ScrollArea>
	</Dialog.Content>
</Dialog.Root>
