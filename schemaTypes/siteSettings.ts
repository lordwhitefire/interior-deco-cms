import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings / Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'description',
      title: 'Footer Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string', title: 'Platform' },
          { name: 'url', type: 'url', title: 'URL' }
        ]
      }]
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Line',
      type: 'string',
      initialValue: '© 2024 Interior Decorators Inc. All rights reserved.'
    }),
    defineField({
      name: 'legal',
      title: 'Legal Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'string', title: 'Label' },
          { name: 'url', type: 'string', title: 'Internal Path' }
        ]
      }]
    })
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    }
  }
})