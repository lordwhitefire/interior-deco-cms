import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5)
    }),
    defineField({
      name: 'text',
      title: 'Quote',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'project',
      title: 'Project',
      type: 'string'
    }),
    defineField({
      name: 'verified',
      title: 'Verified',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true }
    })
  ],
  preview: {
    select: { title: 'name', subtitle: 'text', media: 'image' }
  }
})