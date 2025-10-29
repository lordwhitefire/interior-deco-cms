// sanity/schemaTypes/comment.ts
import { defineType, defineField } from "sanity";

export const comment = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "post",
      title: "Post",
      type: "reference",
      to: [{ type: "blogDetail" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "parent",
      title: "Parent Comment",
      type: "reference",
      to: [{ type: "comment" }],
      options: { disableNew: true },
    }),
    // REMOVED: likes field — use count(likedBy) instead
    defineField({
      name: "likedBy",
      title: "Liked By",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "session" }],
        },
      ],
    }),
    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "message",
    },
  },
});