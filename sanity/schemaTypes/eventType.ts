import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,

  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'headline',
      type: 'reference',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})

export default eventType
