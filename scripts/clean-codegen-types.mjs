import { readFileSync, writeFileSync } from 'fs';

console.log('\n⏳ Extending and cleaning generated types');

const FILE_LOCATION = 'dist/cmsTypes.ts';
const TAG_TYPE = 'Array<{ label: string; value: string }>';
const TABLE_TYPE = `{
  _type: "table";
  rows: Array<{ _type: "tableRow"; cells: string[] }>;
}`;

let fileData = readFileSync(FILE_LOCATION, 'utf-8');

// Add Tags type
fileData = fileData.replace(
  /(type Tags = )any;/gm,
  (_match, p1) => `${p1}${TAG_TYPE};`,
);
// Add Table type
fileData = fileData.replace(
  /(type Table = )any;/gm,
  (_match, p1) => `${p1}${TABLE_TYPE};`,
);

// Replace all Sanity(Keyed)?Reference usages
fileData = fileData.replace(
  /Sanity(Keyed)?Reference<(\w*)>/gm,
  (_match, _p1, p2) => `${p2}`,
);

writeFileSync(FILE_LOCATION, fileData, 'utf-8');

console.log('👏 Generated types extended and cleaned\n');
