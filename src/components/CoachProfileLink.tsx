import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { type BlockAnnotationProps } from 'sanity';

const CoachProfileLink: React.FC<BlockAnnotationProps> = (props) => (
  <span>
    {props.renderDefault(props)}&nbsp;
    <BsPersonFill />
  </span>
);

export default CoachProfileLink;
