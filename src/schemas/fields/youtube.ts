import { FaYoutube } from 'react-icons/fa';
import { defineField } from 'sanity';

import Youtube from '../../components/Youtube';
import { getYoutubeId } from '../../util';

export default defineField({
  title: 'YouTube',
  name: 'youtube',
  type: 'object',
  icon: FaYoutube,
  description: 'A YouTube video that will be embedded in the article',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    }),
  ],
  components: {
    preview: Youtube,
  },
  preview: {
    select: {
      url: 'url',
    },
  },
  validation: (Rule) =>
    Rule.required().custom<{ url?: string }>(({ url } = {}) => {
      if (!url) return true;

      if (!getYoutubeId(url)) return 'Must be a youtube video URL';

      return true;
    }),
});
