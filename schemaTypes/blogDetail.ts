// schemaTypes/blogDetail.ts
import { defineField, defineType } from "sanity"
import { heading } from "./heading"
import { paragraph } from "./paragraph"
import { customImage } from "./image"
import { button } from "./button"

export const blogDetail = defineType({
  name: "blogDetail",
  title: "Blog Detail",
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
    defineField({ name: "heroBackgroundImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "ogImage",     type: "image",   options: { hotspot: true } }),
    defineField({ name: "metaTitle",   type: "string" }),
    defineField({ name: "metaDescription", type: "text", rows: 3 }),
    defineField({ name: "quoteText",   type: "text", rows: 3 }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        { type: "heading" },
        { type: "paragraph" },
        { type: "customImage" },
        { type: "button" },
        { type: "pullQuote" }
      ],
      validation: Rule => Rule.required().min(1)
    })
  ],
  preview: {
    select: { title: "title", subtitle: "publishDate", media: "coverImage" }
  }
})
