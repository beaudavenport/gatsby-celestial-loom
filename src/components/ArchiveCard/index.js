import { Link } from 'gatsby';
import { List, ListItemLink } from "@react-md/list";
import {
  ExpansionList,
  ExpansionPanel,
  usePanels,
} from "@react-md/expansion-panel";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button } from '@react-md/button';

const ArchiveCard = ({ sections, hideViewOlder = false }) => {
  const multiple = false
  const preventAllClosed = false;
  const defaultExpandedIndex = 0;
  const [isViewOlderVisible, setIsViewOlderVisible] = useState(false);
  const [panels, onKeyDown] = usePanels({
    count: sections.length,
    idPrefix: "configuring-panels",
    multiple,
    preventAllClosed,
    // this will be considered `0` if the `preventAllClosed` option is enabled
    // but still `undefined`
    defaultExpandedIndex,
  });

  const visibleSections = isViewOlderVisible || hideViewOlder ? sections : sections.slice(0,8);

  return (
    <ExpansionList onKeyDown={onKeyDown}>  
      {visibleSections.map((section, index) => (
        <ExpansionPanel {...panels[index]} header={<p className='subtitle-big'>{section.primaryText}</p>}>
          <div key={section.primaryText}>
            <List>
            {section.items.map(item => (
              <div key={item.primaryText}>
                <ListItemLink
                  key={item.primaryText}
                  leftAddon={item.avatar}
                  leftAddonType={"avatar"}
                  tileStyle={{ paddingLeft: 30 }}
                  textClassName={"title"}
                  primaryText={item.primaryText}
                  secondaryText={item.secondaryText}
                  secondaryTextClassName={"subtitle"}
                  component={Link}
                  to={item.slug}
                />
              </div>
            ))}
            </List>
          </div>
        </ExpansionPanel>
      ))}
      {!isViewOlderVisible && !hideViewOlder && (
        <div 
          className='view-older-button-container'
        >
          <Button 
            id="view-older-button" 
            theme="clear" 
            themeType="contained" 
            onClick={() => setIsViewOlderVisible(true)}
          >
              <p className='subtitle'>View older</p>
          </Button>
        </div>
      )}
    </ExpansionList>
  )
};

ArchiveCard.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      primaryText: PropTypes.string,
      secondaryText: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          primaryText: PropTypes.string,
          secondaryText: PropTypes.string,
          slug: PropTypes.string,
          avatar: PropTypes.node,
        }),
      ),
    }),
  ).isRequired,
};

export default ArchiveCard;
