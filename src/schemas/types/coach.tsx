import React from 'react';
import { defineField, defineType, type PreviewConfig } from 'sanity';

export default defineType({
  title: 'Coach',
  name: 'coach',
  type: 'document',
  readOnly: true,
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: "This should be the unique slug from the coach's profile.",
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Picture Link',
      name: 'pictureLink',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      pictureLink: 'pictureLink',
    },
    prepare({ name, pictureLink }) {
      return {
        title: name,
        media: <img src={pictureLink} alt="" />,
      };
    },
  } satisfies PreviewConfig<
    Record<string, string>,
    { name?: string; pictureLink?: string }
  >,
});
