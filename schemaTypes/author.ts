// schemaTypes/author.ts
import { defineField, defineType } from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: Rule => Rule.required() })
  ],
  preview: { select: { title: 'name' } }
})