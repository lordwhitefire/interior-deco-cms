import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      initialValue: 'about'
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string'
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
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
      name: 'heroCtaLabel',
      title: 'Hero CTA Label',
      type: 'string'
    }),
    defineField({
      name: 'heroCtaHref',
      title: 'Hero CTA Href',
      type: 'string'
    }),
    defineField({
      name: 'storyEyebrow',
      title: 'Story Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'storyTitle',
      title: 'Story Title',
      type: 'string'
    }),
    defineField({
      name: 'storyParagraphs',
      title: 'Story Paragraphs',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'storyImage',
      title: 'Story Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'storyImageAlt',
      title: 'Story Image Alt',
      type: 'string'
    }),
    defineField({
      name: 'valuesEyebrow',
      title: 'Values Eyebrow',
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
      name: 'approachEyebrow',
      title: 'Approach Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'approachTitle',
      title: 'Approach Title',
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
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 })
          ]
        }
      ]
    }),
    defineField({
      name: 'approachImage',
      title: 'Approach Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'approachImageAlt',
      title: 'Approach Image Alt',
      type: 'string'
    }),
    defineField({
      name: 'closingEyebrow',
      title: 'Closing Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'closingTitle',
      title: 'Closing Title',
      type: 'string'
    }),
    defineField({
      name: 'closingDescription',
      title: 'Closing Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'closingImage',
      title: 'Closing Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'closingImageAlt',
      title: 'Closing Image Alt',
      type: 'string'
    }),
    defineField({
      name: 'closingCtaLabel',
      title: 'Closing CTA Label',
      type: 'string'
    }),
    defineField({
      name: 'closingCtaHref',
      title: 'Closing CTA Href',
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
    select: { title: 'heroTitle', subtitle: 'slug' }
  }
})
