import { defineField, defineType } from "sanity";

export const comment = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "post",
      type: "reference",
      to: [{ type: "blogDetail" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "parent",
      type: "reference",
      to: [{ type: "comment" }],
    }),
    defineField({ name: "name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "email", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "website", type: "url" }),
    defineField({ name: "message", type: "text", validation: (Rule) => Rule.required() }),
    defineField({ name: "likes", type: "number", initialValue: 0 }),
    defineField({ name: "approved", type: "boolean", initialValue: true }),
  ],
  orderings: [
    {
      title: "Newest",
      name: "newest",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      name: "name",
      message: "message",
      post: "post.title",
    },
    prepare({ name, message, post }) {
      return {
        title: `${name} on ${post}`,
        subtitle: message.slice(0, 50) + (message.length > 50 ? "…" : ""),
      };
    },
  },
});