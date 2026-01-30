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

    return await resolve(event);
};