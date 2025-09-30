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
      type: 'text'
    }),
    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', type: 'string', title: 'Platform' }),
          defineField({ name: 'url', type: 'url', title: 'URL' })
        ]
      }]
    }),
    defineField({
      name: 'companyLinks',
      title: 'Company Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', type: 'string', title: 'Label' }),
          defineField({ name: 'url', type: 'string', title: 'Internal Path' })
        ]
      }]
    }),
    defineField({
      name: 'servicesLinks',
      title: 'Services Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', type: 'string', title: 'Label' }),
          defineField({ name: 'url', type: 'string', title: 'Internal Path' })
        ]
      }]
    }),
    defineField({
      name: 'contactLinks',
      title: 'Contact Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', type: 'string', title: 'Label' }),
          defineField({ name: 'url', type: 'string', title: 'URL/Email/Tel' }),
          defineField({ 
            name: 'icon', 
            type: 'string',
            options: {
              list: [
                { title: 'Mail', value: 'Mail' },
                { title: 'Phone', value: 'Phone' },
                { title: 'MapPin', value: 'MapPin' }
              ]
            }
          })
        ]
      }]
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Line',
      type: 'string'
    }),
    defineField({
      name: 'legal',
      title: 'Legal Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', type: 'string', title: 'Label' }),
          defineField({ name: 'url', type: 'string', title: 'Internal Path' })
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