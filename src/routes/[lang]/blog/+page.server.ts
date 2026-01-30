import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import pb from '$lib/server/pb'
import type { ClientResponseError } from 'pocketbase'

export const load: PageServerLoad = async ({ params, url }) => {
    try {
        // Get selected tags from URL query params (max 2)
        const selectedTagsParam = url.searchParams.get('tags')
        const selectedTags = selectedTagsParam
            ? selectedTagsParam.split(',').slice(0, 2).filter(Boolean)
            : []

        // Build filter for PocketBase if tags are selected
        let filter = ''
        if (selectedTags.length > 0) {
            // Supports both array fields and text fields with comma-separated values
            const tagFilters = selectedTags.map(tag =>
                `(tags ~ '${tag}' || tags.name ~ '${tag}')`
            )
            filter = tagFilters.join(' || ')
        }

        // Fetch filtered blog posts
        const data = await pb.collection('blog').getList(1, 50, {
            fields: 'id,title,desc,image,slug,tags',
            filter,
            sort: '-created'
        })

        // Fetch all blog posts to extract unique tags
        const allPosts = await pb.collection('blog').getFullList({
            fields: 'tags'
        })

        // Extract unique tags from all posts
        const tagsSet = new Set<string>()

        allPosts.forEach((post) => {
            if (post.tags) {
                // Handle different tag field types
                if (Array.isArray(post.tags)) {
                    // If tags is an array
                    post.tags.forEach((tag: any) => {
                        if (typeof tag === 'string') {
                            tagsSet.add(tag)
                        } else if (tag?.name) {
                            tagsSet.add(tag.name)
                        }
                    })
                } else if (typeof post.tags === 'string') {
                    // If tags is a comma-separated string
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
            lang: params.lang
        }
    } catch (err) {
        error(500, `Failed to fetch Blog from Pocketbase: ${(err as ClientResponseError).message}`)
    }
}