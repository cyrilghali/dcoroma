import { createClient, type SanityClient } from 'next-sanity'
import { QueryParams } from 'sanity'

import { apiVersion, dataset, projectId, useCdn } from '~/lib/sanity.api'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }

  return client
}

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
  preview,
}: {
  query: string
  qParams?: QueryParams
  tags: string[]
  preview?: { token: string }
}): Promise<QueryResponse> {
  const client = getClient(preview)
  // @ts-ignore
  return client.fetch<QueryResponse>(query, qParams, {
    cache: 'force-cache',
    next: { tags },
  })
}
