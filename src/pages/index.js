import {
  Button, Card, CardText, Cell, FontIcon, Grid, Media,
} from 'react-md';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import FeaturedCard from '../components/FeaturedCard';
import ImageThumbnail from '../components/ThumbnailCard/imageThumbnail';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import Nikki from '../images/nikki.jpg';
import SidebarContents from '../components/SidebarContents';
import ThumbnailCard from '../components/ThumbnailCard';

const IndexPage = ({ data }) => {
  const [firstBlogNode, ...otherBlogNodes] = data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <Layout title="Home">
      <Grid style={{ maxWidth: 1100 }}>
        <Cell size={8}>
          <Jumbotron />
          <div style={{
            paddingTop: 30, fontSize: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          }}
          >
            <p style={{
              fontStyle: 'italic', fontSize: '1.25rem', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.54)',
            }}
            >
              New Blog Entries
            </p>
            <Link to="/posts" style={{ display: 'flex', textDecoration: 'none' }}>
              <p style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.54)' }}>View All</p>
              <FontIcon style={{ height: 14 }}>chevron_right</FontIcon>
            </Link>
          </div>
          <hr style={{ marginTop: 0 }} />
          <FeaturedCard
            style={{ marginBottom: 10, marginTop: 20 }}
            path={firstBlogNode.fields.slug}
            title={firstBlogNode.frontmatter.title}
            publishDate={firstBlogNode.frontmatter.publishDate}
            image={firstBlogNode.frontmatter.image}
            excerpt={firstBlogNode.excerpt}
          />
          { otherBlogNodes && otherBlogNodes.map(node => (
            <ThumbnailCard
              style={{ marginBottom: 10 }}
              title={node.frontmatter.title}
              caption="07/12/16"
              thumbnailChildren={<ImageThumbnail imageUrl={node.frontmatter.image} />}
            />
          ))
          }
        </Cell>
        <Cell size={4}>
          <Card style={{ backgroundColor: 'rgb(47, 47, 47)' }}>
            <div style={{
              width: '80%', margin: '0 auto',
            }}
            >
              <div style={{ width: '60%', margin: '0 auto', padding: '20px' }}>
                <Media aspectRatio="1-1" style={{ borderRadius: '50%', border: '2px solid #ff8013' }}>
                  <img src={Nikki} alt="at da club" />
                </Media>
              </div>
              <CardText style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: 'smaller', color: '#ff8013', textAlign: 'center' }}>
                  Nikki Davenport, astrological consultant, has been a professional
                  astrologer for over 35 years.
                </p>
                <Button
                  flat
                  primary
                  style={{
                    fontStyle: 'bold', fontFamily: 'Martel', border: '1px solid', margin: '0 auto',
                  }}
                  to="/about-nikki"
                  type={null}
                  component={Link}
                >
                  About Nikki
                </Button>
              </CardText>
            </div>
          </Card>
          <SidebarContents eventsQuantity={2} postsQuantity={0} />
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
  allMarkdownRemark(
    filter: { frontmatter: { type: { eq: "blog"} } },
    sort: { fields: [frontmatter___publishDate], order: DESC }
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          image
          publishDate(formatString: "MMM DD, YYYY")
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
