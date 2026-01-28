import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if(!event.params.lang) {
        const prefLang = event.request.headers.get('accept-language');
        if(prefLang?.includes('gr')) {
            return Response.redirect('/el');
        } else {
            return Response.redirect('/en');
        }
    }

	const response = await resolve(event);
	return response;
};