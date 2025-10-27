// schemaTypes/blogPage.ts
import { defineField, defineType } from "sanity"

export const blogPage = defineType({
  name: "blogPage",
  title: "Blog Page",
  type: "document",
  fields: [
    defineField({ 
      name: "title", 
      type: "string", 
      validation: Rule => Rule.required() 
    }),
    defineField({ 
      name: "heroBackgroundImage", 
      type: "image", 
      options: { hotspot: true } 
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [{ type: "heading" }]
    }),
    // NEW: heading + paragraph for the Articles & News section
    defineField({ 
      name: "articlesTitle", 
      type: "string", 
      title: "Articles Section Title",
      validation: Rule => Rule.required()
    }),
    defineField({ 
      name: "articlesParagraph", 
      type: "text", 
      rows: 3,
      title: "Articles Section Paragraph",
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: { title: "title" }
  }
})