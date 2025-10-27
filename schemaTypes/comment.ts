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
      description: "Parent comment if this is a reply",
    }),
    defineField({ 
      name: "name", 
      type: "string", 
      validation: (Rule) => Rule.required() 
    }),
    defineField({ 
      name: "email", 
      type: "string", 
      validation: (Rule) => Rule.required() 
    }),
    defineField({ 
      name: "website", 
      type: "url" 
    }),
    defineField({ 
      name: "message", 
      type: "text", 
      validation: (Rule) => Rule.required() 
    }),
    defineField({ 
      name: "likes", 
      type: "number", 
      initialValue: 0 
    }),
    defineField({ 
      name: "approved", 
      type: "boolean", 
      initialValue: true 
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: "Newest",
      name: "newest",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
    {
      title: "Oldest",
      name: "oldest",
      by: [{ field: "_createdAt", direction: "asc" }],
    },
    {
      title: "Most Likes",
      name: "likesDesc",
      by: [{ field: "likes", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      name: "name",
      message: "message",
      post: "post.title",
      approved: "approved",
      likes: "likes",
    },
    prepare({ name, message, post, approved, likes }) {
      return {
        title: `${name} on ${post}`,
        subtitle: `${message.slice(0, 50)}${message.length > 50 ? "…" : ""} ${!approved ? "⏳" : ""} ${likes > 0 ? `❤️ ${likes}` : ""}`,
      };
    },
  },
});