// schemaTypes/image.ts
import {defineField, defineType} from 'sanity'

export const customImage = defineType({
  name: 'customImage',
  type: 'object',
  title: 'Image',
  fields: [
    defineField({
      name: 'key',
      type: 'string',
      title: 'Key',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'asset',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text'
    })
  ],
  preview: {
    select: {
      key: 'key',
      asset: 'asset',
      alt: 'alt'
    },
    prepare: ({key, asset, alt}) => ({
      title: `${key}: ${alt || 'Image'}`,
      media: asset
    })
  }
})