import { CardContent } from "@react-md/card";
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import { Subheader, TitleH2 } from '../Common';
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
    <TouchableLink to={path} className="content-container">
      <div className="featured-card--container">
        <img className="featured-card--image" src={image} alt="Preview of featured post" />
        {cornerIconName && <CardCornerHighlight iconName={cornerIconName} title={cornerTitle} />}
      </div>
      <div style={{ padding: 16 }}>
        <h2 className="big-title">{title}</h2>
        <h3 className="featured-card--publish-date">
          {publishDate}
        </h3>
      </div>
      <CardContent style={{ padding: 16 }}>
        <div className="body-copy" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <TextWithChevron text="Read more" />
      </CardContent>
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
