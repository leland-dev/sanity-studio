import { defineField } from 'sanity';

export default defineField({
  title: 'Image',
  name: 'lelandImage',
  type: 'image',
  options: {
    storeOriginalFilename: false,
    hotspot: true,
  },
  fields: [
    defineField({
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
    }),
  ],
});
