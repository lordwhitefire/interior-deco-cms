// schemaTypes/service.ts
import { defineField, defineType } from 'sanity'

export const servicePage = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'shortDesc',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required().max(160)
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required().min(1)
    })
  ],
  orderings: [{
    title: 'Display Order',
    name: 'displayOrderAsc',
    by: [{ field: 'displayOrder', direction: 'asc' }]
  }],
  preview: {
    select: { title: 'title', order: 'displayOrder' },
    prepare({ title, order }) {
      return { title: `${order}. ${title}` }
    }
  }
})