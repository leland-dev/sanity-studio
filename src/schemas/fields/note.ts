import { FaRegStickyNote } from 'react-icons/fa';
import { defineField } from 'sanity';

import { Note } from '../../components/Note';

export default defineField({
  title: 'Note',
  name: 'note',
  type: 'object',
  description: 'A styled short text callout',
  icon: FaRegStickyNote,
  fields: [
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Icon',
      name: 'image',
      type: 'lelandImage',
    }),
    defineField({
      title: 'Color',
      name: 'color',
      type: 'string',
      options: {
        list: [
          { title: 'Green', value: 'green' },
          { title: 'Grey', value: 'grey' },
        ],
        layout: 'radio',
      },
      initialValue: 'green',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      text: 'text',
      image: 'image.asset.url',
      color: 'color',
    },
  },
  components: {
    preview: Note,
  },
});
