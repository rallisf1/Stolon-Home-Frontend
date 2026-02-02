import type { LayoutServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import pb from '$lib/server/pb'

type Menu = {
    [lang: string]: MenuItem[];
}

type MenuItem = {
    id: string;
    title: string;
    slug: string;
    children: MenuItem[];
}

export const load: LayoutServerLoad = async ({  }) => {
    if(!pb.authStore.isValid) error(500, {
		message: 'Database Auth Failed'
	})
    const items = await pb.collection('menu').getFullList({
        sort: 'parent,sort'
    })
    const menu: Menu = {}
    // const nav_logo = 
    items.forEach((record) => {
        const lang = record.language
        if(!Object.hasOwn(menu, lang)) menu[lang] = []
        if(!record.parent) {
            menu[lang].push({
                id: record.id,
                title: record.title,
                slug: record.slug,
                children: []
            } as MenuItem)
        } else {
            // TODO add submenu items
            // primo menu only has 1 level, so we must always feed the current level to the nav component and add a back button that loads the previous level (if any)
        }
    })
    return {
        menu
    }
}