import { Link } from 'gatsby';
import { List, ListItem } from "@react-md/list";
import {
  ExpansionList,
  ExpansionPanel,
  usePanels,
} from "@react-md/expansion-panel";
import PropTypes from 'prop-types';
import React from 'react';

const ArchiveCard = ({ sections }) => {
  const multiple = false
  const preventAllClosed = false;
  const defaultExpandedIndex = 0;
  const [panels, onKeyDown] = usePanels({
    count: sections.length,
    idPrefix: "configuring-panels",
    multiple,
    preventAllClosed,
    // this will be considered `0` if the `preventAllClosed` option is enabled
    // but still `undefined`
    defaultExpandedIndex,
  });

  return (
    <ExpansionList onKeyDown={onKeyDown}>  
      {sections.map((section, index) => (
        <ExpansionPanel {...panels[index]} header={section.primaryText}>
          <div key={section.primaryText}>
            <List>
            {section.items.map(item => (
              <div key={item.primaryText}>
                  <ListItem
                    key={item.primaryText}
                  >
                    <Link to={item.slug} className="archive_card__link">
                      {item.avatar}
                      <p>{item.primaryText}</p>
                    </Link>
                  </ListItem>
              </div>
            ))}
            </List>
          </div>
        </ExpansionPanel>
      ))}
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
