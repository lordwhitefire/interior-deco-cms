import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'clientLocation',
      title: 'Client Location',
      type: 'string'
    }),
    defineField({
      name: 'clientImage',
      title: 'Client Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'review',
      title: 'Review',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.min(1).max(5)
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string'
    })
  ],
  preview: {
    select: { title: 'clientName', subtitle: 'clientLocation', media: 'clientImage' }
  }
})
