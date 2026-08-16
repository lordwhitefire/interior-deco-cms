import { defineField, defineType } from 'sanity'

export const servicePage = defineType({
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'cardNumber',
      title: 'Card Number',
      type: 'string'
    }),
    defineField({
      name: 'cardDescription',
      title: 'Card Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: Rule => Rule.required()
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
      name: 'secondaryCtaLabel',
      title: 'Secondary CTA Label',
      type: 'string'
    }),
    defineField({
      name: 'secondaryCtaHref',
      title: 'Secondary CTA Href',
      type: 'string'
    }),
    defineField({
      name: 'trust',
      title: 'Trust Points',
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
      name: 'process',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon', type: 'string' }),
            defineField({ name: 'number', title: 'Number', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 })
          ]
        }
      ]
    }),
    defineField({
      name: 'inclusions',
      title: 'Inclusions',
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
      name: 'inclusionsProject',
      title: 'Inclusions Project Slug',
      type: 'string'
    }),
    defineField({
      name: 'inclusionsImageAlt',
      title: 'Inclusions Image Alt',
      type: 'string'
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'projectPage' }] }]
    }),
    defineField({
      name: 'galleryHeading',
      title: 'Gallery Heading',
      type: 'string'
    }),
    defineField({
      name: 'galleryTitle',
      title: 'Gallery Title',
      type: 'string'
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
    select: { title: 'title', subtitle: 'slug' }
  }
})
