import { type SchemaTypeDefinition } from 'sanity';

import assetDownload from './fields/assetDownload';
import bodyText from './fields/bodyText';
import callToAction from './fields/callToAction';
import floatedImage from './fields/floatedImage';
import imageRow from './fields/imageRow';
import lelandImage from './fields/lelandImage';
import lelandPlusBanner from './fields/lelandPlusBanner';
import lelandTable from './fields/lelandTable';
import note from './fields/note';
import quoteCallout from './fields/quoteCallout';
import releaseNotesText from './fields/releaseNotesText';
import textBreak from './fields/textBreak';
import textCallout from './fields/textCallout';
import topCoaches from './fields/topCoaches';
import youtube from './fields/youtube';
import article from './types/article';
import category from './types/category';
import coach from './types/coach';
import goal from './types/goal';
import releaseNotes from './types/releaseNotes';

const schemaTypes: SchemaTypeDefinition[] = [
  // fields
  assetDownload,
  bodyText,
  callToAction,
  floatedImage,
  imageRow,
  lelandImage,
  lelandPlusBanner,
  lelandTable,
  note,
  quoteCallout,
  releaseNotesText,
  textBreak,
  textCallout,
  topCoaches,
  youtube,
  // types
  article,
  category,
  coach,
  goal,
  releaseNotes,
];

export default schemaTypes;
