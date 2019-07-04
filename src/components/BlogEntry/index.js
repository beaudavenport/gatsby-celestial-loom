import { CardText } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import {
  PageImage, Subheader, Subtitle, Title,
} from '../Common';

function BlogEntry({
  title, fluidImage, publishDate, html, relatedItemChips,
}) {
  return (
    <div>
      <div className="content-container">
        <Title>{title}</Title>
        <Subtitle>{publishDate}</Subtitle>
      </div>
      <div className="content-container">
        <PageImage fluidImage={fluidImage} alt="Blog" />
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
  fluidImage: PropTypes.object.isRequired, // eslint-disable-line
  publishDate: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  relatedItemChips: PropTypes.node,
};

BlogEntry.defaultProps = {
  relatedItemChips: null,
};


export default BlogEntry;
