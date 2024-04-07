import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SanityDocument } from 'next-sanity'

import { client } from '@/sanity/lib/client'
import Header from '@/components/Header'
import Title from '@/components/Title'
import NewsCards from '@/components/NewsCards'
import Footer from '@/components/Footer'

const EVENTS_QUERY = `*[]`

export default function IndexPage() {
  const [events, setEvents] = useState<SanityDocument[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      const fetchedEvents = await client.fetch<SanityDocument[]>(EVENTS_QUERY)
      setEvents(fetchedEvents)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <Header />
      <Title title='Notizie' />
      <NewsCards articles={events} />
      <Footer />
    </div>
  )
}
