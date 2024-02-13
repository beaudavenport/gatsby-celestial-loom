import { FontIcon } from '@react-md/icon';
import { GridCell } from "@react-md/utils"

import PropTypes from 'prop-types';
import React from 'react';

import { JumboSubheader } from '../Common';

const CenteredCell = ({ title, fontIconName, children }) => (
  <GridCell size={6} tabletSize={4} style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ padding: 10, width: '100%' }}>
      {fontIconName && (
      <div style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
        <FontIcon style={{ textAlign: 'center', fontSize: '4rem' }}>{fontIconName}</FontIcon>
      </div>
      )}
      {title && <JumboSubheader>{title}</JumboSubheader> }
      { children }
    </div>
  </GridCell>
);

CenteredCell.propTypes = {
  title: PropTypes.string.isRequired,
  fontIconName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CenteredCell;
