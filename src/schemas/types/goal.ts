import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Goal',
  name: 'goal',
  type: 'document',
  readOnly: true,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Displayed as a dropdown menu in the Library nav',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
