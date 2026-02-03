import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ params, data }) => {
	const { lang } = params;

	if (lang !== 'el' && lang !== 'en') {
		throw redirect(302, '/en');
	}

	return {
		lang,
		...data
	};
};