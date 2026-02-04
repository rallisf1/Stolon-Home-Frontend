<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();

    let page = $derived(data.record);

    // TODO check UI
</script>

{@html page.content}