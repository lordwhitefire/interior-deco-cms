import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: Rule => Rule.required() })
    
  ],
  preview: { select: { title: 'name', media: 'picture' } }
})