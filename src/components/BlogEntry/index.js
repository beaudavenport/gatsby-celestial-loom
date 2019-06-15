import { CardText } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import {
  PageImage, Subheader, Subtitle, Title,
} from '../Common';

function BlogEntry({
  title, image, publishDate, html, relatedItemChips,
}) {
  return (
    <div>
      <div className="content-container">
        <Title>{title}</Title>
        <Subtitle>{publishDate}</Subtitle>
      </div>
      <div className="content-container">
        <PageImage image={image} alt="Blog" />
      </div>
      {relatedItemChips && (
        <div className="content-container">
          <Subheader>Mentioned in this post:</Subheader>
            {relatedItemChips}
        </div>
      )}
      <div className="content-container">
        <CardText>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </CardText>
      </div>
    </div>
  );
}

BlogEntry.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  relatedItemChips: PropTypes.node,
};

BlogEntry.defaultProps = {
  relatedItemChips: null,
};


export default BlogEntry;
