import Link from 'next/link'
import NewsletterForm from './NewsletterForm'
export default function NewsCards({ articles }) {
  console.log(articles)
  return (
    <div className='bg-white pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8'>
      <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
        <div>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
            Attualità
          </h2>
          <div className='mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center'>
            <p className='text-xl text-gray-800'>
              Se desiderate ricevere le ultime notizie, registratevi qui sotto.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className='mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>
          {articles.map((article) => (
            <div key={article.attributes.title} className='cursor-pointer'>
              <Link href={`/article/${article.attributes.slug}`}>
                <div>
                  <p className='text-sm text-gray-800'>
                    <time dateTime={article.date}>{article.date}</time>
                  </p>

                  <div className='mt-2 block'>
                    <p className='text-xl font-semibold text-gray-900'>
                      {article.attributes.title}
                    </p>
                    <p className='mt-3 text-base text-gray-800'>
                      {article.attributes.description}
                    </p>
                  </div>

                  <div className='mt-3'>
                    <div className='text-base font-semibold text-rose-900 hover:text-rose-800'>
                      Read full story
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
