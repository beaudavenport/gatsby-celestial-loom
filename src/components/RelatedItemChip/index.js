import { Avatar } from "@react-md/avatar";
import { Chip } from "@react-md/chip";
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { FontIcon } from '@react-md/icon';

import { getSymbolSpan } from '../../helpers/symbolHelper';

const RelatedItemChip = ({ item, style }) => (
  <Chip
    style={{ ...style, margin: 10, cursor: 'pointer' }}
    onClick={() => item.fields.slug && navigate(item.fields.slug)}
    leftIcon={<Avatar><FontIcon>{getSymbolSpan(item.frontmatter.title)}</FontIcon></Avatar>}
  >
    {item.frontmatter.title}
  </Chip>
);

RelatedItemChip.propTypes = {
  item: PropTypes.object.isRequired,  // eslint-disable-line
  style: PropTypes.object, // eslint-disable-line
};

export default RelatedItemChip;
