<script lang="ts">
import { page } from '$app/stores';
import "$lib/assets/reset.css";
import "../../app.css";
import { beforeNavigate } from '$app/navigation';
import { previousUrl } from "$lib/stores";
import ChatArea from "$lib/ChatArea.svelte";
let {data,children } = $props();
let translations = $derived(data.translations);
let lang = $derived(data.lang);


beforeNavigate(({ from }) => {
	if(from) {
		$previousUrl = from.url.href;
	}
});
</script>

{@render children()}
{#if $page.url.pathname !== '/en' && $page.url.pathname !== '/el'}
	<ChatArea
		floating={true}
		chatService={data.chatService}
		{translations}
		{lang}
	/>

{/if}
