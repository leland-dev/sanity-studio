import React from 'react';
import { HiOutlineLibrary } from 'react-icons/hi';
import { type BlockAnnotationProps } from 'sanity';

const CategoryLandingPageLink: React.FC<BlockAnnotationProps> = (props) => (
  <span>
    {props.renderDefault(props)}&nbsp;
    <HiOutlineLibrary />
  </span>
);

export default CategoryLandingPageLink;
