import { CardText, Media } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

function BlogEntry({
  title, image, publishDate, html,
}) {
  return (
    <div style={{ padding: '20px 10px' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: 5 }}>{title}</h2>
      <h3 style={{ color: 'rgba(0, 0, 0, 0.54)', marginBottom: 20, fontSize: '1.1rem' }}>
        {publishDate}
      </h3>
      <Media style={{ width: '80%', margin: '0 auto' }}>
        <img src={image} alt="blog-post" />
      </Media>
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
