import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
    const acceptLanguage = request.headers.get('accept-language');

    let preferredLang = 'en';

    if (acceptLanguage && acceptLanguage.toLowerCase().includes('el')) {
        preferredLang = 'el';
    }

    throw redirect(302, `/${preferredLang}`);
};
