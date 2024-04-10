import { PortableText } from '@portabletext/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

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
  }
}

export default function ProjectSlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [post] = useLiveQuery(props.post, postBySlugQuery, {
    slug: props.post.slug.current,
  })

  return (
    <section className="post">
      {post.mainImage ? (
        <Image
          className="post__cover"
          src={urlForImage(post.mainImage)?.url() || ''}
          height={231}
          width={367}
          alt=""
        />
      ) : (
        <div className="post__cover--none" />
      )}
      <div className="post__container">
        <h1 className="post__title">{post.title}</h1>
        <p className="post__excerpt">{post.excerpt}</p>
        <p className="post__date">{formatDate(post._createdAt)}</p>
        <div className="post__content">
          <PortableText value={post.body} />
        </div>
      </div>
    </section>
  )
}

export const getStaticPaths = async () => {
  const slugs = await getPosts()

  return {
    paths: slugs?.map(({ slug }) => `/news/${slug}`) || [],
    fallback: 'blocking',
  }
}
