import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Cell, Card, FontIcon,
} from 'react-md';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import FeaturedCard from '../components/FeaturedCard';
import ThumbnailCard from '../components/ThumbnailCard';
import DateThumbnail from '../components/ThumbnailCard/dateThumbnail';
import ImageThumbnail from '../components/ThumbnailCard/imageThumbnail';
import Pleiades from '../images/pleiades.jpg';

const IndexPage = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const [firstBlogNode, ...otherBlogNodes] = nodes.filter(node => node.frontmatter.type === 'blog');

  return (
    <Layout>
      <Jumbotron />
      <Grid style={{ padding: '20px' }}>
        <Cell size={8}>
          <FeaturedCard
            path={firstBlogNode.frontmatter.path}
            title={firstBlogNode.frontmatter.title}
            subtitle="subtitle here"
            image={firstBlogNode.frontmatter.image}
            excerpt={firstBlogNode.excerpt}
          />
          <h1 style={{ fontStyle: 'italic' }}>Earlier Articles</h1>
          { otherBlogNodes && otherBlogNodes.map(node => (
            <ThumbnailCard
              title={node.frontmatter.title}
              caption="07/12/16"
              thumbnailChildren={<ImageThumbnail imageUrl={Pleiades} />}
            />
          ))
          }
        </Cell>
        <Cell size={4}>
          <h3>Upcoming events</h3>
          <Link to="/thing1">
            <Card style={{ backgroundColor: 'white' }}>
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <DateThumbnail day="12" month="JUN" />
                <div style={{ padding: '10px' }}>
                  <p style={{ fontSize: '12px', fontWeight: 'bold' }}>Neptune/Uranus Square PlayShop</p>
                  <div style={{ display: 'flex', justifyContent: 'baseline' }}>
                    <FontIcon iconClassName="material-icons" style={{ marginBottom: '-5px' }}>near_me</FontIcon>
                    <p style={{ fontSize: '10px' }}>Divine Inspirations Boutique</p>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </Cell>
      </Grid>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___publishDate], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            image
            publishDate(formatString: "DD MMMM, YYYY")
            type
          }
          excerpt
        }
      }
    }
  }
`;
