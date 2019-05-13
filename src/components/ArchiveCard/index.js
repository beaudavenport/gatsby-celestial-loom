import { Link } from 'gatsby';
import { List, ListItem } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

const ArchiveCard = ({ sections }) => (
  <List>
    {sections.map(section => (
      <div>
        <ListItem
          primaryTextStyle={{ fontWeight: 'bold' }}
          primaryText={section.primaryText}
          secondaryText={section.secondaryText}
          nestedItems={section.items.map(item => (
            <div>
              <ListItem
                leftAvatar={item.avatar}
                primaryTextStyle={{ fontWeight: 'bold' }}
                primaryText={item.primaryText}
                secondaryText={item.secondaryText}
                component={Link}
                to={item.slug}
              />
            </div>
          ))}
        />
      </div>
    ))}
  </List>
);

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
