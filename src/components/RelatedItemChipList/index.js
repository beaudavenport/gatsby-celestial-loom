import PropTypes from 'prop-types';
import React from 'react';

import RelatedItemChip from '../RelatedItemChip';
import useAllToolboxNodes from '../../hooks/useAllToolboxNodes';

const RelatedItemChipList = ({ relatedItems }) => {
  const nodes = useAllToolboxNodes();
  return (
    <div className="related-items--container">
      {relatedItems.map((relatedItem) => {
        const matchingNode = nodes.find(node => node.frontmatter.title === relatedItem);
        return <RelatedItemChip key={relatedItem} item={matchingNode} />;
      })}
    </div>
  );
};

RelatedItemChipList.propTypes = {
  relatedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RelatedItemChipList;
