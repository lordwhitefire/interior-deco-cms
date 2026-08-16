import { defineField, defineType } from 'sanity'

export const faqCategory = defineType({
  name: 'faqCategory',
  title: 'FAQ Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number'
    }),
    defineField({
      name: 'isProjectRelated',
      title: 'Project Related',
      type: 'boolean',
      initialValue: false
    })
  ],
  preview: {
    select: { title: 'title' }
  }
})
