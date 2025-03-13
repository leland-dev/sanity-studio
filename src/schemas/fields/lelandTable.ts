import { TablePreview } from '@sanity/table';
import { type ComponentType } from 'react';
import { BsTable } from 'react-icons/bs';
import { defineField, type PreviewProps } from 'sanity';

export default defineField({
  title: 'Table',
  name: 'lelandTable',
  type: 'object',
  icon: BsTable,
  fields: [
    defineField({
      title: 'Table',
      name: 'table',
      type: 'table',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'First ROW is header',
      name: 'headerRow',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      title: 'First COLUMN is header',
      name: 'headerCol',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  components: {
    // explicitly cast since (TableValue & PreviewProps) is not assignable to PreviewProps
    preview: TablePreview as ComponentType<PreviewProps>,
  },
  preview: {
    select: {
      rows: 'table.rows',
    },
  },
  validation: (Rule) => Rule.required(),
});
