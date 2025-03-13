import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { type BlockAnnotationProps } from 'sanity';

const ReleaseNotesLink: React.FC<BlockAnnotationProps> = (props) => (
  <span>
    {props.renderDefault(props)}&nbsp;
    <AiOutlineStar />
  </span>
);

export default ReleaseNotesLink;
