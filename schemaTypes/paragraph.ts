// schemaTypes/paragraph.ts
import {defineField, defineType} from 'sanity'

export const paragraph = defineType({
  name: 'paragraph',
  type: 'object',
  title: 'Paragraph',
  fields: [
    defineField({
      name: 'text',
      type: 'text',
      title: 'Text',
      rows: 4,
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {text: 'text'},
    prepare: ({text}) => ({
      title: text?.slice(0, 80) + (text && text.length > 80 ? '…' : '')
    })
  }
})