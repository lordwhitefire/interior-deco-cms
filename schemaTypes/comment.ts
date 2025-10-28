// sanity/schemaTypes/comment.ts
// This is the FIRST file we create – it defines the shape of every comment/reply/like in Sanity.

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required().min(1).max(5000),
    }),
    defineField({
      name: 'name',
      title: 'Author name',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(120),
    }),
    defineField({
      name: 'email',
      title: 'Author email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'post',
      title: 'Blog post',
      type: 'reference',
      to: [{ type: 'post' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'parent',
      title: 'Parent comment (for replies)',
      type: 'reference',
      to: [{ type: 'comment' }],
      // null = top-level comment
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'likes',
      title: 'Like count',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'likedBy',
      title: 'Who liked this',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'sessionId',
              title: 'Session ID',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      message: 'message',
      post: 'post.title',
    },
    prepare({ name, message, post }) {
      return {
        title: `${name} on “${post}”`,
        subtitle: message?.slice(0, 100),
      }
    },
  },
})