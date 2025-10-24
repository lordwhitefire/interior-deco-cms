// schemaTypes/serviceCard.ts
import { defineField, defineType } from 'sanity'

export const serviceCard = defineType({
  name: 'serviceCard',
  title: 'Service Card',
  type: 'document',
  fields: [
    /* -------  existing card fields (unchanged)  ------- */
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
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'shortDesc',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required().max(160)
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required().min(1)
    }),

    /* -------  new detail-page fields  ------- */
    defineField({
      name: 'trendHeader',
      title: 'Set-The-Trend Header',
      type: 'string',
      description: 'Left-side headline in the trend section'
    }),
    defineField({
      name: 'trendParagraphs',
      title: 'Set-The-Trend Paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 3 }],
      description: '3 short paragraphs (right-side)'
    }),
    defineField({
      name: 'videoUrl',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'Just the ID: e.g. dQw4w9WgXcQ'
    }),
    defineField({
      name: 'videoPoster',
      title: 'Video Poster Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'interiorHeadline',
      title: 'Interior Section Headline',
      type: 'string'
    }),
    defineField({
      name: 'interiorText',
      title: 'Interior Section Body',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'interiorGallery',
      title: 'Interior Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true }
        }
      ]
    }),
    defineField({
      name: 'loveDesignHeadline',
      title: 'Love-Design Headline',
      type: 'string'
    }),
    defineField({
      name: 'loveDesignText',
      title: 'Love-Design Body',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'loveDesignImages',
      title: 'Love-Design Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    })
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }]
    }
  ],
  preview: {
    select: { title: 'title', order: 'displayOrder' },
    prepare({ title, order }) {
      return { title: `${order}. ${title}` }
    }
  }
})