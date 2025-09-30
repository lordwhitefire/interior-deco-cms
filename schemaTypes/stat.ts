import { defineField, defineType } from 'sanity'

export const successStats = defineType({
  name: 'successStats',
  title: 'Success Statistics',
  type: 'document',
  fields: [
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ 
            name: 'id', 
            type: 'string', 
            validation: Rule => Rule.required() 
          }),
          defineField({ 
            name: 'number', 
            type: 'string', 
            validation: Rule => Rule.required() 
          }),
          defineField({ 
            name: 'suffix', 
            type: 'string' 
          }),
          defineField({ 
            name: 'label', 
            type: 'string', 
            validation: Rule => Rule.required() 
          }),
          defineField({ 
            name: 'icon', 
            type: 'string',
            options: {
              list: [
                { title: 'Calendar', value: 'Calendar' },
                { title: 'Briefcase', value: 'Briefcase' },
                { title: 'Users', value: 'Users' },
                { title: 'Star', value: 'Star' }
              ]
            },
            validation: Rule => Rule.required() 
          }),
          defineField({ 
            name: 'color', 
            type: 'string',
            options: {
              list: [
                { title: 'Blue Gradient', value: 'from-blue-500 to-blue-600' },
                { title: 'Green Gradient', value: 'from-green-500 to-green-600' },
                { title: 'Yellow Gradient', value: 'from-yellow-500 to-yellow-600' },
                { title: 'Purple Gradient', value: 'from-purple-500 to-purple-600' }
              ]
            },
            validation: Rule => Rule.required() 
          })
        ]
      }]
    })
  ],
  preview: {
    select: {
      title: 'stats.0.label',
      subtitle: 'stats.0.number'
    }
  }
})