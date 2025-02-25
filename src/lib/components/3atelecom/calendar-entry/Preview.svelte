<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import CalendarDays from 'lucide-svelte/icons/calendar-days';
	import type { Program } from '../../../../routes/program';
	import { month_number_name_map } from '../../../../routes/program';
	let { program }: { program: Program } = $props();
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Card.Root class="w-80">
			<Card.Content class="px-6 py-3">
				<div class="flex justify-between space-x-4">
					<Avatar.Root>
						<Avatar.Image src={program.logo} />
						<Avatar.Fallback>I</Avatar.Fallback>
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
			<Dialog.Title>{program.name}</Dialog.Title>
			<Dialog.Description>
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
