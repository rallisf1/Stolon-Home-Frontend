<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let isVisible = $state(true);
	let lastScrollY = 0;

	const pdfUrl = "https://cdn1.dws.gr/storage/v1/object/public/files/f9362869-7ff0-4af5-b44d-8acc7835eeab/espa.pdf";
	const imageUrl = "https://cdn1.dws.gr/storage/v1/object/public/images/f9362869-7ff0-4af5-b44d-8acc7835eeab/1763646246994Screenshot_74.png";

	function handleScroll() {
		if (isVisible) {
			const currentScrollY = window.scrollY;
			if (Math.abs(currentScrollY - lastScrollY) > 50) {
				isVisible = false;
			}
		}
	}

	onMount(() => {
		lastScrollY = window.scrollY;
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function closeBanner() {
		isVisible = false;
	}
</script>

{#if isVisible}
	<div 
		class="espa-banner" 
		transition:fade={{ duration: 300 }}
	>
		<a href={pdfUrl} target="_blank" rel="noopener noreferrer" class="img-link">
			<img src={imageUrl} alt="ESPA Banner" />
		</a>
			<button 
			class="close-btn" 
			onclick={closeBanner} 
			aria-label="Close banner"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
		</button>
	</div>
{/if}

<style>
	.espa-banner {
		position: fixed;
		top: 13rem;
		right: 1rem;
		z-index: 1000;
		background: white;
		border-radius: 0.5rem;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		max-width: 250px;
		display: flex;
		align-items: flex-end;
		border: 1px solid #e2e8f0;
	}

	.close-btn {
		background: #f1f5f9;
		border: none;
		cursor: pointer;
		padding: 4px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.25rem;
		color: #64748b;
		transition: all 0.2s;
	}

	.close-btn:hover {
		background: #e2e8f0;
		color: #0f172a;
	}

	.img-link {
		display: block;
		width: 100%;
	}

	.img-link img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 0.25rem;
		border: 1px solid #f1f5f9;
	}
</style>
