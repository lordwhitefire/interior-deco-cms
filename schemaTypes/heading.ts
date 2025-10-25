// schemaTypes/heading.ts
import {defineField, defineType} from 'sanity'

export const heading = defineType({
  name: 'heading',
  type: 'object',
  title: 'Heading',
  fields: [
    defineField({
      name: 'key',
      type: 'string',
      title: 'Key',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: { key: 'key', text: 'text' },
    prepare: ({ key, text }) => ({ title: `${key}: ${text}` })
  }
})