<script lang="ts">
	import { CalendarHeart } from 'lucide-svelte';
	let { size }: { size: string } = $props();
</script>

<CalendarHeart strokeWidth={1} {size} color="white" />
