import React from 'react';
import { type PreviewProps } from 'sanity';

interface Props extends PreviewProps {
  label?: string;
}

export const CallToAction: React.FC<Props> = ({ label }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          padding: 16,
          width: 'min-content',
          whiteSpace: 'nowrap',
          color: 'white',
          backgroundColor: '#47A27C',
          borderRadius: 8,
          textAlign: 'center',
        }}
      >
        {label}
      </div>
    </div>
  );
};
