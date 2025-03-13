import { ImPagebreak } from 'react-icons/im';
import { defineField } from 'sanity';

import TextBreak from '../../components/TextBreak';

export default defineField({
  name: 'textBreak',
  type: 'object',
  title: 'Break',
  icon: ImPagebreak,
  fields: [
    defineField({
      name: 'style',
      type: 'string',
      options: {
        list: ['hr'],
        layout: 'radio',
      },
      initialValue: 'hr',
    }),
  ],
  readOnly: true,
  components: {
    preview: TextBreak,
  },
});
