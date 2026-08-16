import { defineField, defineType } from 'sanity'

export const blogCategory = defineType({
  name: 'blogCategory',
  title: 'Blog Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string'
    }),
    defineField({
      name: 'count',
      title: 'Article Count',
      type: 'number'
    })
  ],
  preview: {
    select: { title: 'name', subtitle: 'slug' }
  }
})
