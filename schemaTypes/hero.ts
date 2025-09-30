import { defineField, defineType } from 'sanity'

// schemaTypes/hero.ts
export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'subtitle',    type: 'string', validation: Rule => Rule.required() }),
    defineField({
      name: 'images',
      title: 'Background Images (carousel)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: Rule => Rule.required().min(1).max(8)
    })
  ],
  preview: {
    select: { title: 'title', subtitle: 'subtitle', media: 'images.0' }
  }
})