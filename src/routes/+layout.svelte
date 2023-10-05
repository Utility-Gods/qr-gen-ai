<script>
	import Footer from '$lib/app_components/Footer.svelte';
	import Header from '$lib/app_components/Header.svelte';
	import { Toaster } from 'svelte-sonner';
	import '../app.css';
</script>

<div class="flex flex-col h-full overflow-auto">
	<Header />
	<slot />
	<Footer />
</div>

<Toaster richColors position="top-center" />
