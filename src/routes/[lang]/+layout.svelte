<script lang="ts">
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
<ChatArea
    floating={true}
    chatService={data.chatService}
    {translations}
    {lang}
/>
