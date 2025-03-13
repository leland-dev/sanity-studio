import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { type BlockAnnotationProps } from 'sanity';

const ExternalLink: React.FC<BlockAnnotationProps> = (props) => (
  <span>
    {props.renderDefault(props)}
    {props.value.openInNew ? (
      <>
        &nbsp;
        <HiOutlineExternalLink />
      </>
    ) : null}
  </span>
);

export default ExternalLink;
