import { type ReactNode } from 'react';
import { BsDownload } from 'react-icons/bs';
import { defineField, type PreviewConfig } from 'sanity';

export default defineField({
  title: 'Asset Download',
  name: 'assetDownload',
  type: 'object',
  description: 'This is a download link for an asset.',
  icon: BsDownload,
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'lelandImage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      title: 'SEO Resource',
      name: 'seoResource',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      image: 'image',
      title: 'title',
      description: 'description',
    },
    prepare({ image, title, description }) {
      return {
        title,
        subtitle: description,
        media: image,
      };
    },
  } satisfies PreviewConfig<
    Record<string, string>,
    { image?: ReactNode; title?: string; description?: string }
  >,
});
