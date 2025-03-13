import { BsPersonFill } from 'react-icons/bs';
import { HiOutlineDatabase, HiOutlineLibrary } from 'react-icons/hi';
import { defineField } from 'sanity';

import CMSLink from '../../components/CMSLink';
import CategoryLandingPageLink from '../../components/CategoryLandingPageLink';
import CoachProfileLink from '../../components/CoachProfileLink';
import ExternalLink from '../../components/ExternalLink';

export default defineField({
  title: 'Body Text',
  name: 'bodyText',
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
                  /https?:\/\/(www\.|)(joinleland\.com)\/library\/a\//gi.test(
                    href,
                  )
                ) {
                  return 'Use a CMS link for Leland articles';
                }

                if (
                  /https?:\/\/(www\.|)(joinleland\.com)\/library/gi.test(href)
                ) {
                  return 'Use a Category Landing Page link for Library pages';
                }

                if (
                  /https?:\/\/(www|applicant)\.joinleland\.com\/coach\/[\w-]+(?!\/p\/[\w-]+)($|\?|\/[\w-]{2,})/gi.test(
                    href,
                  )
                ) {
                  return 'Use a Coach Profile link for Leland coaches';
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
        title: 'CMS Link',
        name: 'cmsLink',
        type: 'object',
        icon: HiOutlineDatabase,
        components: {
          annotation: CMSLink,
        },
        fields: [
          defineField({
            name: 'reference',
            type: 'reference',
            to: [{ type: 'article' }],
            options: {
              disableNew: true,
            },
            validation: (Rule) => Rule.required(),
          }),
        ],
      },
      {
        title: 'Coach Profile Link',
        name: 'coachLink',
        type: 'object',
        icon: BsPersonFill,
        components: {
          annotation: CoachProfileLink,
        },
        fields: [
          defineField({
            name: 'coach',
            type: 'reference',
            to: [{ type: 'coach' }],
            options: {
              disableNew: true,
            },
            validation: (Rule) => Rule.required(),
          }),
        ],
      },
      {
        title: 'Category Landing Page Link',
        name: 'categoryyLink',
        type: 'object',
        icon: HiOutlineLibrary,
        components: {
          annotation: CategoryLandingPageLink,
        },
        fields: [
          defineField({
            name: 'category',
            type: 'reference',
            to: [{ type: 'category' }],
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
