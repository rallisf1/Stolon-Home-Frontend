import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import pb from '$lib/server/pb'
import type { ClientResponseError, RecordModel } from 'pocketbase'

export const load: PageServerLoad = async ({ params }) => {
    try {
        const record = await pb.collection('blog').getFirstListItem(`slug="${params.slug}" && language='${params.lang}'`)
        return {
            record: {
                ...record,
                image: pb.files.getURL(record, record.image)
            } as RecordModel,
            lang: params.lang
        }
    } catch (err) {
        error(500, `Failed to fetch data from Pocketbase: ${(err as ClientResponseError).message}`)
    }
}
