<script>
	import  Save  from '$lib/icons/Save.svelte';

	import Button from '$components/ui/button/Button.svelte';
	import Textarea from '$components/ui/textarea/Textarea.svelte';
	import { onMount } from 'svelte';
	import Qr from '$lib/icons/QR.svelte';
	import { toast } from 'svelte-sonner';

	let text = '';
	let QRcomponent;
	let generate_code = false;

	function generateCode() {
		generate_code = true;

		scrollToElement('saveBtn');
		// saveBtn.scrollIntoView({ behavior: 'smooth' });
	}

	function saveImage() {
		var imageSource = document.querySelector('.qrcode').src;

		// Extract the base64 data from the image source
		var base64Data = imageSource.replace(/^data:image\/jpeg;base64,/, '');

		// Convert the base64 data to binary format
		var binaryData = atob(base64Data);

		// Create an array buffer to hold the binary data
		var buffer = new ArrayBuffer(binaryData.length);
		var view = new Uint8Array(buffer);
		for (var i = 0; i < binaryData.length; i++) {
			view[i] = binaryData.charCodeAt(i);
		}

		// Create a Blob from the array buffer
		var blob = new Blob([buffer], { type: 'image/jpeg' });

		// Create a URL for the Blob
		var url = URL.createObjectURL(blob);

		// Create a temporary anchor element
		var anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = 'image.jpeg'; // Specify the filename for the downloaded file

		// Programmatically click the anchor to initiate the download
		anchor.click();

		// Clean up by revoking the URL object
		URL.revokeObjectURL(url);

		toast.success('QR Code Saved Successfully');
	}

	function scrollToElement(element_id) {
		setTimeout(() => {
			document.getElementById(element_id)?.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'center'
			});
		}, 400);
	}

	function onChangeText(event) {
		generate_code = false;
		text = event.target.value;
	}

	onMount(async () => {
		try {
			QRcomponent = (await import('./QRCode.svelte')).default;
		} catch (e) {
			// do some thing
		}
	});
</script>

<div
	class="flex flex-col items-center flex-1 xl:p-6 p-3 xl:w-[55%] w-[96%] m-auto font-semibold py-12"
>
	<div class="text-theme-200 text-2xl xl:text-3xl text-center mb-6">
		Paste your text here and Generate QR Code
	</div>
	<Textarea class="my-6" on:input={onChangeText} placeholder="paste some URL or text to generator QR fod" />
	<Button class="bg-theme-100" on:click={generateCode}>
		<div class="w-5 h-5 mr-2">
			<Qr />
		</div>
		Generate QR Code</Button
	>
	{#if text.length > 0 && generate_code}
		<div
			class="rounded-lg border bg-card text-card-foreground shadow-sm xl:w-[380px] my-6 xl:h-[380px] w-[96%] h-auto"
		>
			<svelte:component this={QRcomponent} url={text} />
		</div>
		<div class="flex items-center gap-3">
			<!-- <Button id="saveBtn" variant="outline" class="" on:click={shareQR}>
				<Save class="w-5 h-5 mr-2" />
				Share QR Code</Button
			> -->
			<Button id="saveBtn" class="bg-theme-100" on:click={saveImage}>
				<div class="w-5 h-5 mr-2">
					<Save />
				</div>

				Save QR Code</Button
			>
		</div>
	{/if}
</div>

<style global>
</style>
