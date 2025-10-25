// schemaTypes/blogCard.ts
import { defineField, defineType } from "sanity"

export const blogCard = defineType({
  name: "blogCard",
  title: "Blog Card",
  type: "document",
  fields: [
    defineField({ name: "title",       type: "string",  validation: Rule => Rule.required() }),
    defineField({ name: "slug",        type: "slug",    options: { source: "title", maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: "excerpt",     type: "text",    rows: 3,  validation: Rule => Rule.required() }),
    defineField({ name: "publishDate", type: "date",    validation: Rule => Rule.required() }),
    defineField({ name: "readTime",    type: "string",  initialValue: "5 min read" }),
    defineField({ name: "category",    type: "reference", to: [{ type: "category" }] }),
    defineField({ name: "tags",        type: "array",   of: [{ type: "reference", to: [{ type: "tag" }] }] }),
    defineField({ name: "author",      type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "coverImage",  type: "image",   options: { hotspot: true }, validation: Rule => Rule.required() }),
    defineField({ name: "featured",    type: "boolean", initialValue: false })
  ],
  preview: {
    select: { title: "title", subtitle: "publishDate", media: "coverImage" }
  }
})
