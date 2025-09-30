import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Featured Project',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string'
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'budget',
      title: 'Budget Label',
      type: 'string'
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string'
    }),
    defineField({
      name: 'link',
      title: 'Internal Link',
      type: 'string'
    })
  ],
  preview: {
    select: { title: 'title', subtitle: 'type', media: 'image' }
  }
})