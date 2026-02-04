import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import pb from '$lib/server/pb'
import type { ClientResponseError, ListResult, RecordModel } from 'pocketbase'

export const load: PageServerLoad = async ({ params, url }) => {
    try {

        const selectedTags = url.searchParams.get('tags')
        const pageParam = url.searchParams.get('page')
        const currentPage = pageParam ? parseInt(pageParam) : 1
        const perPage = 10

        let data: ListResult<RecordModel>
        if (selectedTags && selectedTags.length > 0) {
            const tagFilter = selectedTags.split(',').map(t => {
                return `'${t}' ?= tags`
            })
            data = await pb.collection('blog').getList(currentPage, perPage, {
                filter: `lang='${params.lang}' && (${tagFilter.join(' || ')})`,
                sort: '-created'
            })
        } else {
            data = await pb.collection('blog').getList(currentPage, perPage, {
                filter: `lang='${params.lang}'`,
                sort: '-created'
            })
        }

        const records = data.items.map((record) => ({
            id: record.id,
            title: record.title,
            desc: record.desc,
            image: pb.files.getURL(record, record.image),
            slug: record.slug,
            tags: record.tags || []
        }))

        return {
            records,
            availableTags: ["AI", "Computerization", "Marketing", "Business", "Education"],
            selectedTags: selectedTags?.split(',') || [],
            pagination: {
                page: data.page,
                perPage: data.perPage,
                totalItems: data.totalItems,
                totalPages: data.totalPages
            }
        }
    } catch (err) {
        error(500, `Failed to fetch Blog from Pocketbase: ${(err as ClientResponseError).message}`)
    }
}