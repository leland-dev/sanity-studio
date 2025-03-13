import { FaQuoteLeft } from 'react-icons/fa';
import { defineField } from 'sanity';

export default defineField({
  title: 'Quote Callout',
  name: 'quoteCallout',
  type: 'object',
  description: 'A block quote with attribution',
  icon: FaQuoteLeft,
  fields: [
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Source',
      name: 'source',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'source',
    },
  },
});
