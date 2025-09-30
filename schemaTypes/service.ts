import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: { title: 'name', subtitle: 'description' }
  }
})