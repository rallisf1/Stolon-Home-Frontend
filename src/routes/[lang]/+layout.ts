import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ params }) => {
	const { lang } = params;

	// Validate that lang is either 'el' or 'en'
	if (lang !== 'el' && lang !== 'en') {
		// If invalid, redirect to default language (en)
		throw redirect(302, '/en');
	}

	// TODO get menu from pocketbase
	return {
		lang
	};
};