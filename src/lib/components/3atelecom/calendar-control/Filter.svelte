<script lang="ts">
	import { Settings2 } from 'lucide-svelte';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Toggle } from '$lib/components/ui/toggle/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import Input from '$lib/components/3atelecom/calendar-control/Input.svelte';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
</script>

<Sheet.Root>
	<Sheet.Trigger>
		<Settings2
			strokeWidth={1}
			size="44"
			color="white"
			class="rounded-xl hover:bg-white hover:bg-opacity-25"
		/>
	</Sheet.Trigger>

	<Sheet.Content class="mx-4 px-4">
		<Input class="mb-5 mt-6 rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
		<ScrollArea type="always" class="max-h-[80vh] overflow-y-auto">
			<div class="ml-3 font-inria text-lg font-normal leading-normal text-black">
				Accès à la formation
			</div>
			<div class="mb-8 mt-3 flex flex-row justify-evenly">
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
					>Telecom</Toggle
				>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] "
					>Marché libre</Toggle
				>
			</div>

			<div class="ml-3 font-inria text-lg font-normal leading-normal text-black">
				Type de formation
			</div>
			<div class="mb-8 mt-3 flex flex-row justify-evenly">
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
					>Echange</Toggle
				>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
					>DD</Toggle
				>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] "
					>Master</Toggle
				>
			</div>

			<div class="ml-3 font-inria text-lg font-normal leading-normal text-black">Domaines</div>
			<div class="mb-8 mt-3 flex flex-row flex-wrap gap-4">
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
					Informatique
				</Toggle>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
					Economie
				</Toggle>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
					Cybersécurité
				</Toggle>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
					SE
				</Toggle>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
					Electronique
				</Toggle>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
					Mathématiques
				</Toggle>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
					Data science
				</Toggle>
			</div>

			<div class="ml-3 font-inria text-lg font-normal leading-normal text-black">Domaines</div>
			<div class="mb-8 mt-3 flex flex-row flex-wrap gap-4">
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
					Informatique
				</Toggle>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
					Economie
				</Toggle>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
					Cybersécurité
				</Toggle>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
					SE
				</Toggle>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
					Electronique
				</Toggle>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
					Mathématiques
				</Toggle>
				<Toggle variant="outline" class="font-inria shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
					Data science
				</Toggle>
			</div>

			<Sheet.Footer>
				<Sheet.Close
					class={'w-full bg-green-300 hover:bg-green-400 ' + buttonVariants({ variant: 'outline' })}
				>
					Ok
				</Sheet.Close>

				<Sheet.Close class={'w-full ' + buttonVariants({ variant: 'outline' })}
					>Réinitialiser
				</Sheet.Close>
			</Sheet.Footer>
		</ScrollArea>
	</Sheet.Content>
</Sheet.Root>
