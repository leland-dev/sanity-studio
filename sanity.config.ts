import { table } from '@sanity/table';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { tags } from 'sanity-plugin-tags';

import { createSetAndPublishAction } from './src/documentActions/setAndPublish';
import {
  SANITY_PROJECT_DATASET,
  SANITY_PROJECT_ID,
  SANITY_PROJECT_TITLE,
} from './src/environment';
import schemaTypes from './src/schemas';

export default defineConfig({
  name: 'default',

  title: SANITY_PROJECT_TITLE,
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_PROJECT_DATASET,

  plugins: [structureTool(), visionTool(), tags(), table()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, { schemaType }) => {
      if (schemaType === 'article' || schemaType === 'releaseNotes') {
        return prev.map((originalAction) =>
          originalAction.action === 'publish'
            ? createSetAndPublishAction(originalAction)
            : originalAction,
        );
      }
      return prev;
    },
  },
});
