import React from 'react';
import type { PreviewProps } from 'sanity';

interface Props extends PreviewProps {
  text?: string;
  image?: string;
  color?: string;
}

export const Note: React.FC<Props> = ({ text, image, color }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img src={image} alt="" />
      <span style={{ color }}>{text}</span>
    </div>
  );
};
