import { BsCardText } from 'react-icons/bs';
import { defineField } from 'sanity';

export default defineField({
  title: 'Text Callout',
  name: 'textCallout',
  type: 'object',
  description: 'A styled text block for longer text content',
  icon: BsCardText,
  fields: [
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
  },
});
