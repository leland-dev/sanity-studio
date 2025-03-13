import React from 'react';
import type { PreviewProps } from 'sanity';

import { getYoutubeId } from '../util';

interface Props extends PreviewProps {
  url?: string;
}

const Youtube: React.FC<Props> = ({ url }) => {
  const id = getYoutubeId(url);
  if (!id) return null;

  return (
    <iframe
      style={{ width: '100%', height: '100%' }}
      src={`https://www.youtube-nocookie.com/embed/${id}?controls=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Youtube;
