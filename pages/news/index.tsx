import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NewsCards from '@/components/NewsCards'
import Title from '@/components/Title'
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries'

export const getStaticProps: GetStaticProps<{
  posts: Post[]
}> = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)

  return (
    <div>
      <Header />
      <Title title="Notizie" />
      <NewsCards articles={posts} />
      <Footer />
    </div>
  )
}
