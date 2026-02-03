import type { LayoutServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import pb from '$lib/server/pb'
import { asset } from '$app/paths'

type Nav = {
    nav_logo: string;
    nav_items: NavItem[]
}

type NavItem = {
    id: string;
    url: string;
    label: string;
    //children: MenuItem[];
}

export const load: LayoutServerLoad = async ({ params }) => {
    const { lang } = params;
    if(!pb.authStore.isValid) error(500, {
		message: 'Database Auth Failed'
	})
    const items = await pb.collection('menu').getFullList({
        /* for multilevel
        sort: 'parent,sort'
        filter: `language='${lang}'`
        */
        sort: 'sort',
        filter: `parent=null && language='${lang}'`
    })
    const menu: Nav = {
        nav_logo: asset('logo-light.png'), // do all navbars look ok with this?
        nav_items: []
    }
    items.forEach((record) => {
        menu.nav_items.push({
            id: record.id,
            url: `/${lang}/${record.slug}`,
            label: record.title
        } as NavItem)
    })
    return {
        menu
    }
}