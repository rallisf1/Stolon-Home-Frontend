import type { LayoutServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import pb from '$lib/server/pb'

type Nav = {
    nav_items: {
        nav_link: NavItem
    }[];
}

type NavItem = {
    id?: string;
    url: string;
    label: string;
    icon?: string;
    //children: MenuItem[];
}

type Footer = {
    footer_node: {
        title: string;
        columns: {
            link: NavItem;
        }[];
    }[];
    copyright: string;
    socials: {
        social: Social
    }[]
}

type Social = {
    icon: string;
    link: NavItem;
}

export const load: LayoutServerLoad = async ({ params }) => {
    const { lang } = params;
    if (!pb.authStore.isValid) error(500, {
        message: 'Database Auth Failed'
    })
    // NavBar
    const items = await pb.collection('menu').getFullList({
        /* for multilevel
        sort: 'parent,sort'
        filter: `language='${lang}'`
        */
        sort: 'sort',
        filter: `parent=null && language='${lang}'`
    })
    const menu: Nav = {
        nav_items: []
    }
    items.forEach((record) => {
        menu.nav_items.push({
            nav_link: {
                id: record.id,
                url: record.slug === '/' ? `/${lang}` : `/${lang}/${record.slug}`,
                label: record.title,
                icon: record.icon
            }
        })
    })
    // Footer
    const footerItems = await pb.collection('footer').getFullList({
        sort: 'column,sort',
        filter: `language='${lang}'`
    })
    let footerColumns: Footer["footer_node"] = []
    for (const footerItem of footerItems) {
        if (!footerColumns[footerItem.column]) {
            footerColumns[footerItem.column] = {
                title: '',
                columns: []
            }
        }
        if (footerItem.column > 0 && footerItem.sort === 0) {
            footerColumns[footerItem.column].title = footerItem.title
        } else {
            footerColumns[footerItem.column].columns.push({
                link: {
                    label: footerItem.title,
                    url: footerItem.url
                }
            })
        }
    }
    const copyrightItem = await pb.collection('options').getFirstListItem(`key='copyright' && language='${lang}'`)
    const startYear = await pb.collection('options').getFirstListItem(`key='start_year'`)
    const currentYear = new Date().getFullYear().toString()
    const years = (startYear.value === currentYear) ? currentYear : `${startYear.value} - ${currentYear}`
    const socialItems = await pb.collection('social').getFullList({
        sort: 'sort'
    })
    const footer: Footer = {
        footer_node: footerColumns,
        copyright: `${years} ${copyrightItem.value}`,
        socials: socialItems.map(s => {
            return {
                social: {
                    icon: s.icon,
                    link: {
                        url: s.url,
                        label: s.title
                    }
                }
            }
        })
    }

    const cards = await pb.collection('cards').getFullList({
        filter: `lang='${params.lang}'`,
        sort: 'created'
    })
    const records = cards.map((record) => ({
                id: record.id,
                title: record.title,
                label: record.label,
                image: pb.files.getURL(record, record.img),
                price: record.price,
                link: record.link,
                lang: record.lang
            }))
    return {
        menu,
        footer,
        logos: {
            light: '/logo-light.png',
            dark: '/logo-dark.png',
        },
        records
    }
}