// schemaTypes/image.ts
import {defineField, defineType} from 'sanity'

export const customImage = defineType({
  name: 'customImage',
  type: 'object',
  title: 'Image',
  fields: [
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
      asset: 'asset',
      alt: 'alt'
    },
    prepare: ({asset, alt}) => ({
      title: alt || 'Image',
      media: asset
    })
  }
})