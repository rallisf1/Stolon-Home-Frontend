import { type Reroute } from '@sveltejs/kit';

export const reroute: Reroute = ({ url }) => {
	// If the user visits the root '/', 
	// SvelteKit will internally treat it as '/home'
	if (url.pathname === '/en') {
		return '/en/home';
	}
	if (url.pathname === '/el') {
		return '/el/home';
	}
    const homePages = ['foss-credits', 'privacy-policy', 'terms-and-conditions'];
    const parts = url.pathname.split('/').filter(Boolean);
    if(homePages.includes(parts[1])) {
        return `/${parts[0]}/home/${parts[1]}`;
    }
}