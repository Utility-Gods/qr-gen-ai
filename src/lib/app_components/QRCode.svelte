<script>
	import QrCode from 'svelte-qrcode';
	export let url;
</script>

<div>
	<QrCode value={url} size="300" padding="2" />
</div>
