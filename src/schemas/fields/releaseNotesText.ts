import { AiOutlineStar } from 'react-icons/ai';
import { defineField } from 'sanity';

import ExternalLink from '../../components/ExternalLink';
import ReleaseNotesLink from '../../components/ReleaseNotesLink';

export default defineField({
  title: 'Release Notes Text',
  name: 'releaseNotesText',
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
    { title: 'Heading', value: 'h2' },
    { title: 'Subheading', value: 'h3' },
  ],
  marks: {
    annotations: [
      {
        title: 'Link',
        name: 'link',
        type: 'object',
        components: {
          annotation: ExternalLink,
        },
        fields: [
          defineField({
            name: 'href',
            type: 'url',
            validation: (Rule) => [
              Rule.required().custom<string>((href) => {
                if (href == null) return true;
                if (
                  /https?:\/\/(www\.|)(joinleland\.com)\/releases/gi.test(href)
                ) {
                  return 'Use a Release Notes link for release notes';
                }

                return true;
              }),
              Rule.uri({ scheme: ['https'] }).warning(
                'Prefer HTTPS schema for external links',
              ),
            ],
          }),
          defineField({
            title: 'Open in new tab',
            name: 'openInNew',
            type: 'boolean',
            initialValue: true,
          }),
        ],
      },
      {
        title: 'Release Notes Link',
        name: 'releaseNotesLink',
        type: 'object',
        icon: AiOutlineStar,
        components: {
          annotation: ReleaseNotesLink,
        },
        fields: [
          defineField({
            name: 'reference',
            type: 'reference',
            to: [{ type: 'releaseNotes' }],
            options: {
              disableNew: true,
            },
            validation: (Rule) => Rule.required(),
          }),
        ],
      },
    ],
    decorators: [
      { title: 'Strong', value: 'strong' },
      { title: 'Emphasis', value: 'em' },
      { title: 'Underline', value: 'underline' },
    ],
  },
  // TODO Zando
  /* eslint-disable */
  validation: (Rule) =>
  // @ts-ignore
    Rule.required().custom(({ children }) => {
      if (
        children.every(
          // @ts-ignore
          (span) => span._type === 'span' && span.text.trim() === '',
        )
      ) {
        return 'Paragraph cannot be empty';
      }

      return true;
    }),
    /* eslint-enable */
});
