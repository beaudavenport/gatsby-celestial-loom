import { CardText } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import { Title } from '../Common';
import CardCornerHighlight from '../CardCornerHighlight';
import TextWithChevron from '../TextWithChevron';
import TouchableLink from '../TouchableLink';

const FeaturedCard = ({
  path, image, title, subtitle, excerpt, style, publishDate, cornerIconName, cornerTitle, relatedItemChips,
}) => (
  <div>
    <TouchableLink to={path} style={style}>
      <div style={{ position: 'relative' }}>
        <img style={{ height: '250px', width: '100%', objectFit: 'cover' }} src={image} alt="Preview of featured post" />
        {cornerIconName && <CardCornerHighlight iconName={cornerIconName} title={cornerTitle} />}
      </div>
      <div style={{ padding: 16 }}>
        <Title>{title}</Title>
        <h3 style={{
          color: 'rgba(0, 0, 0, 0.54)', fontWeight: 'bold', marginBottom: 0, marginLeft: 5, fontSize: '1.1rem',
        }}
        >
          {publishDate}
        </h3>
      </div>
      <CardText style={{ padding: 16 }}>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        <TextWithChevron text="Read more" />
      </CardText>
    </TouchableLink>
    { relatedItemChips && (
    <div style={{ padding: 10 }}>
      <p style={{ color: '#ec6602', fontWeight: 'bold' }}>Mentioned in this post:</p>
      <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 1 }}>
        {relatedItemChips}
      </div>
    </div>
    )
  }
  </div>
);

FeaturedCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  cornerIconName: PropTypes.string,
  cornerTitle: PropTypes.string,
  relatedItemChips: PropTypes.node,
};

FeaturedCard.defaultProps = {
  cornerIconName: '',
  cornerTitle: '',
  relatedItemChips: null,
};

export default FeaturedCard;
