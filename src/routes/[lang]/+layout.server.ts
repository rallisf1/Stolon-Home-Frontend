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
    // Options / Translations
    const allOptions = await pb.collection('options').getFullList({
        sort: 'language,key'
    })

    const translations: any = {}
    
    allOptions.forEach(opt => {
        if (!translations[opt.language]) translations[opt.language] = {}
        
        const parts = opt.key.split('.')
        let current = translations[opt.language]
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i]
            if (i === parts.length - 1) {
                current[part] = opt.value
            } else {
                if (!current[part]) current[part] = {}
                current = current[part]
            }
        }
    })

    const options = allOptions.filter(o => o.language === lang);
    const copyrightItem = options.find(o => o.key === 'copyright');
    const startYearItem = options.find(o => o.key === 'start_year');
    
    const currentYearStr = new Date().getFullYear().toString()
    const startYear = startYearItem?.value || currentYearStr;
    const years = (startYear === currentYearStr) ? currentYearStr : `${startYear} - ${currentYearStr}`
    
    const socialItems = await pb.collection('social').getFullList({
        sort: 'sort'
    })
    const footer: Footer = {
        footer_node: footerColumns,
        copyright: `${years} ${copyrightItem?.value || ''}`,
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

    return {
        lang,
        menu,
        footer,
        translations,
        logos: {
            light: '/logo-light.png',
            dark: '/logo-dark.png',
        }
    }
}