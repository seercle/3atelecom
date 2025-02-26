<script lang="ts">
	let { size, triggerClass }: { size: string; triggerClass: string } = $props();
	import { AlignRight } from 'lucide-svelte';
	import { House } from 'lucide-svelte';
	import { User } from 'lucide-svelte';
	import { Plus } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import {
		PUBLIC_URL,
		PUBLIC_HOME_PATH,
		PUBLIC_DISCOVER_PATH,
		PUBLIC_CONTRIBUTE_PATH
	} from '$env/static/public';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={triggerClass}>
		<div class="rounded-xl hover:bg-white hover:bg-opacity-25">
			<AlignRight strokeWidth={1} {size} color="white" />
		</div>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group class="text-red-400">
			<DropdownMenu.GroupHeading>Navigation</DropdownMenu.GroupHeading>
			<DropdownMenu.Separator />
			<a href={PUBLIC_URL + PUBLIC_HOME_PATH}>
				<DropdownMenu.Item>
					<House />
					Accueil
				</DropdownMenu.Item>
			</a>
			<a href={PUBLIC_URL + PUBLIC_DISCOVER_PATH}>
				<DropdownMenu.Item>
					<User />
					Présentation
				</DropdownMenu.Item>
			</a>
			<a href={PUBLIC_URL + PUBLIC_CONTRIBUTE_PATH}>
				<DropdownMenu.Item>
					<Plus />
					Contribution
				</DropdownMenu.Item>
			</a>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
