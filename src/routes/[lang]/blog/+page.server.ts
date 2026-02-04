import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import pb from '$lib/server/pb'
import type { ClientResponseError } from 'pocketbase'

export const load: PageServerLoad = async ({ params, url }) => {
    try {

        const selectedTagsParam = url.searchParams.get('tags')
        const selectedTags = selectedTagsParam
            ? selectedTagsParam.split(',').slice(0, 2).filter(Boolean)
            : []

        // SSR Pagination: Get current page from URL
        const pageParam = url.searchParams.get('page')
        const currentPage = pageParam ? parseInt(pageParam) : 1
        const perPage = 10

        let filter = ''
        if (selectedTags.length > 0) {
            const tagFilters = selectedTags.map(tag =>
                `(tags ~ '${tag}' || tags.name ~ '${tag}')`
            )
            filter = tagFilters.join(' || ')
        }

        const data = await pb.collection('blog').getList(currentPage, perPage, {
            fields: 'id,title,desc,image,slug,tags',
            filter,
            sort: '-created'
        })

        const allPosts = await pb.collection('blog').getFullList({
            fields: 'tags'
        })
        const tagsSet = new Set<string>()

        allPosts.forEach((post) => {
            if (post.tags) {
                if (Array.isArray(post.tags)) {
                    post.tags.forEach((tag: any) => {
                        if (typeof tag === 'string') {
                            tagsSet.add(tag)
                        } else if (tag?.name) {
                            tagsSet.add(tag.name)
                        }
                    })
                } else if (typeof post.tags === 'string') {
                    post.tags.split(',').forEach((tag: string) => {
                        const trimmed = tag.trim()
                        if (trimmed) {
                            tagsSet.add(trimmed)
                        }
                    })
                }
            }
        })

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
            availableTags: Array.from(tagsSet).sort(),
            selectedTags,
            lang: params.lang,
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