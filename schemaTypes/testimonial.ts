import { defineField, defineType } from 'sanity'

export const testimonials = defineType({
  name: 'testimonials',
  title: 'Testimonials Section',
  type: 'document',
  fields: [
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'location', type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'rating', type: 'number', validation: Rule => Rule.required().min(1).max(5) }),
          defineField({ name: 'text', type: 'text', rows: 4, validation: Rule => Rule.required() }),
          defineField({ name: 'project', type: 'string', validation: Rule => Rule.required() }),
          defineField({ name: 'verified', type: 'boolean', initialValue: true }),
          defineField({ 
            name: 'image', 
            type: 'image', 
            options: { hotspot: true },
            validation: Rule => Rule.required() 
          }),
        ]
      }]
    })
  ],
  preview: {
    select: {
      title: 'testimonials.0.name',
      subtitle: 'testimonials.0.text',
      media: 'testimonials.0.image'
    }
  }
})