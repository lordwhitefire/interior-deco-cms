import { defineField, defineType } from 'sanity'


// schemaTypes/stylish.ts
export const stylish = defineType({
  name: 'stylish',
  title: 'Stylish Section',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'description', type: 'text',   rows: 3, validation: Rule => Rule.required() }),
    defineField({ name: 'images',      type: 'array',  of: [{ type: 'image', options: { hotspot: true } }] })
  ],
  preview: { select: { title: 'title', subtitle: 'description' } }
})