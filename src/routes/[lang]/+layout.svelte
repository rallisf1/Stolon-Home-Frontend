<script lang="ts">
import { page } from '$app/stores';
import "$lib/assets/reset.css";
import "../../app.css";
import { beforeNavigate } from '$app/navigation';
import { previousUrl, chatStore } from "$lib/stores";
import ChatArea from "$lib/ChatArea.svelte";
import EspaBanner from "$lib/EspaBanner.svelte";
import { onMount } from "svelte";

let {data,children } = $props();
let translations = $derived(data.translations);
let lang = $derived(data.lang);

onMount(() => {
	const handleGlobalClick = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		const hintBtn = target.closest('button.hint-item');
		
		if (hintBtn) {
			const hintTextEl = hintBtn.querySelector('.hint-text');
			if (hintTextEl) {
				const prompt = hintTextEl.textContent?.trim();
				if (prompt) {
					// Stop the click from reaching the CMS button's inline onclick handler
					e.preventDefault();
					e.stopPropagation();
					
					chatStore.set({ isOpen: true, prompt });
				}
			}
		}
	};

	// Use capture phase (true) to intercept the event BEFORE the target button receives it
	window.addEventListener('click', handleGlobalClick, true);

	return () => {
		window.removeEventListener('click', handleGlobalClick, true);
	};
});

beforeNavigate(({ from }) => {
	if(from) {
		$previousUrl = from.url.href;
	}
});
</script>

{#key $page.url.pathname.split('/')[2]}
	{@render children()}
{/key}
{#if $page.route.id !== '/[lang]/(general)/chat'}
	<ChatArea
		floating={true}
		chatService={data.chatService}
		{translations}
		{lang}
	/>
<EspaBanner />
{/if}


