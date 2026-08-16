import { defineField, defineType } from 'sanity'

export const teamPage = defineType({
  name: 'teamPage',
  title: 'Team Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      initialValue: 'team'
    }),
    defineField({
      name: 'introEyebrow',
      title: 'Intro Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'introTitle',
      title: 'Intro Title',
      type: 'string'
    }),
    defineField({
      name: 'introDescription',
      title: 'Intro Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Hero Image Alt',
      type: 'string'
    }),
    defineField({
      name: 'valuesTitle',
      title: 'Values Title',
      type: 'string'
    }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 })
          ]
        }
      ]
    }),
    defineField({
      name: 'profileHeadline',
      title: 'Profile Headline',
      type: 'string'
    }),
    defineField({
      name: 'profileParagraphs',
      title: 'Profile Paragraphs',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'profileFacts',
      title: 'Profile Facts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon', type: 'string' }),
            defineField({ name: 'key', title: 'Key', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'values', title: 'Values', type: 'array', of: [{ type: 'string' }] })
          ]
        }
      ]
    }),
    defineField({
      name: 'approachHeadline',
      title: 'Approach Headline',
      type: 'string'
    }),
    defineField({
      name: 'approachDescription',
      title: 'Approach Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'approachSteps',
      title: 'Approach Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 })
          ]
        }
      ]
    }),
    defineField({
      name: 'consultationEyebrow',
      title: 'Consultation Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'consultationTitle',
      title: 'Consultation Title',
      type: 'string'
    }),
    defineField({
      name: 'consultationDescription',
      title: 'Consultation Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'consultationLabel',
      title: 'Consultation CTA Label',
      type: 'string'
    }),
    defineField({
      name: 'consultationHref',
      title: 'Consultation CTA Href',
      type: 'string'
    }),
    defineField({
      name: 'consultationImage',
      title: 'Consultation Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'consultationImageAlt',
      title: 'Consultation Image Alt',
      type: 'string'
    }),
    defineField({
      name: 'projectCtaEyebrow',
      title: 'Project CTA Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'projectCtaTitle',
      title: 'Project CTA Title',
      type: 'string'
    }),
    defineField({
      name: 'projectCtaDescription',
      title: 'Project CTA Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'projectCtaLabel',
      title: 'Project CTA Label',
      type: 'string'
    }),
    defineField({
      name: 'projectCtaHref',
      title: 'Project CTA Href',
      type: 'string'
    }),
    defineField({
      name: 'projectCtaImage',
      title: 'Project CTA Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'projectCtaImageAlt',
      title: 'Project CTA Image Alt',
      type: 'string'
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string'
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3
    })
  ],
  preview: {
    select: { title: 'introTitle', subtitle: 'slug' }
  }
})
