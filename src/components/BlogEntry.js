import { CardTitle, CardText, Media } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

function BlogEntry({
  title, image, publishDate, html,
}) {
  return (
    <div>
      <Media>
        <img src={image} alt="blog-post" />
      </Media>
      <CardTitle title={title} subtitle={publishDate} />
      <CardText>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </CardText>
    </div>
  );
}

BlogEntry.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default BlogEntry;
