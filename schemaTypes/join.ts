import { defineField, defineType } from 'sanity'

export const join = defineType({
  name: 'join',
  title: 'Join Section',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subline',
      title: 'Sub-line',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'placeholder',
      title: 'Email Placeholder',
      type: 'string',
      initialValue: 'Enter your email'
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Join Now'
    }),
    defineField({
      name: 'privacy',
      title: 'Privacy Note',
      type: 'string',
      initialValue: 'No spam, unsubscribe anytime.'
    }),
    defineField({
      name: 'successMsg',
      title: 'Success Message',
      type: 'string',
      initialValue: 'Welcome! Check your inbox for confirmation.'
    })
  ],
  preview: {
    select: { title: 'headline', subtitle: 'subline' }
  }
})