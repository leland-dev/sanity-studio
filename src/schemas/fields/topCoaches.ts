import { BsPersonCircle } from 'react-icons/bs';
import { defineField } from 'sanity';

export default defineField({
  title: 'Top Coaches',
  name: 'topCoaches',
  type: 'object',
  description: 'A dynamic list of the top coaches in a given category',
  icon: BsPersonCircle,
  fields: [
    defineField({
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: { type: 'category' },
      options: {
        disableNew: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      categoryTitle: 'category.title',
    },
    prepare({ categoryTitle }) {
      return {
        title: `Top ${categoryTitle ? `${categoryTitle} ` : ''}Coaches`,
        media: BsPersonCircle,
      };
    },
  },
  validation: (Rule) => Rule.required(),
});
