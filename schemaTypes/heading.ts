// schemaTypes/heading.ts
import {defineField, defineType} from 'sanity'

export const heading = defineType({
  name: 'heading',
  type: 'object',
  title: 'Heading',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'level',
      type: 'number',
      title: 'Level',
      options: {
        list: [1, 2, 3, 4, 5, 6],
        layout: 'radio'
      },
      initialValue: 2,
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      text: 'text',
      level: 'level'
    },
    prepare: ({text, level}) => ({
      title: `${'#' .repeat(level)} ${text}`
    })
  }
})