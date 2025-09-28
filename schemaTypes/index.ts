import { defineType, defineField } from 'sanity'

export const schemaTypes = [
  // Banner Document - Complete data structure
  defineType({
    name: 'banner',
    title: 'Banner Content',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Banner Title',
        type: 'string',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'heroSection',
        title: 'Hero Section',
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            title: 'Hero Title',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'subtitle',
            title: 'Hero Subtitle',
            type: 'text',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'ctaText',
            title: 'Hero CTA Text',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'ctaLink',
            title: 'Hero CTA Link',
            type: 'string',
            validation: Rule => Rule.required()
          })
        ]
      }),
      defineField({
        name: 'services',
        title: 'Services',
        type: 'array',
        of: [
          defineType({
            name: 'service',
            title: 'Service',
            type: 'object',
            fields: [
              defineField({
                name: 'id',
                title: 'Service ID',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'name',
                title: 'Service Name',
                type: 'string',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'description',
                title: 'Service Description',
                type: 'text',
                validation: Rule => Rule.required()
              }),
              defineField({
                name: 'link',
                title: 'Service Link',
                type: 'string',
                validation: Rule => Rule.required()
              })
            ]
          })
        ],
        validation: Rule => Rule.required().min(3).max(3)
      }),
      defineField({
        name: 'stylishSection',
        title: 'Stylish Section',
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'description',
            title: 'Section Description',
            type: 'text',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'phoneLabel',
            title: 'Phone Label',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'ctaText',
            title: 'CTA Text',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'ctaLink',
            title: 'CTA Link',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'featureImage',
            title: 'Feature Image URL',
            type: 'url',
            description: 'Full URL to image in your GitHub repo',
            validation: Rule => Rule.required().uri({
              allowRelative: false,
              scheme: ['https']
            })
          })
        ]
      })
    ]
  })
]