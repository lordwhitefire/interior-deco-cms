import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: Rule => Rule.required() }),
    defineField({ name: 'color', type: 'string', title: 'Chip Colour', description: 'hex or tailwind class' })
  ],
  preview: { select: { title: 'title' } }
})