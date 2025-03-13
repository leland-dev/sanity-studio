import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: `Displayed as an option in the goal dropdown menu in the Library nav & as the page title on the category specific Library section`,
      readOnly: true,
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      title: 'Goal',
      name: 'goal',
      type: 'reference',
      to: { type: 'goal' },
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: true,
      },
      readOnly: true,
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 4,
      validation: (Rule) =>
        Rule.required().max(150).regex(/\n/, {
          invert: true,
          name: 'includes-newlines',
        }),
      description:
        "Shown on this category's specific Library page; also that page's meta description",
    }),
  ],
});
