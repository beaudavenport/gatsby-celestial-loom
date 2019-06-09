import PropTypes from 'prop-types';
import React from 'react';

import getOrigin from '../../helpers/originService';

const OriginHeader = ({ origin }) => {
  const { backgroundUrl, overlayColor } = getOrigin(origin);

  return (
    <div className="origin--header--bg" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="origin--header--overlay" style={{ background: overlayColor }}>
        <p className="origin--header--title">{origin}</p>
      </div>
    </div>
  );
};

OriginHeader.propTypes = {
  origin: PropTypes.string.isRequired,
};

export default OriginHeader;
