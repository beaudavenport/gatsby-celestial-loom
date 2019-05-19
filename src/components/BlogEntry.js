import { CardText } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

function BlogEntry({
  title, image, publishDate, html, relatedItemChips,
}) {
  return (
    <div style={{ padding: '20px 10px' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: 5 }}>{title}</h2>
      <h3 style={{ color: 'rgba(0, 0, 0, 0.54)', marginBottom: 20, fontSize: '1.1rem' }}>
        {publishDate}
      </h3>
      <div style={{ margin: '0 auto', maxWidth: 400 }}>
        <img style={{ width: '100%', objectFit: 'cover', margin: '0 auto' }} src={image} alt="post" />
      </div>
      {relatedItemChips && (
        <div style={{ padding: 20 }}>
          <p style={{ color: '#ec6602', fontWeight: 'bold' }}>Mentioned in this post:</p>
          <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 1 }}>
            {relatedItemChips}
          </div>
        </div>
      )}
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
  relatedItemChips: PropTypes.node,
};

BlogEntry.defaultProps = {
  relatedItemChips: null,
};


export default BlogEntry;
