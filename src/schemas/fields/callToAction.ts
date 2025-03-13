import { FiAlertOctagon } from 'react-icons/fi';
import { defineField } from 'sanity';

import { CallToAction } from '../../components/CallToAction';

export default defineField({
  title: 'Call To Action',
  name: 'callToAction',
  type: 'object',
  description: 'CTA button that will redirect to the link provided.',
  icon: FiAlertOctagon,
  fields: [
    defineField({
      title: 'Text',
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      label: 'label',
    },
  },
  components: {
    preview: CallToAction,
  },
});
