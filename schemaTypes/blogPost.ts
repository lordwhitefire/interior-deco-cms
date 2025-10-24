
// schemaTypes/blogPost.ts
import { defineField, defineType } from 'sanity'
import {heading} from './heading'
import {paragraph} from './paragraph'
import {customImage} from './image'
import {button} from './button'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string',  title: 'Title',        validation: Rule => Rule.required() }),
    defineField({ name: 'slug',        type: 'slug',    title: 'Slug',         options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'excerpt',     type: 'text',    title: 'Excerpt',      rows: 3, validation: Rule => Rule.required() }),
    defineField({ name: 'publishDate', type: 'date',    title: 'Publish Date', validation: Rule => Rule.required() }),
    defineField({ name: 'readTime',    type: 'string',  title: 'Read Time',    initialValue: '5 min read' }),
    defineField({ name: 'category',    type: 'reference', title: 'Category',   to: [{ type: 'category' }] }),
    defineField({ name: 'tags',        type: 'array',   title: 'Tags',         of: [{ type: 'reference', to: [{ type: 'tag' }] }] }),
    defineField({ name: 'author',      type: 'reference', title: 'Author',     to: [{ type: 'author' }] }),
    defineField({ name: 'coverImage',  type: 'image',   title: 'Cover Image',  options: { hotspot: true }, validation: Rule => Rule.required() }),
    defineField({ name: 'heroBackgroundImage', type: 'image', title: 'Hero Background Image (optional)', options: { hotspot: true } }),
    defineField({ name: 'featured',    type: 'boolean', title: 'Featured (Latest News)', initialValue: false }),
    defineField({ name: 'showComments',type: 'boolean', title: 'Show Comment Form', initialValue: true }),
    defineField({ name: 'metaTitle',   type: 'string',  title: 'SEO Title', description: 'Leave empty to use title' }),
    defineField({ name: 'metaDescription', type: 'text', title: 'SEO Description', rows: 3, description: 'Leave empty to use excerpt' }),
    defineField({ name: 'ogImage',     type: 'image',   title: 'Social Share Image', options: { hotspot: true } }),
    defineField({ name: 'quoteText',   type: 'text',    title: 'Pull-Quote Text', rows: 3 }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'heading' },
        { type: 'paragraph' },
        { type: 'customImage' },
        { type: 'button' },
        { type: 'pullQuote' }
      ]
    })
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishDate', media: 'coverImage' }
  }
})
