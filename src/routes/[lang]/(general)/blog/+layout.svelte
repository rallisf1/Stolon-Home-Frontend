<script lang="ts">
	let { children } = $props();
</script>

<style>
    .mobile-spacer {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        height: 60px;
        width: 100%;
        background-color: #ffffff;
        z-index: 10;
    }
    @media (max-width: 768px) {
        .mobile-spacer {
            display: block;
        }
    }
</style>

<div class="mobile-spacer">&nbsp;</div>

{@render children()}