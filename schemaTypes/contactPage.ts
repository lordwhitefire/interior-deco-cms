import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      initialValue: 'contact'
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
      name: 'infoEyebrow',
      title: 'Info Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'infoTitle',
      title: 'Info Title',
      type: 'string'
    }),
    defineField({
      name: 'infoDescription',
      title: 'Info Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string'
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string'
    }),
    defineField({
      name: 'addressLines',
      title: 'Address Lines',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'hoursLines',
      title: 'Hours Lines',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Map Embed URL',
      type: 'url'
    }),
    defineField({
      name: 'workEyebrow',
      title: 'Work CTA Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'workTitle',
      title: 'Work CTA Title',
      type: 'string'
    }),
    defineField({
      name: 'workDescription',
      title: 'Work CTA Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'workCtaLabel',
      title: 'Work CTA Label',
      type: 'string'
    }),
    defineField({
      name: 'workCtaImage',
      title: 'Work CTA Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'workCtaImageAlt',
      title: 'Work CTA Image Alt',
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
    select: { title: 'infoTitle', subtitle: 'slug' }
  }
})
