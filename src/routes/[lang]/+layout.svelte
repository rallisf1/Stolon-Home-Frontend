<script lang="ts">
	import "$lib/assets/reset.css";
	import "../../app.css";
	import { beforeNavigate } from '$app/navigation';
	import { previousUrl } from "$lib/stores";

	let { children } = $props();

	beforeNavigate(({ from }) => {
		if(from) {
			$previousUrl = from.url.href;
		}
	});
</script>

{@render children()}
