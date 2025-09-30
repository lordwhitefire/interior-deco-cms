import { defineField, defineType } from 'sanity'

export const client = defineType({
  name: 'client',
  title: 'Client Logo',
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
      title: 'Client Name',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Logo SVG',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: { title: 'name', media: 'logo' }
  }
})