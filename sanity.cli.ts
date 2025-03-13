import { defineConfig } from 'sanity';

import { SANITY_PROJECT_DATASET, SANITY_PROJECT_ID } from './src/environment';

export default defineConfig({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_PROJECT_DATASET,
});
