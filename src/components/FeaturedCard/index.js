import { CardText } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

import { Subheader, Title } from '../Common';
import CardCornerHighlight from '../CardCornerHighlight';
import TextWithChevron from '../TextWithChevron';
import TouchableLink from '../TouchableLink';

const FeaturedCard = ({
  path,
  image,
  title,
  excerpt,
  publishDate,
  cornerIconName,
  cornerTitle,
  relatedItemChips,
}) => (
  <div>
    <TouchableLink to={path}>
      <div className="featured-card--container">
        <img className="featured-card--image" src={image} alt="Preview of featured post" />
        {cornerIconName && <CardCornerHighlight iconName={cornerIconName} title={cornerTitle} />}
      </div>
      <div style={{ padding: 16 }}>
        <Title>{title}</Title>
        <h3 className="featured-card--publish-date">
          {publishDate}
        </h3>
      </div>
      <CardText style={{ padding: 16 }}>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        <TextWithChevron text="Read more" />
      </CardText>
    </TouchableLink>
    { relatedItemChips && (
    <div className="padded-section">
      <Subheader>Mentioned in this post:</Subheader>
      {relatedItemChips}
    </div>
    )
  }
  </div>
);

FeaturedCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
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
