// schemaTypes/button.ts
import {defineField, defineType} from 'sanity'

export const button = defineType({
  name: 'button',
  type: 'object',
  title: 'Button',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      label: 'label',
      url: 'url'
    },
    prepare: ({label, url}) => ({
      title: label,
      subtitle: url
    })
  }
})