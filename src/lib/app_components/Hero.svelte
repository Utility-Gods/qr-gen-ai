<script>
	import Textarea from '$components/ui/textarea/Textarea.svelte';
	import { onMount } from 'svelte';

	let text = '';
	let QRcomponent;

	onMount(async () => {
		try {
			QRcomponent = (await import('./QRCode.svelte')).default;
		} catch (e) {
			// do some thing
		}
	});
</script>

<div class="flex flex-col items-center justify-center flex-1">
	<Textarea bind:value={text} />
	<div class="code">
		{#if text.length > 0}
			<svelte:component this={QRcomponent} url={text} />
		{/if}
	</div>
</div>
