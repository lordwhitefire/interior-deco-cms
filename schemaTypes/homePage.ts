import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      initialValue: 'home'
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
      name: 'primaryCtaLabel',
      title: 'Primary CTA Label',
      type: 'string'
    }),
    defineField({
      name: 'primaryCtaHref',
      title: 'Primary CTA Href',
      type: 'string'
    }),
    defineField({
      name: 'showreelLabel',
      title: 'Showreel Label',
      type: 'string'
    }),
    defineField({
      name: 'showreelHref',
      title: 'Showreel Href',
      type: 'string'
    }),
    defineField({
      name: 'servicesEyebrow',
      title: 'Services Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Services Title',
      type: 'string'
    }),
    defineField({
      name: 'studioEyebrow',
      title: 'Studio Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'studioTitle',
      title: 'Studio Title',
      type: 'string'
    }),
    defineField({
      name: 'studioBody',
      title: 'Studio Body',
      type: 'text',
      rows: 5
    }),
    defineField({
      name: 'studioCtaLabel',
      title: 'Studio CTA Label',
      type: 'string'
    }),
    defineField({
      name: 'studioCtaHref',
      title: 'Studio CTA Href',
      type: 'string'
    }),
    defineField({
      name: 'clientsEyebrow',
      title: 'Clients Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'clientsTitle',
      title: 'Clients Title',
      type: 'string'
    }),
    defineField({
      name: 'brandsEyebrow',
      title: 'Brands Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'testimonialsEyebrow',
      title: 'Testimonials Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'testimonialsTitle',
      title: 'Testimonials Title',
      type: 'string'
    }),
    defineField({
      name: 'projectsEyebrow',
      title: 'Projects Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'projectsTitle',
      title: 'Projects Title',
      type: 'string'
    }),
    defineField({
      name: 'projectsCtaLabel',
      title: 'Projects CTA Label',
      type: 'string'
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'icon', title: 'Icon', type: 'string' })
          ]
        }
      ]
    }),
    defineField({
      name: 'articlesEyebrow',
      title: 'Articles Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'articlesTitle',
      title: 'Articles Title',
      type: 'string'
    }),
    defineField({
      name: 'articlesCtaLabel',
      title: 'Articles CTA Label',
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
    select: { title: 'heroTitle' }
  }
})
