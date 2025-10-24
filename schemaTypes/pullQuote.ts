
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pullQuote',
  title: 'Pull Quote',
  type: 'object',
  fields: [
    defineField({ name: 'text', type: 'text', title: 'Quote Text', rows: 3, validation: Rule => Rule.required() })
  ],
  preview: { select: { title: 'text' } }
})