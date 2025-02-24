<script lang="ts">
	import Header from '$lib/components/3atelecom/header/Header.svelte';
	import Card from '$lib/components/3atelecom/card/Card.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Preview from '$lib/components/3atelecom/calendar-entry/Preview.svelte';
	import Filter from '$lib/components/3atelecom/calendar-control/Filter.svelte';
</script>

<div class="gradient">
	<div class="from-black from-50% to-rose-950">
		<Header class="mx-[32px] pb-[32px] pt-[50px]" />
	</div>
	<hr class="h-1 border-0 bg-white" />
	<div
		class="flex flex-col space-y-5 from-rose-950 to-red-600 px-7 pb-6 pt-8 font-inria text-lg font-normal text-white"
	>
		<span class="self-start">Un calendier pour tout savoir sur la 3A ...</span>
		<span class="self-end">... avec les démarches à suivre !</span>
	</div>

	<div class="flex flex-row justify-center space-x-[-20px] from-red-600 via-[#E71644] to-[#AB1032]">
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

	<div
		class="flex flex-row items-center justify-center space-x-5 from-[#AB1032] to-rose-950 pb-8 pl-5 pr-8 pt-8"
	>
		<Button
			class="font-['Inria Sans'] w-72 bg-purple-300 text-sm font-normal leading-normal text-black hover:bg-purple-400"
			>Afficher les deadlines passées
		</Button>
		<Filter />
	</div>

	<div class="flex flex-col items-center space-y-5">
		<div class="flex flex-col space-y-[6px]">
			<div class="flex flex-row items-center justify-center space-x-2">
				<hr class="h-1 w-72 border-0 bg-white" />
				<div class="font-inknut flex flex-col font-light leading-[16px] text-white">
					<span>17</span>
					<span>jan</span>
				</div>
			</div>

			<Preview />
			<Preview />
		</div>

		<div class="flex flex-col space-y-[6px]">
			<div class="flex flex-row items-center justify-center space-x-2">
				<hr class="h-1 w-72 border-0 bg-white" />
				<div class="font-inknut flex flex-col font-light leading-[16px] text-white">
					<span>17</span>
					<span>jan</span>
				</div>
			</div>

			<Preview />
			<Preview />
		</div>
	</div>
</div>
