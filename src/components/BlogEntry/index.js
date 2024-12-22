import { CardContent } from '@react-md/card';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import {
  PageImage, Subheader, Subtitle, Title,
} from '../Common';

function BlogEntry({
  title, image, publishDate, html, relatedItemChips,
}) {
  return (
    <div>
      <div className="content-container">
        <h1 className='big-title'>{title}</h1>
        <h3 className='featured-card--publish-date'>{moment(publishDate).format('MMMM Do, YYYY')}</h3>
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
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </CardContent>
      </div>
    </div>
  );
}

BlogEntry.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  relatedItemChips: PropTypes.node,
};

BlogEntry.defaultProps = {
  relatedItemChips: null,
};


export default BlogEntry;
