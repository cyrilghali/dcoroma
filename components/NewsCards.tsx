import Autoplay from 'embla-carousel-autoplay'
import { chunk } from 'lodash'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export default function NewsCards({ articles }) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' }) // Tailwind's sm breakpoint
  const chunkSize = isSmallScreen ? 2 : 4
  const articleGroups = chunk(articles, chunkSize) // Group articles into chunks of 4

  return (
    <div className="bg-white pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Attualità
          </h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl text-gray-800">
              Se desiderate ricevere le ultime notizie, registratevi qui sotto.
            </p>
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          <Carousel
            opts={{
              align: 'start',
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-screen"
          >
            <CarouselContent>
              {articleGroups.map((group, index) => (
                <CarouselItem
                  key={index}
                  className={
                    isSmallScreen
                      ? ''
                      : 'min-w-0 shrink-0 grow-0 basis-full grid grid-cols-2 grid-rows-2 gap-4'
                  }
                >
                  {group.map((article: any) => (
                    <div key={article.title} className="cursor-pointer">
                      <Link href={`/news/${article.slug.current}`}>
                        <div>
                          <p className="text-sm text-gray-800">
                            <time dateTime={article.date}>{article.date}</time>
                          </p>

                          <div className="mt-2 block">
                            <p className="text-xl font-semibold text-gray-900">
                              {article.title}
                            </p>
                            <p className="mt-3 text-base text-gray-800">
                              {article.excerpt}
                            </p>
                          </div>

                          <div className="mt-3">
                            <div className="text-base font-semibold text-rose-900 hover:text-rose-800">
                              Read full story
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
