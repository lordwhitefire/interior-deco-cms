import { defineField, defineType } from 'sanity'

export const faqPage = defineType({
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string'
    }),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'generalFaqsTitle',
      title: 'General FAQs Title',
      type: 'string'
    }),
    defineField({
      name: 'projectFaqsTitle',
      title: 'Project FAQs Title',
      type: 'string'
    }),
    defineField({
      name: 'sidebarImage',
      title: 'Sidebar Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'sidebarImageAlt',
      title: 'Sidebar Image Alt',
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
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string'
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3
    })
  ],
  preview: {
    select: { title: 'title' }
  }
})
