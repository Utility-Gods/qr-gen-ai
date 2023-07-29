<script lang="ts">
	import { QrCode } from 'lucide-svelte';
</script>

<header
	class="sticky top-0 z-40 w-full py-2 border-b shadow-sm supports-backdrop-blur:bg-theme-50/60 backdrop-blur border-theme-800"
>
	<div class="xl:w-[69%] w-full flex items-center justify-between m-auto text-theme-200">
		<div class="flex-1 flex">
			<div class="w-7 mr-3">
				<QrCode />
			</div>
			<div class="text-md font-semibold">Generate QR Code</div>
			<!-- <div class="text-gray-300">QR Code Made Easy</div> -->
		</div>
	</div>
	<!-- <div class="flex items-center text-xl font-bold text-theme-3000">
		<div class="mr-3 w-7 h-7">
			<CircleDotDashed />
		</div>
		<span> Caption It Now.com </span>
	</div> -->
	<!-- <div class="text-sm font-semibold text-center text-muted-foreground">
		Generate caption from images using AI.
	</div> -->
</header>
