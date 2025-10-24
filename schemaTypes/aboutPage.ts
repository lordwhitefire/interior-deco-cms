// aboutPage.ts
import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  options: {singleton: true},
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubText',
      title: 'Hero Sub-text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'quoteText',
      title: 'Quote Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quoteAuthor',
      title: 'Quote Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'teamGallery',
      title: 'Team Gallery',
      type: 'array',
      of: [{type: 'teamMember'}],
      validation: (Rule) => Rule.min(1).max(12),
    }),
    defineField({
      name: 'ctaHeadline',
      title: 'CTA Headline',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubText',
      title: 'CTA Sub-text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(160),
    }),
        //  ↓  ADD THIS BLOCK  ↓
    defineField({
      name: 'mailchimpTag',
      title: 'Mailchimp Tag',
      type: 'string',
      description: 'Sent to Mailchimp to segment this lead.',
      initialValue: 'project-lead',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heroHeadline',
      subtitle: 'seoTitle',
    },
  },
})