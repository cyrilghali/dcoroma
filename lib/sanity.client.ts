import { createClient, type SanityClient } from 'next-sanity'
import { QueryParams } from 'sanity'

import { apiVersion, dataset, projectId, useCdn } from '~/lib/sanity.api'

export function getClient(): SanityClient {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
}

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string
  qParams?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  const client = getClient()
  return client.fetch<QueryResponse>(query, qParams ?? {}, {
    cache: 'force-cache',
    next: { tags },
  })
}
