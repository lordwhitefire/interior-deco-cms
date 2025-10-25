// schemaTypes/blogPage.ts
import { defineField, defineType } from "sanity"
import { heading } from "./heading"

export const blogPage = defineType({
  name: "blogPage",
  title: "Blog Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: Rule => Rule.required() }),
    defineField({ name: "heroBackgroundImage", type: "image", options: { hotspot: true } }),
    defineField({
      name: "sections",
      type: "array",
      of: [{ type: "heading" }]
    })
  ],
  preview: {
    select: { title: "title" }
  }
})
