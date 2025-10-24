// schemaTypes/howWeWork.ts
import { defineField, defineType } from 'sanity'

export const step = defineType({
  name: 'step',
  title: 'Step',
  type: 'object',
  fields: [
    defineField({ name: 'number', title: 'Number', type: 'string', initialValue: '01' }),
    defineField({
      name: 'icon',
      title: 'Iconify Class',
      type: 'string',
      initialValue: 'icon-[icon-park-twotone--concept-sharing]',
      validation: Rule => Rule.required()
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } })
  ]
})

export const howWeWork = defineType({
  name: 'howWeWork',
  title: 'How We Work',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Our 4-Step Journey' }),
    defineField({ name: 'intro', title: 'Intro Paragraph', type: 'text', rows: 3 }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{ type: 'step' }],
      validation: Rule => Rule.required().min(4).max(4)
    })
  ]
})