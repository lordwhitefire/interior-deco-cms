import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: Rule => Rule.required() }),
    defineField({ name: 'picture', type: 'image', title: 'Picture', options: { hotspot: true } })
  ],
  preview: { select: { title: 'name', media: 'picture' } }
})