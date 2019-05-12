import {
  Avatar,
  Card,
  Cell,
  ExpansionList,
  ExpansionPanel,
  Grid,
  List,
} from 'react-md';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { Subtitle, Title } from '../components/Common';
import { getSymbolSpan } from '../helpers/symbolHelper';
import Layout from '../components/Layout';
import SidebarContents from '../components/SidebarContents';
import SidebarHeader from '../components/SidebarHeader';
import ToolboxRow from '../components/ToolboxRow';
import ZodiacWheel from '../components/ZodiacWheel';

const Toolbox = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const planetNodes = nodes.filter(node => node.frontmatter.toolboxType === 'planets');
  const signNodes = nodes.filter(node => node.frontmatter.toolboxType === 'signs');
  const houseNodes = nodes.filter(node => node.frontmatter.toolboxType === 'houses');

  return (
    <Layout
      title="Astro Toolbox"
      sidebarChildren={(
        <Fragment>
          <SidebarHeader title="Toolbox Stuff ?????" />
          <div style={{ padding: 10 }}>
            <ExpansionList>
              <ExpansionPanel label="Signs" footer={null} headerStyle={{ fontWeight: 'bold' }}>
                <List>
                  { signNodes.map(node => (
                    <ToolboxRow
                      path={node.fields.slug}
                      title={node.frontmatter.title}
                      avatar={<Avatar>{getSymbolSpan(node.frontmatter.title)}</Avatar>}
                      excerpt={node.frontmatter.excerpt}
                    />
                  ))
            }
                </List>
              </ExpansionPanel>
              <ExpansionPanel label="Houses" footer={null} headerStyle={{ fontWeight: 'bold' }}>
                <List>
                  { houseNodes.map(node => (
                    <ToolboxRow
                      path={node.fields.slug}
                      title={node.frontmatter.title}
                      avatar={<Avatar>{getSymbolSpan(node.frontmatter.title)}</Avatar>}
                      excerpt={node.frontmatter.excerpt}
                    />
                  ))
            }
                </List>
              </ExpansionPanel>
              <ExpansionPanel label="Planets" footer={null} headerStyle={{ fontWeight: 'bold' }}>
                <List>
                  { planetNodes.map(node => (
                    <ToolboxRow
                      path={node.fields.slug}
                      title={node.frontmatter.title}
                      avatar={<Avatar>{getSymbolSpan(node.frontmatter.title)}</Avatar>}
                      excerpt={node.frontmatter.excerpt}
                    />
                  ))
            }
                </List>
              </ExpansionPanel>
            </ExpansionList>
          </div>
          <SidebarContents eventsQuantity={2} postsQuantity={2} />
        </Fragment>
  )}
    >
      <Grid>
        <Cell size={10}>
          <Title>Your Astrology Toolbox</Title>
          <Subtitle>Explore the interactive zodiac wheel, or select a sign, house or planet</Subtitle>
        </Cell>
        <Cell size={12}>
          <Card style={{ paddingRight: 20, paddingLeft: 20 }}>
            <ZodiacWheel />
          </Card>
        </Cell>
      </Grid>
    </Layout>
  );
};

Toolbox.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Toolbox;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "toolbox"} } },
      sort: { fields: [frontmatter___publishDate], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            type
            toolboxType
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
