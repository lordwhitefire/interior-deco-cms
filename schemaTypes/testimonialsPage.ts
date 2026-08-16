import { defineField, defineType } from 'sanity'

export const testimonialsPage = defineType({
  name: 'testimonialsPage',
  title: 'Testimonials Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      initialValue: 'testimonials'
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title (lines)',
      type: 'array',
      of: [{ type: 'string' }]
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
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon', type: 'string' }),
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' })
          ]
        }
      ]
    }),
    defineField({
      name: 'ctaEyebrow',
      title: 'CTA Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string'
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string'
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Href',
      type: 'string'
    }),
    defineField({
      name: 'ctaImage',
      title: 'CTA Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'ctaImageAlt',
      title: 'CTA Image Alt',
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
