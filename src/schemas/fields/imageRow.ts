import { type ReactNode } from 'react';
import { TbArrowAutofitContent } from 'react-icons/tb';
import { defineArrayMember, defineField } from 'sanity';

export default defineField({
  title: 'Image Row',
  name: 'imageRow',
  type: 'object',
  description:
    'A selection of 1-3 images that will be displayed across the full width of the article',
  icon: TbArrowAutofitContent,
  fields: [
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [defineArrayMember({ type: 'lelandImage' })],
      validation: (Rule) => Rule.min(1).max(3),
    }),
  ],
  preview: {
    select: {
      images: 'images',
      image: 'images.0',
    },
    prepare({ images, image }: { images?: ReactNode[]; image?: ReactNode }) {
      return {
        title:
          Object.keys(images ?? {}).length === 1
            ? 'Single Image'
            : `Row of ${Object.keys(images ?? {}).length} images`,
        subtitle: '(spans full width of article)',
        media: image,
      };
    },
  },
  validation: (Rule) => Rule.required(),
});
