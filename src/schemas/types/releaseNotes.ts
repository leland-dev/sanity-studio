import { defineField, defineType, type Slug } from 'sanity';

export default defineType({
  title: 'Release Notes',
  name: 'releaseNotes',
  type: 'document',
  groups: [
    {
      name: 'main',
      title: 'Main',
    },
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 4,
      validation: (Rule) =>
        Rule.required().max(220).regex(/\n/, {
          invert: true,
          name: 'includes-newlines',
        }),
      description:
        'This will be displayed in thumbnail links to these release notes and will also serve as the meta description.',
      group: 'main',
    }),
    defineField({
      title: 'Version',
      name: 'version',
      type: 'slug',
      description:
        'Note: Once published, this field will not be editable. This should come from the relevant app release number. Format: "vX.Y.Z"',
      validation: (Rule) =>
        Rule.required().custom<Slug>((version) => {
          if (!version?.current) return true;
          if (!/^v\d+\.\d+\.\d+$/.test(version.current)) {
            return 'Version must follow semver spec: "vX.Y.Z"';
          }

          return true;
        }),
      readOnly: ({ document }) => !!document?.firstPublishedAt,
      group: 'main',
    }),
    defineField({
      title: 'Thumbnail Image',
      name: 'thumbnailImage',
      type: 'lelandImage',
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),
    defineField({
      title: 'Coach app release notes',
      name: 'coachRelease',
      description: 'These release notes are for the coach app.',
      type: 'boolean',
      initialValue: false,
      group: 'main',
    }),
    defineField({
      title: 'Tags',
      name: 'releaseTags',
      type: 'tags',
      options: {
        includeFromRelated: 'releaseTags',
      },
      group: 'main',
    }),
    defineField({
      title: 'Published at',
      name: 'firstPublishedAt',
      type: 'datetime',
      description:
        'This will be automatically set on first successful "Publish" of this article.',
      hidden: true,
      readOnly: true,
      group: 'main',
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        { type: 'releaseNotesText' },
        { type: 'textBreak' },
        { type: 'callToAction' },
        { type: 'floatedImage' },
        { type: 'imageRow' },
        { type: 'note' },
        { type: 'quoteCallout' },
        { type: 'textCallout' },
        { type: 'youtube' },
      ],
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Version, New',
      name: 'versionDesc',
      by: [{ field: 'version', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'featuredImage',
    },
  },
});
