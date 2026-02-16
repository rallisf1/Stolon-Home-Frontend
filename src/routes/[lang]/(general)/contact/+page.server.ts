import { FORM_ID } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return {
        formId: FORM_ID
    };
};
