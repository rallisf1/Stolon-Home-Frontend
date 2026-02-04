import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import pb from '$lib/server/pb'
import type { ClientResponseError } from 'pocketbase'
import type { EntryGenerator } from './$types'

export const entries: EntryGenerator = async () => {
  const pages = await pb.collection('pages').getFullList({
    fields: 'slug,language'
  })
  return pages.map(p => {
    return {
        lang: p.language,
        page: p.slug
    }
  })
};

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
    try {
        const { lang, page } = params
        const record = await pb.collection('page').getFirstListItem(`slug="${page}" && language="${lang}"`)
        return {
            record
        }
    } catch (err) {
        error(500, `Failed to fetch data from Pocketbase: ${(err as ClientResponseError).message}`)
    }
}
