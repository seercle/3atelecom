<script lang="ts">
	let { title, content, color }: { title: string; content: string; color: string } = $props();
</script>

<div
	class="flex h-[15rem] w-48 flex-col space-y-2 rounded-lg bg-gradient-to-b from-[#DB4E66] via-[#A24688] via-40% to-[#4E3ABA] px-6 pt-7"
>
	<div class={`mt-5 h-6 w-6 rounded-full bg-white`}></div>
	<div class="font-inter text-lg font-medium text-white">{title}</div>
	<div class="font-inria text-base font-normal leading-[18px] text-black">
		{content}
	</div>
</div>
