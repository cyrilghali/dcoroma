import { useState, useEffect } from 'react'
import { SanityDocument } from 'next-sanity'

import Header from '@/components/Header'
import Title from '@/components/Title'
import NewsCards from '@/components/NewsCards'
import Footer from '@/components/Footer'
import getClient from '@/lib/sanity.client'
import { readToken } from '@/lib/sanity.api'

const EVENTS_QUERY = `*[]`

export default function IndexPage() {
  const [events, setEvents] = useState<SanityDocument[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      const client = getClient(undefined)
      const fetchedEvents = await client.fetch<SanityDocument[]>(EVENTS_QUERY)
      setEvents(fetchedEvents)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <Header />
      <Title title="Notizie" />
      <NewsCards articles={events} />
      <Footer />
    </div>
  )
}
