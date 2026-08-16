import { defineField, defineType } from 'sanity'

export const projectPage = defineType({
  name: 'projectPage',
  title: 'Project',
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
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string'
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string'
    }),
    defineField({
      name: 'budget',
      title: 'Budget',
      type: 'string'
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string'
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'string'
    }),
    defineField({
      name: 'squareFootage',
      title: 'Square Footage',
      type: 'number'
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'process',
      title: 'Process',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'colorPalette',
      title: 'Color Palette',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'furniture',
      title: 'Furniture',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }]
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
    select: { title: 'title', subtitle: 'location', media: 'thumbnail' }
  }
})
