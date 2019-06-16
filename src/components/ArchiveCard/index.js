import { Link } from 'gatsby';
import { List, ListItem } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';

const ArchiveCard = ({ sections }) => (
  <List>
    {sections.map(section => (
      <div key={section.primaryText}>
        <ListItem
          key={section.primaryText}
          primaryTextStyle={{ fontWeight: 'bold' }}
          primaryText={section.primaryText}
          secondaryText={section.secondaryText}
          secondaryTextStyle={{ fontWeight: 'bold' }}
          nestedItems={section.items.map(item => (
            <div key={item.primaryText}>
              <ListItem
                key={item.primaryText}
                leftAvatar={item.avatar}
                tileStyle={{ paddingLeft: 30 }}
                primaryTextStyle={{ fontWeight: 'bold' }}
                primaryText={item.primaryText}
                secondaryText={item.secondaryText}
                secondaryTextStyle={{ fontWeight: 'bold' }}
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
