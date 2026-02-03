<script lang="ts">
    import Icon from '@iconify/svelte'
    import languages from '$lib/constants'
    let { lang, list }: { lang: string; list: string[] } = $props()
    // use circle-flags:${lang}
    // e.g. circle-flags:en

    let langs2Show = $derived(list.filter(l => l !== lang))

    // use languages.find(l => l.key === lang) to get language name
</script>

TODO html