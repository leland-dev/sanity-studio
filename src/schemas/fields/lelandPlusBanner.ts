import { defineField } from 'sanity';

export default defineField({
  title: 'Leland Plus Banner',
  name: 'lelandPlusBanner',
  type: 'object',
  description: 'Insert a Leland Plus Banner at this location',
  fields: [
    defineField({
      name: 'thisFieldIsNotUsed',
      type: 'string',
      initialValue: 'A lelandPlusBanner is inserted here',
      hidden: true,
    }),
  ],
});
