import { type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const { pathname } = event.url;

    if (pathname === '/') {
        const prefLang = event.request.headers.get('accept-language');
        const targetLang = prefLang?.includes('el') || prefLang?.includes('gr') ? 'el' : 'en';
        
        return new Response(null, {
            status: 302,
            headers: { location: `/${targetLang}` }
        });
    }

    if(pathname.includes('/home')) {
        const parts = pathname.split('/').filter(p => p !== '' && p !== 'home');
        return new Response(null, {
            status: 301,
            headers: { location: `/${parts.join('/')}` }
        });
    }

    return await resolve(event);
};