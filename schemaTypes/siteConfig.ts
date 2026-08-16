import { defineField, defineType } from 'sanity'

export const siteConfig = defineType({
  name: 'siteConfig',
  title: 'Site Config',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      initialValue: 'site-config'
    }),
    defineField({
      name: 'newsletterEyebrow',
      title: 'Newsletter Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'newsletterTitle',
      title: 'Newsletter Title',
      type: 'string'
    }),
    defineField({
      name: 'newsletterBody',
      title: 'Newsletter Body',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'newsletterPrivacyNote',
      title: 'Newsletter Privacy Note',
      type: 'string'
    }),
    defineField({
      name: 'philosophyEyebrow',
      title: 'Philosophy Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'philosophyTitle',
      title: 'Philosophy Title',
      type: 'string'
    }),
    defineField({
      name: 'philosophyBody',
      title: 'Philosophy Body',
      type: 'text',
      rows: 5
    }),
    defineField({
      name: 'philosophyHref',
      title: 'Philosophy Href',
      type: 'string'
    }),
    defineField({
      name: 'philosophyImage',
      title: 'Philosophy Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'philosophyImageAlt',
      title: 'Philosophy Image Alt',
      type: 'string'
    }),
    defineField({
      name: 'projectsCtaEyebrow',
      title: 'Projects CTA Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'projectsCtaTitle',
      title: 'Projects CTA Title',
      type: 'string'
    }),
    defineField({
      name: 'projectsCtaDescription',
      title: 'Projects CTA Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'servicesIntroEyebrow',
      title: 'Services Intro Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'servicesIntroTitle',
      title: 'Services Intro Title',
      type: 'string'
    }),
    defineField({
      name: 'servicesIntroDescription',
      title: 'Services Intro Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'servicesHeroEyebrow',
      title: 'Services Hero Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'servicesHeroTitle',
      title: 'Services Hero Title',
      type: 'string'
    }),
    defineField({
      name: 'servicesHeroDescription',
      title: 'Services Hero Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'servicesHeroCtaLabel',
      title: 'Services Hero CTA Label',
      type: 'string'
    }),
    defineField({
      name: 'servicesHeroCtaHref',
      title: 'Services Hero CTA Href',
      type: 'string'
    }),
    defineField({
      name: 'servicesHeroImage',
      title: 'Services Hero Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'servicesHeroImageAlt',
      title: 'Services Hero Image Alt',
      type: 'string'
    }),
    defineField({
      name: 'servicesCtaImage',
      title: 'Services CTA Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'blogHeroImage',
      title: 'Blog Hero Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'blogHeroAlt',
      title: 'Blog Hero Image Alt',
      type: 'string'
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'platform', title: 'Platform', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'url' })
          ]
        }
      ]
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
    select: { title: 'slug' }
  }
})
