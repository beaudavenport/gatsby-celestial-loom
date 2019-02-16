import { Card } from 'react-md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const ThumbnailCard = ({
  title, path = '/', caption, thumbnailChildren,
}) => (
  <Link to={path}>
    <Card>
      <div className="flex-row">
        {thumbnailChildren}
        <div style={{ padding: '10px' }}>
          <h4 style={{ fontWeight: 'bold' }}>{title}</h4>
          <caption>{caption}</caption>
        </div>
      </div>
    </Card>
  </Link>
);

ThumbnailCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  thumbnailChildren: PropTypes.node.isRequired,
};
export default ThumbnailCard;
