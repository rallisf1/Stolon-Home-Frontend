import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
    // Get the Accept-Language header to detect user's preferred language
    const acceptLanguage = request.headers.get('accept-language');

    // Default to 'en' if no language preference is found
    let preferredLang = 'en';

    // Check if the user prefers Greek
    if (acceptLanguage && acceptLanguage.toLowerCase().includes('el')) {
        preferredLang = 'el';
    }

    // Redirect to the appropriate language route
    throw redirect(302, `/${preferredLang}`);
};
