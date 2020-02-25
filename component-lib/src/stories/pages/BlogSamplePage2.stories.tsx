import React from 'react';

import { Header, ProductPromoBox, RelatedArticles } from '../../index';

import img from '../sampleImages';

export default {
  title: 'Examples|Pages',
};

const RelatedArticlesProps = [
  {
    heading: 'Related articles',
    headingLink: '#',
    relatedArticles: [
      {
        link: '#',
        imageSrc: img.boyIpad,
        heading: "This is the article's heading",
        tags: ['Related', 'Article', 'Tag'],
      },
      {
        link: '#',
        imageSrc: img.womanMobile,
        heading: "This is the article's heading",
        tags: ['Related', 'Article', 'Tag'],
      },
      {
        link: '#',
        imageSrc: img.kidsIpad,
        heading: "This is the article's heading",
        tags: ['Related', 'Article', 'Tag'],
      },
      {
        link: '#',
        imageSrc: img.womanHoldingIpad,
        heading: "This is the article's heading",
        tags: ['Related', 'Article', 'Tag'],
      },
    ],
  },
];

export const BlogSamplePage2 = () => (
  <div>
    <Header
      videoSrc="https://www.youtube.com/embed/-yWZdilQQnk?rel=1&amp;controls=1&amp;showinfo=1&amp;autoplay=0"
      pageTitle="Blog"
      withMask={false}
      withContentOverlap={false}
    >
      <p>
        On this page you can have a look at the template for a Blog Page and some of the components in the styleguide
        combined with each other.
      </p>
    </Header>
    <section className="article-meta-data">
      <div className="article-meta-data__wrapper container container--large container--no-margin">
        <span className="article-meta-data__date-author">
          <span className="article-meta-data__date">Published: 15.june 2017</span>
          <span className="article-meta-data__author">by FirstName LastName</span>
        </span>
        <div className="tags">
          <span className="tags__tag">Technology</span>&nbsp;
          <span className="tags__tag">Music</span>&nbsp;
          <span className="tags__tag">Streaming</span>
        </div>
        <div className="article-meta-data__share">
          <img className="article-meta-data__share-icon" src={img.icoShare} />
        </div>
      </div>
    </section>
    <section className="rich-text container container--small container--extra-margin-bottom">
      <p className="paragraph">
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus.
        Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
      </p>

      <p className="paragraph">
        Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
        sollicitudin molestie malesuada. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
      </p>

      <div className="video">
        <div className="video__iframe-wrapper">
          <iframe
            src="https://www.youtube.com/embed/-yWZdilQQnk?rel=1&amp;controls=1&amp;showinfo=1&amp;autoplay=0"
            className="video__iframe"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="caption">Videotext here</div>
      </div>

      <p className="paragraph">
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
        Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Quisque velit nisi,
        pretium ut lacinia in, elementum id enim.
      </p>

      <p className="paragraph">
        Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget
        felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat,
        accumsan id imperdiet et, porttitor at sem.
      </p>

      <ProductPromoBox
        id="blog-promo"
        productName="Sony Xperia XZ Premium"
        imagePath="http://via.placeholder.com/140x280"
        description="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem."
        price="329"
        priceSmallprint1="per md. med Svitsj"
        buttonText="Les mer"
      ></ProductPromoBox>

      <p className="paragraph">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa,
        convallis a pellentesque nec, egestas non nisi.
      </p>

      <p className="paragraph">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
        auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Curabitur aliquet quam id dui
        posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
        velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>

      <ProductPromoBox
        id="blog-promo"
        productName="Sony Xperia XZ Premium"
        imagePath="http://via.placeholder.com/140x280"
        description="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
        price="329"
        priceSmallprint1="per md. 7891,- totalt"
        buttonText="Les mer"
        isShowingFeatures={true}
      ></ProductPromoBox>
    </section>
    {RelatedArticlesProps.map(props => (
      <RelatedArticles id="blog2" key={props.heading} {...props} />
    ))}
  </div>
);
