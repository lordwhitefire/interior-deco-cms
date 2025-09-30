import { defineField, defineType } from 'sanity'

export const stat = defineType({
  name: 'stat',
  title: 'Success Stat',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'number',
      title: 'Number (as string)',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
      initialValue: ''
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: ['Calendar', 'Briefcase', 'Users', 'Star']
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'color',
      title: 'Gradient Tailwind Class',
      type: 'string',
      initialValue: 'from-blue-500 to-blue-600'
    })
  ],
  preview: {
    select: { title: 'label', subtitle: 'number', media: 'icon' }
  }
})