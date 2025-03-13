const path = require('path');

const buildEslintCommand = (filenames) =>
  `yarn lint:base --fix ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx,mjs,cjs}': [buildEslintCommand],
};
