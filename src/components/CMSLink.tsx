import React from 'react';
import { HiOutlineDatabase } from 'react-icons/hi';
import { type BlockAnnotationProps } from 'sanity';

const CMSLink: React.FC<BlockAnnotationProps> = (props) => (
  <span>
    {props.renderDefault(props)}&nbsp;
    <HiOutlineDatabase />
  </span>
);

export default CMSLink;
