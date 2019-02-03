import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardTitle, CardText, Media,
} from 'react-md';

function BlogEntry({
  title, image, publishDate, html,
}) {
  return (
    <Card>
      <Media>
        <img src={image} alt="blog-post" />
      </Media>
      <CardTitle title={title} subtitle={publishDate} />
      <CardText>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </CardText>
    </Card>
  );
}

BlogEntry.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  postedDate: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default BlogEntry;
