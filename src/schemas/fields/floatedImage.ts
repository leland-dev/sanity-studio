import { type ReactNode } from 'react';
import { TbFloatLeft } from 'react-icons/tb';
import { defineField } from 'sanity';

export default defineField({
  title: 'Floated Image',
  name: 'floatedImage',
  type: 'object',
  description:
    'This image will be wrapped and appear to the right or left (depending on `float` setting) of the text immediately following it.',
  icon: TbFloatLeft,
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'lelandImage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Float',
      name: 'float',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      image: 'image',
      float: 'float',
    },
    prepare({
      image,
      float,
    }: {
      image?: ReactNode & { alt?: string };
      float?: string;
    }) {
      return {
        title: image?.alt,
        subtitle: `Float ${float}`,
        media: image,
      };
    },
  },
  validation: (Rule) => Rule.required(),
});
