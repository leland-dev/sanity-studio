import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  title: 'Article',
  name: 'article',
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
  fieldsets: [
    {
      title: 'Category Info',
      name: 'categoryInfo',
      description:
        'If a goal is selected, this article will be displayed for all categories under that goal. If specific categories are listed, it will only show up for those categories.',
      group: 'main',
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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'Note: Once published, this slug will not be editable',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
      readOnly: ({ document }) => !!document?.firstPublishedAt,
      group: 'main',
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'text',
      rows: 4,
      validation: (Rule) =>
        Rule.required().max(300).regex(/\n/, {
          invert: true,
          name: 'includes-newlines',
        }),
      description:
        "This will be displayed on the library hub pages (wherever this article is listed) and will also serve as the article's meta description.",
      group: 'main',
    }),
    defineField({
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'lelandImage',
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),
    defineField({
      title: 'Include this article in RSS feed',
      name: 'isInRss',
      description:
        'Only articles with this flag will be included in the RSS feed.',
      type: 'boolean',
      initialValue: false,
      group: 'main',
    }),
    defineField({
      title: 'Author',
      name: 'coach',
      description:
        'If the article was not written by a Leland coach, this should be left empty.',
      type: 'reference',
      to: { type: 'coach' },
      options: {
        disableNew: true,
      },
      group: 'main',
    }),
    defineField({
      title: 'This article is for coaches',
      name: 'coachAudience',
      description: `
        This article will be hidden from the main library (including any categories it applies to)
        and will only be shown in the coach section.`,
      type: 'boolean',
      initialValue: false,
      group: 'main',
    }),
    defineField({
      title: 'No index this article',
      name: 'noIndex',
      description:
        'If true, this article will not be indexed by search engines.',
      type: 'boolean',
      initialValue: false,
      group: 'main',
      validation: (Rule) =>
        Rule.custom((noIndex) =>
          noIndex
            ? 'This article will not be indexed by search engines (did I tell you that already?)'
            : true,
        ).warning(),
    }),
    defineField({
      title: 'Goal',
      name: 'goal',
      type: 'reference',
      to: { type: 'goal' },
      options: {
        disableNew: true,
      },
      validation: (Rule) =>
        Rule.custom((ref) => {
          if (ref) {
            return `
            This article will be shown on ALL landing pages for categories under this goal.
            If that is not the desired behavior, use the "Categories" field instead.
          `;
          }

          return true;
        }).info(),
      fieldset: 'categoryInfo',
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'category' },
          options: {
            disableNew: true,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
      fieldset: 'categoryInfo',
    }),
    defineField({
      title: 'Featured on Library home page',
      name: 'featuredHome',
      description:
        'This article will be shown in the featured section of the Library home page.',
      type: 'boolean',
      initialValue: false,
      group: 'main',
    }),
    defineField({
      title: 'Featured on category page',
      name: 'featuredInCategory',
      description:
        'This article will be shown in the featured section of any/all categories (or goals) it belongs to.',
      type: 'boolean',
      initialValue: false,
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
      title: 'Use Published date instead of Updated date',
      name: 'preferPublishedAt',
      type: 'boolean',
      description:
        'This determines whether or not we use the "firstPublishedAt" date or the "_updatedAt" date when displaying this article. Default (false) is "_updatedAt."',
      hidden: true,
      readOnly: true,
      initialValue: false,
      group: 'main',
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        defineArrayMember({ type: 'bodyText' }),
        defineArrayMember({ type: 'textBreak' }),
        defineArrayMember({ type: 'callToAction' }),
        defineArrayMember({ type: 'floatedImage' }),
        defineArrayMember({ type: 'imageRow' }),
        defineArrayMember({ type: 'note' }),
        defineArrayMember({ type: 'quoteCallout' }),
        defineArrayMember({ type: 'textCallout' }),
        defineArrayMember({ type: 'topCoaches' }),
        defineArrayMember({ type: 'youtube' }),
        defineArrayMember({ type: 'assetDownload' }),
        defineArrayMember({ type: 'lelandPlusBanner' }),
        defineArrayMember({ type: 'lelandTable' }),
      ],
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'tags',
      options: {
        includeFromRelated: 'tags',
      },
      group: 'main',
    }),
  ],
  orderings: [
    {
      title: 'Publish Date, New',
      name: 'publishDateDesc',
      by: [{ field: 'firstPublishedAt', direction: 'desc' }],
    },
    {
      title: 'Publish Date, Old',
      name: 'publishDateAsc',
      by: [{ field: 'firstPublishedAt', direction: 'asc' }],
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
