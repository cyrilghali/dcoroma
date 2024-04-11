import { PortableText } from '@portabletext/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import Header from '@/components/Header'
import Title from '@/components/Title'
import { urlForImage } from '~/lib/sanity.image'
import {
  getPost,
  getPosts,
  type Post,
  postBySlugQuery,
} from '~/lib/sanity.queries'
import { formatDate } from '~/utils'

interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<
  {
    post: Post
  },
  Query
> = async ({ params = {} }) => {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 10,
  }
}

export default function ProjectSlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [post] = useLiveQuery(props.post, postBySlugQuery, {
    slug: props.post.slug.current,
  })

  return (
    <div>
      <Header />
      <Title title={post.title} />
      <section className="w-full max-w-2xl mx-auto mt-8">
        {post.mainImage ? (
          <div className="relative h-64 w-full">
            <Image
              className="absolute h-full w-full object-cover"
              src={urlForImage(post.mainImage)?.url() || ''}
              layout="fill"
              alt=""
            />
          </div>
        ) : (
          <></>
        )}
        <div className="mt-4 px-4 lg:px-0">
          <p className="text-lg text-gray-700">{post.excerpt}</p>
          <p className="text-sm text-gray-500 mt-2">
            {formatDate(post._createdAt)}
          </p>
          <div className="mt-4 text-gray-800">
            <PortableText value={post.body} />
          </div>
        </div>
      </section>
    </div>
  )
}

export const getStaticPaths = async () => {
  const slugs = await getPosts()

  return {
    paths: slugs?.map(({ slug }) => `/news/${slug}`) || [],
    fallback: 'blocking',
  }
}
