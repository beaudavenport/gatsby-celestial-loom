import { FontIcon } from 'react-md';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

import TouchableLink from '../TouchableLink';

const Title = ({ children }) => (
  <h2 className="title">{children}</h2>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

const Subtitle = ({ children }) => (
  <h4 className="subtitle">{children}</h4>
);

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

const BigSubtitle = ({ children }) => (
  <h4 className="subtitle" style={{ fontSize: '1.5rem' }}>{children}</h4>
);

BigSubtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

const Subheader = ({ children }) => (
  <p className="subheader">{children}</p>
);

Subheader.propTypes = {
  children: PropTypes.string.isRequired,
};

const BigSubheader = ({ children }) => (
  <p className="subheader" style={{ fontSize: '1.5rem', lineHeight: '1.5rem' }}>{children}</p>
);

BigSubheader.propTypes = {
  children: PropTypes.string.isRequired,
};

const JumboSubheader = ({ children }) => (
  <p className="subheader" style={{ fontSize: '2rem', lineHeight: '2.5rem' }}>{children}</p>
);

JumboSubheader.propTypes = {
  children: PropTypes.string.isRequired,
};

const Caption = ({ children }) => (
  <p className="caption">{children}</p>
);

Caption.propTypes = {
  children: PropTypes.string.isRequired,
};

const BackLink = ({
  to, title, alignRight, titleStyle,
}) => (
  <div className={`link--container ${alignRight && 'link--container__right'}`}>
    <TouchableLink to={to}>
      <div className="flex-center">
        <FontIcon style={{ color: '#ec6602', fontSize: '2rem', marginRight: 5 }}>arrow_back</FontIcon>
        <p className="back-title" style={titleStyle}>{title}</p>
      </div>
    </TouchableLink>
  </div>
);

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alignRight: PropTypes.bool,
  titleStyle: PropTypes.object //eslint-disable-line
};

BackLink.defaultProps = {
  alignRight: false,
};

const ForwardLink = ({
  to, title, alignRight, titleStyle,
}) => (
  <div className={`link--container ${alignRight && 'link--container__right'}`}>
    <TouchableLink to={to}>
      <div className="flex-center">
        <p className="back-title" style={titleStyle}>{title}</p>
        <FontIcon style={{ color: '#ec6602', fontSize: '2rem', marginLeft: 5 }}>arrow_forward</FontIcon>
      </div>
    </TouchableLink>
  </div>
);

ForwardLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alignRight: PropTypes.bool,
  titleStyle: PropTypes.object //eslint-disable-line
};

ForwardLink.defaultProps = {
  alignRight: false,
};

const PageImage = ({ fluidImage, alt }) => (
  <div className="page-image--container">
    <Img fluid={fluidImage} className="page-image--image" alt={alt} />
  </div>
);

PageImage.propTypes = {
  fluidImage: PropTypes.object.isRequired, // eslint-disable-line
  alt: PropTypes.string.isRequired,
};

const ContentWithIcon = ({ fontIconName, fontIconStyle, children }) => (
  <div className="content-with-icon">
    <FontIcon style={{ marginRight: 5, ...fontIconStyle }}>{fontIconName}</FontIcon>
    {children}
  </div>
);

ContentWithIcon.propTypes = {
  fontIconName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  fontIconStyle: PropTypes.object, // eslint-disable-line
};

const FacebookIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>
);

const TwitterIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" /></svg>
);

export {
  Title,
  Subtitle,
  BigSubtitle,
  Subheader,
  BigSubheader,
  JumboSubheader,
  BackLink,
  ForwardLink,
  PageImage,
  ContentWithIcon,
  Caption,
  FacebookIcon,
  TwitterIcon,
};
