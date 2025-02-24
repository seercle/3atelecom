<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';

	import CalendarDays from 'lucide-svelte/icons/calendar-days';
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Card.Root class="w-80">
			<Card.Content class="px-6 py-3">
				<div class="flex justify-between space-x-4">
					<Avatar.Root>
						<Avatar.Image src="https://github.com/sveltejs.png" />
						<Avatar.Fallback>I</Avatar.Fallback>
					</Avatar.Root>
					<div>
						<h4 class="text-sm font-semibold">TUM</h4>
						<p class="text-sm">Computer science, Embedded systems</p>
						<div class="flex items-center pt-[6px]">
							<CalendarDays class="mr-2 size-4 opacity-70" />
							<span class="text-xs text-muted-foreground"> Opened September 2022 </span>
						</div>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
			<Dialog.Description>
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
