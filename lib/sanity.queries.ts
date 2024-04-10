import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'

import { sanityFetch } from '@/lib/sanity.client'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(): Promise<Post[]> {
  return await sanityFetch({ query: postsQuery, tags: ['post'] })
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(slug: string): Promise<Post> {
  return await sanityFetch({
    query: postBySlugQuery,
    tags: ['post'],
    qParams: { slug: slug }, // add slug from next-js params
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}
