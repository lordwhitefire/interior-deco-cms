import { defineField, defineType } from 'sanity'

export const newsletterSubscriber = defineType({
  name: 'newsletterSubscriber',
  title: 'Newsletter Subscriber',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime'
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      options: {
        list: [{ title: 'Home newsletter', value: 'home-newsletter' }]
      }
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Subscribed', value: 'subscribed' },
          { title: 'Unsubscribed', value: 'unsubscribed' }
        ]
      },
      initialValue: 'subscribed'
    }),
    defineField({
      name: 'consent',
      title: 'Consent Given',
      type: 'boolean',
      initialValue: true
    })
  ],
  preview: {
    select: { title: 'email', subtitle: 'submittedAt' }
  }
})