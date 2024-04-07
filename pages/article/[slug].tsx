import ReactMarkdown from 'react-markdown'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PageTitle from '@/components/PageTitle'
import { fetchAPI } from '@/lib/api'

export async function getStaticPaths() {
  const articlesRes = await fetchAPI('/articles', { fields: ['slug'] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI('/articles', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  })
  const categoriesRes = await fetchAPI('/categories')

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  }
}

const Article = ({ article }) => {
  console.log(article)
  return (
    <div>
      <Header />
      <div>
        <div className='space-y-1 p-10 text-center'>
          <dl>
            <div className='pb-4'>
              <PageTitle>{article.attributes.title}</PageTitle>
            </div>
            <div>
              <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                <div className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                  {article.attributes.date}
                </div>
              </dd>
            </div>
          </dl>
        </div>
        <div className='flex justify-center'>
          <div className=' justify-items-center max-w-full w-3/4'>
            <ReactMarkdown className='whitespace-pre-line'>
              {article.attributes.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Article
