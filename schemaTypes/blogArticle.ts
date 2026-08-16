import { defineField, defineType } from 'sanity'

export const blogArticle = defineType({
  name: 'blogArticle',
  title: 'Blog Article',
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
      name: 'categoryName',
      title: 'Category Name',
      type: 'string'
    }),
    defineField({
      name: 'categorySlug',
      title: 'Category Slug',
      type: 'string'
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string'
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string'
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'image',
      title: 'Card Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'imageAlt',
      title: 'Card Image Alt',
      type: 'string'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'leadImage',
      title: 'Lead Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'intro',
      title: 'Intro Paragraphs',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'number', title: 'Number', type: 'number' }),
            defineField({ name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'string' }] }),
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: { hotspot: true },
                  fields: [defineField({ name: 'alt', title: 'Alt', type: 'string' })]
                }
              ]
            })
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
    select: { title: 'title', subtitle: 'categoryName' }
  }
})
